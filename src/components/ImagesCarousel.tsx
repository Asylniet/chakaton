'use client'
import React from 'react';
import {
    Carousel, CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {EmblaCarouselType} from "embla-carousel";
import {cn} from "@/lib/utils";

type ImageCarouselProps = {
    images: string[];
    interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({images, interval = 5000}) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }
    }, [api])

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <Carousel setApi={setApi} className='relative'>
            <CarouselContent className="-ml-4">
                {images.map((image) => (
                    <CarouselItem key={image} className='w-full aspect-video relative pl-4'>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'>
                            <Image fill src={image} alt={`Image ${images.indexOf(image) + 1}`}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className='absolute top-0 left-0 right-0 h-5 overlay'/>
            <div className="absolute top-1 left-0 w-full h-1 flex justify-center gap-2 px-2">
                {images.map((image, index) => {
                    return <div key={image} className={cn('flex-1 h-[2px] rounded-full', {
                        'bg-white/50': index !== current,
                        'bg-white': index === current,
                    })}/>
                })}
            </div>
        </Carousel>
    );
};

export default ImageCarousel;