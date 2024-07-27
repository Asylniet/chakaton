import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function createMarkerElement(content: string | null | undefined) {
    const markerTag = document.createElement('div');
    markerTag.className = 'marker-tag';
    if (content) markerTag.textContent = content;
    return markerTag;
}
