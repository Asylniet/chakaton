'use client'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Sira} from "@/components/Sira";
import {TLocation} from "@/lib/constants";
import ImagesCarousel from "@/components/ImagesCarousel";

type MainDrawerProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    location: TLocation;
}

export const MainDrawer: React.FC<MainDrawerProps> = ({open, setOpen, location}) => {
    return (
        <Drawer shouldScaleBackground={true} open={open} onOpenChange={setOpen}>
            <DrawerContent className='w-full h-full'>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{location.title}</DrawerTitle>
                    <DrawerDescription>
                        {location.description}
                    </DrawerDescription>
                </DrawerHeader>
                <section className='px-4 w-full relative'>
                    <Tabs defaultValue="overview">
                        <div className='bg-background sticky top-0 left-0 py-2 z-20'>
                            <TabsList className="w-full">
                                <TabsTrigger value="overview" className="w-full">Общее</TabsTrigger>
                                {location.amal && <TabsTrigger value="amal" className="w-full">Амал</TabsTrigger>}
                                <TabsTrigger value="sira" className="w-full">Сира</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="overview">
                            <div className='mb-2 w-full'>
                                <ImagesCarousel images={location.images}/>
                            </div>
                            {location.overview}
                        </TabsContent>
                        <TabsContent value="amal">
                            {location.amal}
                        </TabsContent>
                        <TabsContent value="sira">
                            <Sira focusId={location.sira} searchWord={location.title}/>
                        </TabsContent>
                    </Tabs>
                </section>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Закрыть</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}