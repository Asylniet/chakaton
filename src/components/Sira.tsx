import {Timeline, TimelineContent, TimelineItem} from "@/components/ui/timeline";
import {siraArray} from "@/lib/constants";
import React from "react";
import {HighlightContent} from "@/components/HighlightContent";

type SiraProps = {
    focusId: string;
    searchWord?: string | null;
}

export const Sira: React.FC<SiraProps> = ({focusId, searchWord}) => {
    React.useEffect(() => {
        const element = document.getElementById(focusId);
        if (!element) return;
        element.scrollIntoView({behavior: 'smooth', block: 'center'});
        element.className += ' transition-colors bg-accent';

        setTimeout(() => {
            element.className = element.className.replace(' bg-accent', '');
        }, 1000);
    }, [focusId]);
    return (
        <Timeline>
            {siraArray.map((sira) => (
                <TimelineItem id={sira.id} key={sira.id}>
                    <TimelineContent title={sira.title}>
                        {searchWord ? (
                            <HighlightContent text={sira.content} keywords={searchWord.split(' ')}/>
                        ) : sira.content}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}