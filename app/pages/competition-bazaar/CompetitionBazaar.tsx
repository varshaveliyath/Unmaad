"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Bai_Jamjuree } from 'next/font/google';

const baiJamjuree = Bai_Jamjuree({
    weight: '700',
    subsets: ['latin'],
});

const CompetitionBazaar = () => {
    const [activeTab, setActiveTab] = useState<string | null>("Dance");
    const [scrollOffset, setScrollOffset] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const relativeScroll = scrollY + windowHeight - sectionTop;

                if (relativeScroll > 0) {
                    setScrollOffset(relativeScroll);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#E5AA38]"> {/* Fallback yellow color */}
            {/* Title Section */}
            <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/unmaad assets/royal-blue.png"
                        alt="Royal Blue Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 z-10 opacity-50 pointer-events-none">
                    <Image
                        src="/unmaad assets/pattern.svg"
                        alt="Pattern Overlay"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Title Content */}
                <div className="relative z-20 text-center">
                    <h1 className="text-5xl md:text-7xl text-white font-samarkan">
                        Competition Bazaar
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative w-full min-h-[40vh] flex flex-col justify-between overflow-hidden">
                {/* Background Layer */}
                <div
                    className="absolute inset-0 z-0 bg-[#E5AA38]"
                    style={{
                        backgroundImage: "url('/unmaad assets/competition bazaar/yellow-bg.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "auto",
                        backgroundPosition: "top center"
                    }}
                >
                    {/* Pattern Overlay */}
                    <div
                        className="absolute inset-0 z-10 opacity-50 pointer-events-none"
                        style={{
                            backgroundImage: "url('/unmaad assets/pattern.svg')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "auto",
                            backgroundPosition: "top center"
                        }}
                    />
                </div>

                {/* Top Strip */}
                <div className="relative z-30 w-full transform rotate-180">
                    <Image
                        src="/unmaad assets/competition bazaar/yellow-strip.svg"
                        alt="Yellow Strip Top"
                        width={1920}
                        height={100}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Content Area */}
                <div className="relative z-20 flex-grow flex flex-col items-center justify-center py-10 px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 max-w-6xl">
                        {["Dance", "Dramas", "Music", "Informals", "Fashion & Fine arts", "Lits & Quizzes"].map((text, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer flex justify-center rounded-full transition-all duration-150 ease-out active:scale-95 active:translate-x-1 active:translate-y-1 drop-shadow-xl active:drop-shadow-none active:shadow-[inset_0px_0px_15px_4px_rgba(0,0,0,0.4)]"
                                onClick={() => setActiveTab(text)}
                            >
                                <div className="relative">
                                    <Image
                                        src={activeTab === text
                                            ? "/unmaad assets/competition bazaar/yellow-button.svg"
                                            : "/unmaad assets/events street/purple-button.svg"
                                        }
                                        alt={text}
                                        width={250}
                                        height={90}
                                        className="w-40 md:w-60 h-auto object-contain"
                                    />
                                    <span className={`absolute inset-0 flex items-center justify-center text-[10px] md:text-base font-bold text-center px-6 uppercase ${baiJamjuree.className} leading-tight ${activeTab === text ? 'text-black' : 'text-white'}`}>
                                        {text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buildings Section (Desktop Only) */}
                    <div className="hidden lg:flex flex-col items-center gap-[18px] md:gap-[26px] mt-24 mb-24 w-full">
                        {/* Row 1 */}
                        <div className="relative flex justify-center gap-14 md:gap-36 w-full">
                            {/* Middle Frame */}
                            <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-20 translate-y-[15%]">
                                <Image
                                    key={activeTab}
                                    src="/unmaad assets/competition bazaar/frame.svg"
                                    alt="Frame"
                                    width={210}
                                    height={210}
                                    className="w-[9.5rem] md:w-[19.1rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                    style={{ animationDelay: '0.1s' }} // Middle Frame Row 1 (Visual Order 2nd)
                                />
                                <Image
                                    src="/unmaad assets/competition bazaar/frame-deco2.svg"
                                    alt="Frame Decoration 2"
                                    width={150}
                                    height={70}
                                    className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[38%] h-auto object-contain pointer-events-none hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {[1, 2].map((i) => (
                                <div key={`row1-${i}`} className="relative flex justify-center">
                                    <Image
                                        src="/unmaad assets/competition bazaar/building.svg"
                                        alt="Building"
                                        width={400}
                                        height={400}
                                        className="w-72 md:w-[30rem] h-auto object-contain relative z-10"
                                    />
                                    {/* Building Frame */}
                                    <div className="absolute bottom-[40px] z-20 translate-y-[15%]">
                                        <Image
                                            key={activeTab}
                                            src="/unmaad assets/competition bazaar/frame.svg"
                                            alt="Frame"
                                            width={210}
                                            height={210}
                                            className="w-[9.5rem] md:w-[19.1rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                            style={{ animationDelay: i === 1 ? '0s' : '0.2s' }} // i=1 (Left, 1st), i=2 (Right, 3rd)
                                        />
                                        <Image
                                            src="/unmaad assets/competition bazaar/frame-deco1.svg"
                                            alt="Frame Decoration"
                                            width={150}
                                            height={70}
                                            className={`absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[85%] h-auto object-contain pointer-events-none transition-transform duration-300 ${i === 2 ? '-ml-2 md:-ml-4 scale-x-[-1] hover:scale-x-[-1.05] hover:scale-y-[1.05]' : 'hover:scale-105'}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Parallax Carts between rows */}
                        <div className="relative w-full h-24 md:h-32 -my-8 z-50 pointer-events-none overflow-visible">
                            {/* Standard Cart - Moves Left */}
                            <div
                                className="absolute left-[15%] md:left-[28%] -top-[15px] -ml-[20px] transition-transform duration-100 ease-out"
                                style={{ transform: `translateX(calc(-50px + ${scrollOffset * -0.1}px))` }}
                            >
                                <Image
                                    src="/unmaad assets/hero page/cart.svg"
                                    alt="Cart"
                                    width={150}
                                    height={120}
                                    className="w-[4.4rem] md:w-[10rem] h-auto object-contain"
                                />
                            </div>

                            {/* Blue Cart - Moves Right */}
                            <div
                                className="absolute right-[5%] md:right-[18%] -top-[80px] mr-[40px] transition-transform duration-100 ease-out"
                                style={{ transform: `translateX(calc(50px + ${scrollOffset * 0.1}px))` }}
                            >
                                <Image
                                    src="/unmaad assets/competition bazaar/blue-cart.svg"
                                    alt="Blue Cart"
                                    width={150}
                                    height={120}
                                    className="w-[4.5rem] md:w-[10.8rem] h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="relative flex justify-center gap-14 md:gap-36 w-full">
                            {/* Middle Frame */}
                            <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-20 translate-y-[15%]">
                                <Image
                                    key={activeTab}
                                    src="/unmaad assets/competition bazaar/frame.svg"
                                    alt="Frame"
                                    width={210}
                                    height={210}
                                    className="w-[9.5rem] md:w-[19.1rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                    style={{ animationDelay: '0.4s' }} // Middle Frame Row 2 (Visual Order 5th)
                                />
                                <Image
                                    src="/unmaad assets/competition bazaar/frame-deco2.svg"
                                    alt="Frame Decoration 2"
                                    width={150}
                                    height={70}
                                    className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[38%] h-auto object-contain pointer-events-none hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {[1, 2].map((i) => (
                                <div key={`row2-${i}`} className="relative flex justify-center">
                                    <Image
                                        src="/unmaad assets/competition bazaar/building.svg"
                                        alt="Building"
                                        width={400}
                                        height={400}
                                        className="w-72 md:w-[30rem] h-auto object-contain relative z-10"
                                    />
                                    {/* Building Frame */}
                                    <div className="absolute bottom-[40px] z-20 translate-y-[15%]">
                                        <Image
                                            key={activeTab}
                                            src="/unmaad assets/competition bazaar/frame.svg"
                                            alt="Frame"
                                            width={210}
                                            height={210}
                                            className={`w-[9.5rem] md:w-[19.1rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom ${i === 2 ? 'invisible' : ''}`}
                                            style={{ animationDelay: i === 1 ? '0.3s' : '0.5s' }} // i=1 (Left, 4th), i=2 (Right, 6th)
                                        />
                                        <Image
                                            src="/unmaad assets/competition bazaar/frame-deco1.svg"
                                            alt="Frame Decoration"
                                            width={150}
                                            height={70}
                                            className={`absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[85%] h-auto object-contain pointer-events-none transition-transform duration-300 ${i === 2 ? '-ml-2 md:-ml-4 scale-x-[-1] hover:scale-x-[-1.05] hover:scale-y-[1.05]' : 'hover:scale-105'}`}
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Blue Cart - Below Row 2, Moves Right different speed */}
                            <div
                                className="absolute left-[15%] md:left-[28%] -bottom-[80px] -ml-[80px] z-50 transition-transform duration-100 ease-out"
                                style={{ transform: `translateX(calc(-50px + ${scrollOffset * 0.075}px))` }}
                            >
                                <Image
                                    src="/unmaad assets/competition bazaar/blue-cart.svg"
                                    alt="Blue Cart"
                                    width={150}
                                    height={120}
                                    className="w-[4.5rem] md:w-[10.8rem] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buildings Section (Mobile & Tablet) */}
                    <div className="flex lg:hidden flex-col items-center w-full gap-8 md:gap-20 my-8 md:my-16 relative">
                        <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-8 w-full max-w-sm md:max-w-4xl px-4 md:px-8">
                            {/* Frame 1 (With Building) */}
                            <div className="relative flex justify-center items-end">
                                <Image
                                    src="/unmaad assets/competition bazaar/building.svg"
                                    alt="Building"
                                    width={400}
                                    height={400}
                                    className="w-[33rem] md:w-[20rem] h-auto object-contain relative z-10"
                                />
                                <div className="absolute bottom-[20px] md:bottom-[40px] z-20 translate-y-[15%]">
                                    <Image
                                        key={activeTab}
                                        src="/unmaad assets/competition bazaar/frame.svg"
                                        alt="Frame"
                                        width={210}
                                        height={210}
                                        className="w-[10.8rem] md:w-[13rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                        style={{ animationDelay: '0s' }}
                                    />
                                </div>
                            </div>

                            {/* Frame 2 (+ Deco 2) */}
                            <div className="relative flex justify-center items-end pb-[20px] md:pb-[40px]">
                                <div className="relative z-20 translate-y-[15%]">
                                    <Image
                                        key={activeTab}
                                        src="/unmaad assets/competition bazaar/frame.svg"
                                        alt="Frame"
                                        width={210}
                                        height={210}
                                        className="w-[10.8rem] md:w-[13rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                        style={{ animationDelay: '0.1s' }}
                                    />
                                    <Image
                                        src="/unmaad assets/competition bazaar/frame-deco2.svg"
                                        alt="Frame Decoration"
                                        width={150}
                                        height={70}
                                        className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[38%] h-auto object-contain pointer-events-none hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Static Cart - Bottom Right, moving right -> Parallax Moving Left */}
                                    <div
                                        className="absolute -bottom-4 md:-bottom-6 -right-8 md:-right-12 z-30 transition-transform duration-100 ease-out"
                                        style={{ transform: `translateX(calc(0px + ${scrollOffset * -0.075}px))` }}
                                    >
                                        <Image
                                            src="/unmaad assets/hero page/cart.svg"
                                            alt="Cart"
                                            width={150}
                                            height={120}
                                            className="w-16 md:w-24 h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Frame 3 (+ Deco 1) */}
                            <div className="relative flex justify-center items-end pb-[20px] md:pb-[40px]">
                                <div className="relative z-20 translate-y-[15%]">
                                    <Image
                                        key={activeTab}
                                        src="/unmaad assets/competition bazaar/frame.svg"
                                        alt="Frame"
                                        width={210}
                                        height={210}
                                        className="w-[10.8rem] md:w-[13rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                        style={{ animationDelay: '0.2s' }}
                                    />
                                    <Image
                                        src="/unmaad assets/competition bazaar/frame-deco1.svg"
                                        alt="Frame Decoration"
                                        width={150}
                                        height={70}
                                        className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[85%] h-auto object-contain pointer-events-none transition-transform duration-300 -ml-2 scale-x-[-1] hover:scale-x-[-1.05] hover:scale-y-[1.05]"
                                    />
                                    {/* Static Blue Cart - Bottom Left, moving left -> Parallax Moving Right */}
                                    <div
                                        className="absolute -bottom-4 md:-bottom-6 -left-8 md:-left-12 z-30 transition-transform duration-100 ease-out"
                                        style={{ transform: `translateX(calc(0px + ${scrollOffset * 0.075}px))` }}
                                    >
                                        <Image
                                            src="/unmaad assets/competition bazaar/blue-cart.svg"
                                            alt="Blue Cart"
                                            width={150}
                                            height={120}
                                            className="w-16 md:w-24 h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Frame 4 (With Building) */}
                            <div className="relative flex justify-center items-end">
                                <Image
                                    src="/unmaad assets/competition bazaar/building.svg"
                                    alt="Building"
                                    width={400}
                                    height={400}
                                    className="w-[22rem] md:w-[20rem] h-auto object-contain relative z-10"
                                />
                                <div className="absolute bottom-[20px] md:bottom-[40px] z-20 translate-y-[15%]">
                                    <Image
                                        key={activeTab}
                                        src="/unmaad assets/competition bazaar/frame.svg"
                                        alt="Frame"
                                        width={210}
                                        height={210}
                                        className="w-[10.8rem] md:w-[13rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                        style={{ animationDelay: '0.3s' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Frame 5 (Centered + Deco 2) */}
                        <div className="relative flex justify-center mt-[2px] md:-mt-[6px]">
                            <div className="relative z-20">
                                <Image
                                    key={activeTab}
                                    src="/unmaad assets/competition bazaar/frame.svg"
                                    alt="Frame"
                                    width={210}
                                    height={210}
                                    className="w-[10.8rem] md:w-[13rem] h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-bottom"
                                    style={{ animationDelay: '0.4s' }}
                                />
                                <Image
                                    src="/unmaad assets/competition bazaar/frame-deco2.svg"
                                    alt="Frame Decoration"
                                    width={150}
                                    height={70}
                                    className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[38%] h-auto object-contain pointer-events-none hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Enter the Street Button */}
                    <div className="relative group cursor-pointer block rounded-full transition-all duration-150 ease-out active:scale-95 active:translate-x-1 active:translate-y-1 drop-shadow-xl active:drop-shadow-none active:shadow-[inset_0px_0px_15px_4px_rgba(0,0,0,0.4)] mt-4 md:mt-8 lg:mt-12">
                        <Image
                            src="/unmaad assets/home-button.svg"
                            alt="Enter the street"
                            width={200}
                            height={70}
                            className="w-40 md:w-56 lg:w-72 h-auto object-contain"
                        />
                        <span className={`absolute inset-0 flex items-center justify-center text-[#FF00A8] text-[10px] md:text-sm lg:text-xl font-bold text-center px-4 uppercase ${baiJamjuree.className}`}>
                            Enter the street
                        </span>
                    </div>
                </div>

                {/* Bottom Strip */}
                <div className="relative z-30 w-full">
                    <Image
                        src="/unmaad assets/competition bazaar/yellow-strip.svg"
                        alt="Yellow Strip Bottom"
                        width={1920}
                        height={100}
                        className="w-full h-auto object-cover block"
                    />
                </div>
            </div>
        </section>
    );
};

export default CompetitionBazaar;
