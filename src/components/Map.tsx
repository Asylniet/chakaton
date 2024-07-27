"use client";
import React, {useEffect, useRef} from "react";
import {MainDrawer} from "@/components/MainDrawer";
import {initMap} from "@/lib/initMap";

type MapProps = {
    apiKey: string;
}

export const Map: React.FC<MapProps> = ({apiKey}) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        initMap(apiKey, mapRef.current, () => setOpen(true))
    }, [apiKey]);

    return <>
        <div ref={mapRef} className='w-full h-full'/>
        <MainDrawer open={open} setOpen={setOpen}/>
    </>;
};