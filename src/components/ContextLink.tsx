import {
    DrawerContent, DrawerTitle,
    DrawerTrigger, NestedDrawer
} from "@/components/ui/drawer";
import React, {PropsWithChildren} from "react";

type ContextLinkProps = PropsWithChildren & {
    content: React.ReactNode;
    depth?: number;
}

export const ContextLink: React.FC<ContextLinkProps> = ({children, content, depth = 1}) => {
    return (
        <NestedDrawer>
            <DrawerTrigger asChild className='underline text-blue-700'>
                <div className='inline-block'>
                    {children}
                </div>
            </DrawerTrigger>
            <DrawerContent className="w-full h-full" style={{maxHeight: (96 - depth * 2) + '%'}}>
                <DrawerTitle className='sr-only'>{content}</DrawerTitle>
                {content}
            </DrawerContent>
        </NestedDrawer>
    );
};