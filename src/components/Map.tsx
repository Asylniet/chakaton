"use client";
import React, {useEffect, useRef} from "react";
import {MainDrawer} from "@/components/MainDrawer";
import {initMap} from "@/lib/initMap";
import {ZoomControl} from "@/components/ZoomControl";
import {Cards} from "@/components/Cards";
import {locations, TLocation} from "@/lib/constants";

type MapProps = {
    apiKey: string;
}

export const Map: React.FC<MapProps> = ({apiKey}) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);
    const [location, setLocation] = React.useState<TLocation>(locations[0]);

    const draweOpenHandler = (location: TLocation) => {
        setLocation(location);
        setOpen(true);
    }

    useEffect(() => {
        initMap(apiKey, mapRef.current, draweOpenHandler).then(map => {
            if (map) setMap(map);
        });
    }, [apiKey]);

    return <>
        <div ref={mapRef} className='w-full h-full'/>
        <ZoomControl map={map!}/>
        <MainDrawer open={open} setOpen={setOpen} location={location}/>
        <Cards onClick={(event, location) => {
            draweOpenHandler(location);
        }}/>
    </>;
};