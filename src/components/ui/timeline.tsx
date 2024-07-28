import React, {PropsWithChildren} from 'react';
import {cn} from "@/lib/utils";
import {className} from "postcss-selector-parser";

type TimelineProps = PropsWithChildren & {}

const Timeline: React.FC<TimelineProps> = ({children}) => {
    return (
        <div className="p-6 sm:p-10">
            <div
                className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
                {children}
            </div>
        </div>
    );
};


type TimelinePointProps = PropsWithChildren & {}

const TimelinePoint: React.FC<TimelinePointProps> = ({children}) => {
    return (
        <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1">
            {children}
        </div>
    );
};


type TimelineItemProps = PropsWithChildren & {
    id?: string;
    className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({children, id}) => {
    return (
        <div id={id} className={cn("grid gap-1 text-sm relative", className)}>
            <TimelinePoint/>
            {children}
        </div>
    );
};


type TimelineContentProps = PropsWithChildren & {
    title: React.ReactNode;
}

const TimelineContent = ({title, children}: TimelineContentProps) => {
    return (
        <>
            <div className="font-medium">{title}</div>
            <div className="text-muted-foreground">{children}</div>
        </>
    );
};

export {Timeline, TimelineItem, TimelineContent};