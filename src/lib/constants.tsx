import {ContextLink} from "@/components/ContextLink";
import React from "react";
import {CenteredTitle} from "@/components/ui/centered-title";

export type TLocation = google.maps.marker.AdvancedMarkerElementOptions & {
    setZoom?: number;
    images: string[];
    description?: React.ReactNode;
    overview: React.ReactNode;
    amal?: React.ReactNode;
    sira: string;
}

export const DEfAULT_ZOOM = 18;

export const MAP_CENTER = {lat: 21.422487, lng: 39.8260};

export const locations: TLocation[] = [
    {
        position: {lat: 21.422487, lng: 39.826206},
        title: "Al-Haram",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
        images: [
            '/al-haram-1.jpg',
            '/al-haram-2.jpg',
            '/al-haram-3.jpeg',
        ],
        description: "Good place to visit",
        overview: "SOME OVERVIEW zhe est zhe",
        amal: <>
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
        </>,
        sira: "3",
    },
    {
        position: {lat: 21.422623, lng: 39.826325},
        title: "Maqaam Ibrahim",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
        images: [
            '/maqam-1.jpg',
            '/maqam-2.jpg',
            '/maqam-3.jpeg',
        ],
        overview: "Maqaam Ibrahim overview",
        sira: "3",
    },
    {
        position: {lat: 21.422595, lng: 39.826533},
        title: "Zamzam",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
        images: [
            '/zamzam-1.jpg',
        ],
        overview: "Zamzam overview",
        sira: "3",
    },
];

type SiraProps = {
    id: string;
    title: string;
    content: React.ReactNode;
}

export const siraArray: SiraProps[] = [
    {
        id: "1",
        title: "Birth",
        content: <>
            <CenteredTitle title='555'/>
            Scientists at a leading research institution unveil a groundbreaking breakthrough in quantum
            computing.
        </>
    },
    {
        id: "2",
        title: "Some cool event",
        content: <>
            The first quantum computer is built by a team of researchers in a laboratory in the United
            States.
        </>
    },
    {
        id: "3",
        title: "Go to school",
        content: <>
            A group of scientists in Europe publish a paper on quantum computing research. Nostrud amet
            cillum nisi irure. Occaecat voluptate sunt laboris magna dolore. Occaecat sint sit anim quis nisi
            enim. Nostrud tempor Lorem ad quis ea mollit sint et pariatur quis ea consectetur in officia. Dolor
            in enim est Lorem qui quis consequat consequat esse dolor sit in. Fugiat id elit Lorem tempor id
            culpa veniam velit labore. Ex quis amet velit tempor aute duis irure eu adipisicing magna deserunt
            tempor quis culpa. Occaecat duis enim velit enim minim excepteur laborum voluptate. Pariatur tempor
            id velit ipsum ipsum cupidatat enim dolor officia excepteur ipsum culpa. Laboris nulla elit
            adipisicing exercitation ex amet cillum nisi occaecat.
            <CenteredTitle title='556'/>
            Irure laboris officia adipisicing ut est
            velit. Incididunt elit voluptate non excepteur officia id dolore amet exercitation non proident quis
            velit. Ullamco anim enim dolor tempor proident nostrud dolore nulla. Voluptate proident id magna.
            Pariatur dolor in sunt occaecat eu id velit velit irure ut. Quis occaecat adipisicing ex incididunt
            est sit occaecat occaecat duis. Tempor occaecat do qui adipisicing irure. Anim velit laborum
            reprehenderit qui officia sit dolore occaecat ut. Nulla laborum do proident amet aliqua. Laborum
            duis qui laborum.
        </>
    }
] as const;
