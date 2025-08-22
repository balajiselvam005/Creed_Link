"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { HTMLMotionProps, motion } from "framer-motion";
import { useSignup } from "@/hooks/useSignup";
import { useLogin } from "@/hooks/useLogin";

const AuthCard = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => {
    const searchParam = useSearchParams();
    const router = useRouter();

    const initialMode =
      searchParam.get("mode") === "signup" ? "signup" : "login";
    const [mode, setMode] = useState<"signup" | "login">(initialMode);

    // group state into one form object
    const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
    });

    const signupMutation = useSignup();
    const loginMutation = useLogin();

    useEffect(() => {
      const urlMode = searchParam.get("mode");
      if (urlMode === "signup" || urlMode === "login") {
        setMode(urlMode);
      }
    }, [searchParam]);

    const toggleMode = () => {
      const newMode = mode === "login" ? "signup" : "login";
      setMode(newMode);
      router.push(`/auth?mode=${newMode}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (mode === "signup") {
        signupMutation.mutate(form, {
          onSuccess: () => router.push("/dashboard"),
        });
      } else {
        loginMutation.mutate(
          { emailId: form.emailId, password: form.password },
          { onSuccess: () => router.push("/dashboard") }
        );
      }
    };

    return (
      <motion.div
        ref={ref}
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "rounded-xl bg-gray-300 shadow-2xl w-[400px] p-6 space-y-6 overflow-hidden",
          className
        )}
        {...props}
      >
        <h2>{mode === "login" ? "Welcome Back" : "Create an Account"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <div className="space-y-2">
              <Input
                label="First name"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={form.firstName}
                onChange={handleChange}
              />
              <Input
                label="Last name"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          )}
          <Input
            label="Email id"
            name="emailId"
            type="email"
            placeholder="Enter your email id"
            value={form.emailId}
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />
          {mode === "signup" && (
            <Input
              label="Confirm password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          )}

          <Button
            type="submit"
            disabled={signupMutation.isPending || loginMutation.isPending}
          >
            {mode === "login"
              ? loginMutation.isPending
                ? "Logging in..."
                : "Login"
              : signupMutation.isPending
                ? "Signing up..."
                : "Sign Up"}
          </Button>

          {(signupMutation.error || loginMutation.error) && (
            <p className="text-red-600 text-sm mt-2">
              {(signupMutation.error as Error)?.message ||
                (loginMutation.error as Error)?.message}
            </p>
          )}
        </form>

        <p>
          <button onClick={toggleMode} className="hover:underline">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account"}
          </button>
        </p>
      </motion.div>
    );
  }
);

AuthCard.displayName = "AuthCard";
export default AuthCard;
