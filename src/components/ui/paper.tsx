import { Homemade_Apple } from "next/font/google";
import { Handshake } from "lucide-react";


const homeMadeApple = Homemade_Apple({
  weight: ['400'],
  variable: "--font-homemade-apple",
  subsets: ["latin"],
});


export default function Paper() {
    return (
        <div className="flex flex-col -rotate-12 p-10 items-center shadow-2xl bg-gray-300 w-80 h-96 gap-8">
            <div className="border-2 border-b-blue-100 w-60"></div>
            <div className="border-2 border-b-blue-100 w-60"></div>
            <div className="border-2 border-b-blue-100 w-60"></div>
            <div className="border-2 border-b-blue-100 w-60"></div>
            <div className="flex items-center mt-5 gap-3">
                <h1 className={`${homeMadeApple.className} text-3xl`}>Creed Link</h1>
                <Handshake className="w-8 h-8" />
            </div>
            
        </div>
    );
}