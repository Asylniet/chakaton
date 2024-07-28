import {
    DrawerContent, DrawerTitle,
    DrawerTrigger, NestedDrawer
} from "@/components/ui/drawer";
import React, {PropsWithChildren} from "react";
import {cn} from '@/lib/utils'

type ContextLinkProps = PropsWithChildren & {
    content: React.ReactNode;
    depth?: number;
    triggerClassname?: string;
}

export const ContextLink: React.FC<ContextLinkProps> = ({children, content, depth = 1, triggerClassname}) => {
    return (
        <NestedDrawer>
            <DrawerTrigger asChild className={cn('underline text-blue-700', triggerClassname)}>
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