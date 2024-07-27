'use client'

import {
    Drawer,
    NestedDrawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Sira} from "@/components/Sira";

export const MainPage = () => {
    const [open, setOpen] = React.useState(true)
    return (
        <Drawer noBodyStyles>
            <DrawerTrigger asChild>
                <Button variant="outline">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent className='w-full h-full max-h-[96%]'>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you are done.
                    </DrawerDescription>
                </DrawerHeader>
                <section className='px-4 w-full relative'>
                    <Tabs defaultValue="overview">
                        <div className='bg-background sticky top-0 left-0 px-1 py-2 z-20'>
                            <TabsList className="w-full">
                                <TabsTrigger value="overview" className="w-full">Overview</TabsTrigger>
                                <TabsTrigger value="amal" className="w-full">Amal</TabsTrigger>
                                <TabsTrigger value="sira" className="w-full">Sira</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="overview">
                            <div className="h-screen w-full bg-amber-100"/>
                        </TabsContent>
                        <TabsContent value="amal">
                            <div className="h-24 w-full bg-green-100"/>
                        </TabsContent>
                        <TabsContent value="sira">
                            <Sira/>
                        </TabsContent>
                    </Tabs>
                </section>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}