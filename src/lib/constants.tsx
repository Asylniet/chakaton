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
        sira: "2",
    },
    {
        position: {lat: 21.422623, lng: 39.826325},
        title: "Maqaam Ibrahim",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
        images: [
            '/maqam-1.jpg',
            '/maqam-2.jpg',
            '/maqam-3.webp',
        ],
        overview: "Макам Ибрахима (место Ибрахима) — место в пределах комплекса Мечеть аль-Харам, на котором стоял пророк Ибрахим во время строительства Каабы. В настоящее время на этом месте находится небольшая постройка с куполом. В Коране макам Ибрахима упоминается дважды. Всевышний говорит (смысл): И мы приказали людям сделать макам Ибрахима (мир ему) местом для молитвы (Коран: 2/185). Макам - это место стояния. Местом стояния Ибрахима (мир ему) является камень, огороженный стеклянным столбом. При строительстве Каабы Ибрахим (мир ему) стоял на нем. Когда стена поднялась, и камень поднимался, т.е. Всевышний покорил Ибрахиму (мир ему) этот камень. Пророк Исмаил (мир ему) подавал камни пророку Ибрахиму (мир ему) и тот камень, на котором он стоял, поднимался, опускался или обходил по необходимости Каабу на подобии подъемного крана. Этот макам (камень) пришел из Рая вместе с пророком Адамом В хадисе сказано: Черный камень и макам являются яхонтами из яхонтов Рая. Если бы Всевышний не погасил их сияние, то они бы осветили все, между востоком и западом (Тирмизи, Хаким). Этот макам является одним из чудес (муъжизат) пророка Ибрахима (мир ему). Всевышний сделал камень мягким для него. До сих пор на нем видны следы обеих ног Ибрахима (мир ему).",
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
        overview: <div className="mr-3"><p className="mb-2">В самой главной мечети мусульман в Мекке в 18 метрах от Чёрного камня находится священный колодец Зам-зам. История его возникновения связана с жизнью двух пророков - Ибрахима и его сына Исмаила (мир ему)</p> 
        <p className="mb-2">В настоящее время в мечети Аль-Харам есть более чем 700 кранов, ежедневно сотни тысяч паломников берут оттуда воду Замзам. В добавок к этому тысячи специальных машин развозят воду Замзам по городам Саудии. И хвала Всевышнему, не смотря на это вода источника Замзам не кончается. <span className="font-bold">Разве это не является доказательством величия Всевышнего Аллаха?!</span></p></div>,
        amal:
        <>
            <ContextLink content={<>
                    <div>
                        <img className="rounded-[15px] w-[90%] mx-auto" src='/zamzam.jpeg'/>
                        <p className="text-black text-center text-[24px] font-bold mt-2">Правила питья воды Замзам</p>
                        <ul className="ml-6 mt-2 text-[20px]">
                            <li>1) Обратиться в сторону киблы</li>
                            <li className="mt-2">2) Произнести имя Аллаха</li>
                            <li className="mt-2">3) Пить ее в три приема</li>
                            <li className="mt-2">4) Когда закончишь пить, произнеси «Альхамдулиллях</li>
                        </ul>
                    </div>
                </>} triggerClassname='text-[16px] font-bold text-[#09090B] no-underline'>
                <div className="flex gap-2 bg-[#f4f4f5] p-[5px] rounded-[15px]">
                    <img className="w-[125px] h-[125px] rounded-[10px]" src={"/zamzam.jpeg"}/>
                    <div>
                        <p>Правила питья воды Замзам</p>
                        <p className="text-[14px] text-[#71717A] font-regular mt-2">Когда ты пьешь воду Зам-зам, ты должен обратиться в сторону киблы...</p>
                    </div>
                </div>
                
            </ContextLink>
        </>,
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
            computing. Al-Haram
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
            <ContextLink content={<>
                <p>Hello</p>
            </>}>
                Anim amet sit in
            </ContextLink>
            A group of scientists in Europe publish a paper on quantum computing research. Nostrud amet
            cillum nisi irure. Occaecat voluptate sunt laboris magna dolore. Occaecat sint sit anim quis nisi
            enim. Nostrud tempor Lorem ad quis ea mollit sint et pariatur quis ea consectetur in officia. Dolor
            in enim est Lorem qui quis consequat consequat esse dolor sit in. Fugiat id elit Lorem tempor id
            culpa veniam velit labore. Ex quis amet velit tempor aute duis irure eu adipisicing magna deserunt
            tempor quis culpa. Occaecat duis enim velit enim minim excepteur laborum voluptate. Pariatur tempor
            id velit ipsum ipsum cupidatat enim dolor officia excepteur ipsum culpa. Laboris nulla elit
            adipisicing exercitation ex amet cillum nisi occaecat. Al-Haram bro
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
