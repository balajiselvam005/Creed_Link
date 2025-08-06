"use client";

import Pen from "./components/ui/Pen";
import Paper from "./components/ui/Paper";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Card from "./components/ui/Card";

export default function LandingPage() {
    const searchParam = useSearchParams();
    const scrollTo = searchParam.get('scrollTo');
    useEffect(() => {
        if(scrollTo) {
            const section = document.getElementById(scrollTo);
            if(section) {
                section.scrollIntoView({behavior:'smooth'});
            }
        }
    }, [scrollTo]);

    return (
        <div>
        otha
            <section id="landing-section">
                <div className="grid grid-cols-2 place-items-center max-w-7xl mx-auto min-h-screen px-4">
                    <div className="text-left space-y-6">
                        <h1 className="text-5xl font-extrabold leading-tight"> A platform where creators and organizations connect, collaborate, and thrive.</h1>
                        <p className="text-3xl font-bold text-gray-600 max-w-md">Connect. Collaborate. Create. <br /> <br /></p>
                    </div>
                    <div className="flex">
                        <Paper />
                        <Pen />
                    </div>
                </div>
            </section>
            <section id="home-section">
                <div className="grid grid-cols-3 place-items-center max-w-full mx-auto min-h-screen py-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                
            </section>
        </div>
    );
}