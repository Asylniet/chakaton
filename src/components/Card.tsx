'use client'

import {TLocation} from "@/lib/constants";
import Image from "next/image";
import React from "react";

type CardProps = {
    location: TLocation;
    onClick: (event: React.MouseEvent<HTMLDivElement>, location: TLocation) => void;
}

export const Card: React.FC<CardProps> = ({location, onClick}) => {
    return (
        <div className="flex flex-col items-start justify-end w-56 h-full relative overflow-visible"
             onClick={(event) => onClick(event, location)}>
            <div className='absolute top-0 left-2 z-[1]'>
                <div className='relative min-h-20 aspect-video rounded-lg overflow-hidden'>
                    <Image fill src={location.images[0]} alt={location.title!}/>
                </div>
            </div>
            <div
                className='w-full h-4/5 flex flex-col justify-end bg-background shadow-xl shadow-black/20 rounded-xl p-2 pb-1'>
                <div className='truncate font-medium'>
                    {location.title}
                </div>
                <span className='text-amber-400 text-sm'>
                    {location.distance} m
                </span>
            </div>
        </div>
    );
};