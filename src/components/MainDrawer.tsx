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
import {ContextLink} from "@/components/ContextLink";

type MainDrawerProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainDrawer: React.FC<MainDrawerProps> = ({open, setOpen}) => {
    return (
        <Drawer shouldScaleBackground={true} open={open} onOpenChange={setOpen}>
            <DrawerContent className='w-full h-full'>
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
                            <div className="h-24 w-full bg-amber-100"/>
                        </TabsContent>
                        <TabsContent value="amal">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi,{' '}
                            <ContextLink content={<>
                                <ContextLink content='some cool contextual text' depth={2}> LETS LINK IT </ContextLink>
                            </>}>
                                Anim amet sit in
                            </ContextLink>
                            Qui proident magna commodo enim sint dolor eiusmod. Nisi eiusmod nisi officia
                            reprehenderit eu minim labore non incididunt nostrud enim sint sit non.
                            esse consequat commodo voluptate tempor. Qui ea sunt officia fugiat pariatur amet
                            commodo nostrud laboris est incididunt qui ad. Quis ea adipisicing esse commodo pariatur
                            esse reprehenderit anim Lorem magna consequat. Qui minim reprehenderit exercitation
                            excepteur commodo dolore do ut.

                            Cupidatat sit excepteur cillum tempor esse. Ut anim dolor aute commodo irure ipsum enim
                            anim veniam et ad est ipsum. Quis minim ullamco occaecat eu aute ullamco duis
                            consectetur velit proident. Magna labore cupidatat qui enim labore laboris incididunt.
                            Duis nostrud fugiat nulla eu anim voluptate duis pariatur voluptate magna amet cupidatat
                            laboris.

                            Irure mollit consequat qui eiusmod aliqua eu voluptate enim ea et voluptate in
                            sit elit reprehenderit. Quis velit esse eiusmod ut consectetur aliqua Lorem eu
                            incididunt dolore consequat elit tempor adipisicing. Labore dolore ullamco mollit
                            deserunt consequat eiusmod sit deserunt eu deserunt mollit reprehenderit.

                            Nisi proident nostrud incididunt eu non cillum culpa. Qui laboris laboris irure sit
                            Lorem velit tempor amet incididunt voluptate ea esse do culpa sunt. Eu ad ea cillum eu
                            ut laboris ad qui excepteur enim ut enim cillum sit dolor. Tempor enim Lorem elit mollit
                            Lorem. Ea commodo aliqua nostrud anim veniam labore cupidatat sunt fugiat cillum
                            pariatur cillum cupidatat anim. Amet consequat velit est velit do ut nostrud aute anim
                            ipsum minim laborum laborum cillum aute. Ut officia incididunt velit. esse illo
                            itaque iusto, necessitatibus nulla officia omnis optio porro quaerat quibusdam quos
                            recusandae rem sit vero voluptatem. Accusantium, aliquid.
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