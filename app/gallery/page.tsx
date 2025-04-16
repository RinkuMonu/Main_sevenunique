'use client'
import Banner from "@/components/banner"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
export default function gallery() {
    // Sample data for the banner
    const bannerSlides = [
        {
            image: "/image/banner/Gallery.jpg",
            title: "Gallery",
            description: "To give you an inside look at our work environment, we've opened a window for you to catch a glimpse. Scroll down for a chance to explore how we live and thrive on campus.",
        },
    ]
    // all posts part start
    const allPosts = [
        {
            image: "https://www.sevenunique.com/assets/1-DH17cQmn.webp",
            title: "image1",
            description: "To give you an inside look at our work environment, we've opened a window for you to catch a glimpse. Scroll down for a chance to explore how we live and thrive on campus.",
        },
        {
            image: "https://www.sevenunique.com/assets/2-CdPAXu8A.webp",
            title: "image2",
            description: "To give you an inside look at our work environment, we've opened a window for you to catch a glimpse. Scroll down for a chance to explore how we live and thrive on campus.",
        },
        {
            image: "https://www.sevenunique.com/assets/3-CEAeUhND.webp",
            title: "image3",
            description: "To give you an inside look at our work environment, we've opened a window for you to catch a glimpse. Scroll down for a chance to explore how we live and thrive on campus.",
        },
        {
            image: "https://www.sevenunique.com/assets/4-rTzWl8RV.webp",
            title: "image4",
            description: "To give you an inside look at our work environment, we've opened a window for you to catch a glimpse. Scroll down for a chance to explore how we live and thrive on campus.",
        },
        {
            image: "https://www.sevenunique.com/assets/5-B7DnSAfx.webp",
            title: "image5",
            description: "To give you an inside look at our work environment, we've opened a window for you to catch a glimpse. Scroll down for a chance to explore how we live and thrive on campus.",
        },
        {
            image: "https://www.sevenunique.com/assets/8-D08zjVQm.webp",
            title: "image6",
            description: "To give you an inside look at our work environment, we've opened a window for you to catch a glimpse. Scroll down for a chance to explore how we live and thrive on campus.",
        },
    ]
    const [img, setImg] = useState(false);
    const [imgindex, setImgIndex] = useState('0')
    // showImage start
    const showImage = (index) => {
        setImgIndex(index)
        setImg(!img)
    }
    // removeImage start
    const removeImage = () => {
        setImg(!img)
    }
    // nextImg start
    const nextImg = () => {
        if (imgindex == allPosts.length - 1) {
            setImgIndex(0)
        } else {
            setImgIndex(imgindex + 1)
        }
    }
    // preImg start
    const preImg = () => {
        if (imgindex == 0) {
            setImgIndex(allPosts.length - 1)
        } else {
            setImgIndex(imgindex - 1)
        }
    }
    return (
        <>
            <Banner slides={bannerSlides} />
            <div className={`bg-black bg-opacity-50 min-w-full min-h-screen fixed top-10 left-0 z-10 flex justify-center items-center ${img ? '' : 'hidden'}`}>
                <div className="w-4/5 md:w-3/4 lg:w-1/2 mx-auto bg-white rounded-lg shadow-lg p-4 relative z-30 transform transition-all">
                    <Image
                        width={1000}
                        height={800}
                        src={allPosts[imgindex].image}
                        alt="Preview"
                        className="mx-auto rounded-lg shadow-md"
                    />
                    <div className="absolute top-2 right-4">
                        <button
                            className="text-red-500 text-4xl font-bold transition-all hover:text-red-700"
                            onClick={removeImage}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="bottom-5 flex justify-between pt-2 px-2 text-[8px] sm:text-[15px]">
                        <button
                            onClick={preImg}
                            className="bg-gray-800 text-white sm:py-2 sm:px-6 px-2 py-1 rounded-full hover:bg-gray-700 transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextImg}
                            className="bg-blue-600 text-white sm:py-2 sm:px-6 px-2 py-1 rounded-full hover:bg-blue-500 transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center font-semibold text-xl pt-8">Funny Moments</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
                {allPosts.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => showImage(index)}
                        className="relative cursor-pointer rounded-lg overflow-hidden transform hover:scale-105 duration-200 ease-in"
                    >
                        <Image
                            src={data.image}
                            alt={`Image for post ${data.title}`}
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </>

    )
}