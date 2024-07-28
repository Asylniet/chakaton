import {Timeline, TimelineContent, TimelineItem} from "@/components/ui/timeline";
import {siraArray} from "@/lib/constants";
import React from "react";
import {cn} from "@/lib/utils";

type SiraProps = {
    focusId: string;
}

export const Sira: React.FC<SiraProps> = ({focusId}) => {
    React.useEffect(() => {
        const element = document.getElementById(focusId);
        if (!element) return;
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, [focusId]);
    return (
        <Timeline>
            {siraArray.map((sira) => (
                <TimelineItem id={sira.id} key={sira.id} className={cn({
                    'bg-accent': sira.id === focusId,
                })}>
                    <TimelineContent title={sira.title}>
                        {sira.content}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}