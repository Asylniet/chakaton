"use client";
import React, {useEffect, useRef} from "react";
import {MainDrawer} from "@/components/MainDrawer";
import {initMap} from "@/lib/initMap";
import {ZoomControl} from "@/components/ZoomControl";

type MapProps = {
    apiKey: string;
}

export const Map: React.FC<MapProps> = ({apiKey}) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    useEffect(() => {
        initMap(apiKey, mapRef.current, () => setOpen(true)).then(map => {
            if (map) setMap(map);
        });
    }, [apiKey]);

    return <>
        <div ref={mapRef} className='w-full h-full'/>
        <ZoomControl map={map!}/>
        <MainDrawer open={open} setOpen={setOpen}/>
    </>;
};