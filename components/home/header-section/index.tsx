import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { HEADER_DESCRIPTIONS } from "../../../translation-handlers/translations/header_descriptions";
import HomeNavBar from "./Navbar";

const HeaderSection = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const initalState = 0;
    const counterRef = useRef(initalState);

    useEffect(() => {
        counterRef.current = currentSlideIndex;
    });

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            console.log("Current index: ", currentSlideIndex);
            if (counterRef.current == 2) {
                setCurrentSlideIndex(0);
            } else {
                setCurrentSlideIndex(counterRef.current + 1);
            }
        }, 2000);

        return () => {
            if (intervalId) window.clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="h-screen">
            <div
                id="header"
                className="relative w-full h-full bg-[url('/city-images/image1.jpg')] bg-cover"
            >
                <div className=" bg-lime-700/[.6] absolute top-0 left-0 h-full w-full  z-100">
                    <HomeNavBar />
                    <div className="flex flex-col align-middle justify-center items-center h-5/6">
                        {currentSlideIndex == 0 && (
                            <span className={`transition-2 ease-in-out `}>
                                <h1 className=" bg-first rounded-lg w-fit text-6xl text-center p-4">
                                    Let's Build Bonga Together
                                </h1>
                                <div className="text-center text-green-100 text-2xl italic">
                                    <p className="mt-4 text-lg italic">
                                        Welcom to Bonga town development
                                        program. <br />
                                        Where you can be part of history makers
                                    </p>
                                </div>
                            </span>
                        )}
                        {currentSlideIndex == 1 && (
                            <span
                                className="duration-200 
                        ease-out transition transformt"
                            >
                                <h1 className=" bg-first rounded-lg w-fit text-6xl text-center p-4">
                                    ቦንጋን በጋራ እናልማ!
                                </h1>
                                <div className="text-center text-green-100 text-2xl italic">
                                    <p className="mt-4 text-lg italic">
                                        እንኳን ወደ ቦንጋ ከተማ እድገት ድጋፍ ማስትባበርያ በሠላም
                                        መጡ፤፤ <br />
                                        አጋር በመሆን የዚህ ታርክ አካል ይሁኑ
                                    </p>
                                </div>
                            </span>
                        )}
                        {currentSlideIndex == 2 && (
                            <span
                                className="duration-200 
                        ease-out transition transform"
                            >
                                <h1 className=" bg-first rounded-lg w-fit text-6xl text-center p-4">
                                    Boongini Tookiye Uumibo
                                </h1>
                                <div className="text-center text-green-100 text-2xl italic">
                                    <p className="mt-4 text-lg italic">
                                        Waamma Boongi kateeeme dichee
                                        uubaariyoochi diggoona waatote. <br />
                                        Hinni taarike akaalo itto tunetochi
                                        galletehon
                                    </p>
                                </div>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
