import {ContextLink} from "@/components/ContextLink";
import React from "react";
import {CenteredTitle} from "@/components/ui/centered-title";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

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
        <ContextLink content={
            <div className="w-[100%]">
                <p className="mx-auto p-2">«Когда ты пьешь воду Зам-зам, ты должен обратиться в сторону киблы, произнести имя Аллаха, пить ее в три приема, и пить столько, сколько сможешь выпить. Когда закончишь пить, произнеси «Альхамдулиллях». Разница между нами и лицемерами в том, что они не пьют эту воду, пока не напьются».</p>
                <p className="mx-auto p-2">«Такая практика является весьма желательным действием – как призывал к этому великий сподвижник Абдулла ибн Аббас (да будет доволен им Аллах). Тем не менее, это не является обязательным, поэтому не будет греха на том, кто этого не сделает. Время от времени практика обращения к кибле настолько преувеличивается, что на человека, который этого не делает, смотрят свысока. Этого следует избегать.».</p>
                <p className="text-[#829795] p-2">(Сунан ад-Даракутни, 2/288, Сунан ибн Маджа, 3061, сказал Аль-Бусири в своем Заваид, что цепь этого хадиса сахих)</p>
            </div>
        } triggerClassname="no-underline text-[#09090B]">
            <div className="">
                <img className="rounded-[15px] w-[90%] mx-auto" src='/zamzam.jpeg'/>
                <p className="text-black text-center text-[24px] font-bold mt-2">Правила питья воды Замзам</p>
                <ul className="ml-6 mt-2 text-[20px]">
                    <li>1) Обратиться в сторону киблы</li>
                    <li className="mt-2">2) Произнести имя Аллаха</li>
                    <li className="mt-2">3) Пить ее в три приема</li>
                    <li className="mt-2">4) Когда закончишь пить, <br/> произнеси «Альхамдулиллях</li>
                    <li className="mt-2 mb-10">5) Желательно пить воду <br/> Зам-зам стоя</li>
                </ul>
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
        title: "Ночь Миграж",
        content: <>
            В честь этого удивительного события названа 17-ая сура Священного Корана «аль-Исра», начинающаяся словами: «Свят тот, Кто перенес Своего раба, чтобы показать ему некоторые из знамений Наших, из Заповедной мечети

            <CenteredTitle title='556'/>
        </>
    },
    {
        id: "2",
        title: "Ночное путешествие и вознесение Пророка",
        content: <>
            Рассказал нам Абу Мухаммад Абд аль-Малик ибн Хишам, который говорил: «Рассказал нам Зияд ибн Абдаллах аль-Баккаи
            со слов Мухаммада ибн Исхака аль-Мутталиби, который сказал:
            «Потом Посланник Аллаха был перенесен из мечети аль-Харам в
            мечеть аль-Акса — а это священный дом (Иерусалим) от Илии.
        </>
    },
    {
        id: "6",
        title: "Испытание напитком",
        content: <>
            ему принесли три сосуда: сосуд с молоком, сосуд с вином и сосуд с водой. Пророк сказал: «Я слышал, как кто-то говорил, когда все это было мне предложено: «Если возьмет воду, то он утонет и утонет его народ; если
            возьмет вино, то собьется с пути и собьется с пути его народ; если
            возьмет молоко, то пойдет по правильному пути и его народ пойдет по правильному пути». Я взял молоко и отпил от него. 
            Тогда сказал ему Джабраиль: «Ты вы брал
            правильное качество, о Мухаммад, и правильный путь выбрал твой
            народ. Для вас запретно вино». 

        </>
    },
    {
        id: "6",
        title: "Открытое чтение Корана",
        content: <>
             «Первым человеком, выступившим с публичным чтением Корана после Пророка в Мекке, был Абдаллах
            ибн Мас’уд. Однажды сподвижники Пророка собрались и сказали:
            «Ей-богу! Курайшиты никогда не слышали этот Коран открыто. Кто
            же прочтет его им?» Абдаллах ибн Мас’уд сказал: «Я»
        </>
    },
    {
        id: "3",
        title: "Приказ Ибрахиму (мир ему)",
        content: <>
            {/* <ContextLink content={<>
                <p>Hello</p>
            </>}>
                Anim amet sit in
            </ContextLink> */}
            Пророку Ибрахиму (мир ему) свыше было велено отвезти жену Хаджар и нововрожденного сына Исмаила (мир ему) в безлюдную пустыню.
            В то время существовала лишь былое место Каабы, которая к тому времени обветшала и разрушилась. Хаджар спросила это приказ Всевышнего? На то Ибрахим ответил да

            <CenteredTitle title='556'/>
        </>
    },
    {
        id: "4",
        title: "горы Сафа и Маруа",
        content: <>
            {/* <ContextLink content={<>
                <p>Hello</p>
            </>}>
                Anim amet sit in
            </ContextLink> */}
            Хаджар какое-то время пила оставленную Ибрахимом (мир ему) воду. Но вода быстро закончилась и Хаджар, а также маленький Исмаил (мир ему) стали испытывать жажду и начал плакать. И не в силах вынести плач своего ребенка Хаджар устремилась на гору Сафа, которая находилась неподалеку. Она спустилась с Сафа. Но услышав плач своего ребенка, она, приподняв подол своего платья, быстро пошла в сторону горы Маруа. Взобравшись на гору она вновь оглядела все вокруг. Никого не было видно.
            Таким образом Хаджар семь раз взбиралась то на Сафа, то на Маруа. 
            <CenteredTitle title='556'/>
        </>
    },
    {
        id: "5",
        title: "Родник Замзам",
        content: <>
            {/* <ContextLink content={<>
                <p>Hello</p>
            </>}>
                Anim amet sit in
            </ContextLink> */}
            Вдруг плачущий Исмаил (мир ему) перестал плакать. И Хаджар, подбегая к нему, увидела, что из под ног младенца бил ключом источник.
            Воды было так много, что Хаджар даже старалась хоть как-то убавить струю воды. И чтобы приостановить воду Хаджар, вытянув руки и обратив ладони в сторону родника, произнесла: «Замзам!»

            <CenteredTitle title='556'/>
        </>
    }
] as const;
