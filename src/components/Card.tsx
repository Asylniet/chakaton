'use client'

import {MAP_CENTER, TLocation} from "@/lib/constants";
import Image from "next/image";
import React from "react";

type CardProps = {
    location: TLocation;
}

export const Card: React.FC<CardProps> = ({location}) => {
    const [distance, setDistance] = React.useState('0');

    React.useEffect(() => {
        const computeDistance = async () => {
            const geometry = await google.maps.importLibrary("geometry") as google.maps.GeometryLibrary;
            const distance = geometry.spherical.computeDistanceBetween(location.position!, MAP_CENTER);
            setDistance(distance.toFixed(2));
        };
        computeDistance();
    }, [location.position]);
    return (
        <div className="flex flex-col items-start justify-end w-56 h-full relative overflow-visible">
            <div className='absolute top-0 left-2 z-[1]'>
                <div className='relative min-h-20 aspect-video rounded-lg overflow-hidden'>
                    <Image fill src={location.images[0]} alt={location.title!}/>
                </div>
            </div>
            <div
                className='w-full h-4/5 flex flex-col justify-end bg-background/80 backdrop-blur-sm rounded-xl p-2 pb-1'>
                <div className='truncate font-medium'>
                    {location.title}
                </div>
                <span className='text-amber-400 text-sm'>
                    {distance} m
                </span>
            </div>
        </div>
    );
};