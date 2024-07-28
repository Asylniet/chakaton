import {locations, TLocation} from "@/lib/constants";
import {Card} from "@/components/Card";
import React from "react";

type CardsProps = {
    onClick: (event: React.MouseEvent<HTMLDivElement>, location: TLocation) => void;
}

export const Cards: React.FC<CardsProps> = ({onClick}) => {
    return (
        <div
            className='grid grid-flow-col grid-rows-1 items-center justify-start gap-2 w-[calc(100vw-4rem)] h-[9.5rem] fixed bottom-0 pb-5 left-0 pl-2 rounded-lg overflow-x-scroll no-scrollbar'>
            {locations.map((location) => (
                <Card key={location.title} location={location} onClick={onClick}/>
            ))}
        </div>
    )
}