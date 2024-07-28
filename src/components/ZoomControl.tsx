import React from "react";

type ZoomControlProps = {
    map: google.maps.Map;
}

const ZOOM_STEP = 1;

export const ZoomControl: React.FC<ZoomControlProps> = ({map}) => {
    return (
        <div className="w-10 text-xl fixed bottom-20 right-[10px] flex flex-col items-center justify-center gap-3">
            <div
                onClick={() => map.setZoom(map.getZoom()! + ZOOM_STEP)}
                className='flex items-center justify-center w-full aspect-square bg-background/80 rounded-sm backdrop-blur-sm active:bg-background/60'>
                +
            </div>
            <div
                onClick={() => map.setZoom(map.getZoom()! - ZOOM_STEP)}
                className='flex items-center justify-center w-full aspect-square bg-background/80 rounded-sm backdrop-blur-sm active:bg-background/60'>
                -
            </div>
        </div>
    )
}