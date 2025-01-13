"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
    images: any[]; // Define as an array for better type safety
}

export default function ImageGallery({ images }: iAppProps) {
    // Fallback for bigImage if images is undefined or empty
    const [bigImage, setBigImage] = useState(images?.[0] || null);

    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
    };

    // Handle case where images is undefined or empty
    if (!images || images.length === 0) {
        return <p>No images available.</p>;
    }

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            {/* Thumbnail images */}
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image: any, idx: number) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-lg bg-gray-100"
                    >
                        <Image
                            src={urlFor(image).url()}
                            width={200}
                            height={200}
                            alt={`Thumbnail ${idx}`}
                            className="h-full w-full object-cover object-center cursor-pointer"
                            onClick={() => handleSmallImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            {/* Main big image */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                {bigImage && (
                    <Image
                        src={urlFor(bigImage).url()}
                        alt="Big Display"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center"
                    />
                )}

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    Sale
                </span>
            </div>
        </div>
    );
}
