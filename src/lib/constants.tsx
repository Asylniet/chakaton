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
        description: "Мечеть Аль-Харам",
        overview: <div className="mr-3">
            <p className="mb-2">
                Мечеть Аль-Харам - Первая мечеть на земле. Первый храм Единому Богу, установленный Адамом и
                восстановленный после потопа Ибрахимом и Исмаилом, мир им всем.
            </p>
            <p className="mb-2"> Она является центром расположения
                великой мусульманской святыни Каабы. Масджид аль-Харам, упоминаемая еще в коранических аятах,
                является
                киблой (направлением на святыню ислама во время совершаемой верующим молитвы) и местом обязательного
                хаджа (паломничества), предписанного Кораном для каждого правоверного мусульманина. </p>
            <p className="mb-2">Значимости ей
                придает и тот факт, что здесь совершали намаз такие пророки Аллаха, как Адам, Ибрагим, Исмаил и
                Мухаммад
                (мир ему и благословение Всевышнего!).</p>
            <p className="mb-2">
                <span
                    className="font-bold">
                Но почему же &quot;запретная&quot;?</span> С
                арабского &quot;харам&quot; означает &quot;запретный&quot;, &quot;неприкосновенный&quot;,
                &quot;святыня&quot;,
                &quot;священное место&quot;. На территории мечети Харам, почитаемой священной, изначально было строжайше
                запрещено
                убийство людей и животных, ведение боев, а также ее посещение не мусульманами (иноверцами).
            </p>
            <p className="mb-2">
                О достоинстве совершения намаза в трех главных святынях (мечетях) Пророк Мухаммад, говорил: «Чтение
                намаза в мечети аль-Харам подобно чтению 100 тысяч намазов в обычной мечети. Чтение намаза в моей мечети
                (в мечети Пророка в Медине) равно чтению 1 тысячи намазов. А чтение намаза в Бейтуль-Макдис (мечети
                аль-Акса) приравнивается к 500 намазам».
            </p>
        </div>,
        amal: <>
            <ContextLink content={
                <>
                    <div className="flex gap-2 bg-[#f4f4f5] p-[5px] rounded-[15px]">
                        <div>
                            <p>Действия при входе в мечеть Аль-Харам</p>
                            <p className="ml-6 mt-2 text-[20px]">
                                <p className="mb-2">
                                    1)то есть даже не снимая груз с транспорта, по прибытии в гостиницу или на стоянку,
                                    оставляя все как есть, поручив одному смотреть за вещами нужно отправиться в
                                    Масжидуль
                                    Харам на тавафул куддум (таваф прибытия в Мекку). Не надо даже переодеваться. Не
                                    надо
                                    даже заносить вещи в номера. Это желательно так делать. Если слишком устали или
                                    мешают
                                    другие, можно и в другое время совершить таваф. Тавафул куддум можно совершить в
                                    любое
                                    время до отправления на Арафат.
                                </p>
                                <p className="mb-2">
                                    3) покаяться и чуть задержаться в мыслях, что очищаешься от грехов. Вспоминают
                                    достоинство священной мечети и том, что это самый ценный дом Аллаха
                                </p>
                                <p className="mb-2">
                                    6) Перевод: &quot;Я прошу защиты Великим Аллахом и Его прекрасной сущностью, Его
                                    изначальным
                                    царством, от сатаны, изгнанного от Его милости. С помощью имени Аллаха я вхожу, и
                                    вся
                                    хвала Аллаху.Нет силы и мощи оставить плохое и совершать поклонение, кроме как с
                                    помощью
                                    Всевышнего Аллаха. (Затем читают салават Пророку (мир ему и благословение Аллаха)).
                                    Затем произносят: &quot;О, мой Аллах! Ты смой грехи мои и открой мне врата Своей
                                    милости&quot;.
                                    При выходе из мечети читают это же дуа, только лишь там, где читают &quot;ли абваба
                                    рахматика&quot;, нужно читать &quot;абваба ризкика&quot;. Это дуа желательно читать
                                    при входе и
                                    выходе
                                    не только в Масжидуль Харам, но и во всех других мечетях. &quot;Умдат&quot;, с. 39.
                                </p>
                            </p>
                        </div>
                    </div>
                </>
            } triggerClassname='text-[16px] font-bold text-[#09090B] no-underline'>
                <div>
                    <img className="rounded-[15px] w-[90%] mx-auto" src='/al-haram-how-to.webp' alt="img"/>
                    <ul className="ml-6 mt-2 text-[20px]">
                        <li>1) (По возможности) Сразу же идти на тавафул Масжидуль Харам на тавафул куддум</li>
                        <li>2) (По возможности) Входят в мечеть через ворота &quot;Бабу ссалам&quot;
                        </li>
                        <li>3) При приближении к воротам мечети нужно заново покаяться
                        </li>
                        <li>4) Всегда входят с правой ноги, выходят с левой (в любой мечети)
                        </li>
                        <li>5) При входе и выходе внутрь читают дуа
                        </li>
                    </ul>
                </div>
            </ContextLink>
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
        description: "место Ибрахима",
        overview: <div className="mr-3">
            <p className="mb-2">Макам Ибрахима (место Ибрахима) — место в пределах комплекса Мечеть аль-Харам, на
                котором стоял пророк Ибрахим во время строительства Каабы. В настоящее время на этом месте находится
                небольшая постройка с куполом.</p>
            <p className="mb-2">Этот макам является одним из чудес (муъжизат) пророка Ибрахима (мир ему). Всевышний
                сделал камень мягким для него. До сих пор на нем видны следы обеих ног Ибрахима (мир ему).
            </p>
            <p className="mb-2">
                При строительстве Каабы Ибрахим (мир ему) стоял на нем. Когда стена поднялась, и камень поднимался, т.е.
                Всевышний покорил Ибрахиму (мир ему) этот камень. Пророк Исмаил (мир ему) подавал камни пророку Ибрахиму
                (мир ему) и тот камень, на котором он стоял, поднимался, опускался или обходил по необходимости Каабу на
                подобии подъемного крана. Этот макам (камень) пришел из Рая вместе с пророком Адамом
            </p>
            <p className="mb-2">
                В хадисе сказано: Черный камень и макам являются яхонтами из яхонтов Рая. Если бы Всевышний не погасил
                их сияние, то они бы осветили все, между востоком и западом (Тирмизи, Хаким).
            </p>
            <p className="mb-2">
                Intersting facts!
                В Коране макам Ибрахима упоминается дважды. Всевышний говорит (смысл):
                И мы приказали людям сделать макам Ибрахима (мир ему) местом для молитвы (Коран: 2/185).
            </p>
        </div>,
        amal: <>
            <ContextLink content={
                <>
                    <div className="flex gap-2 bg-[#f4f4f5] p-[5px] rounded-[15px]">
                        <div>
                            <p>Чтение два ракаат намаза за макамом</p>
                            <p className="ml-6 mt-2 text-[20px]">
                                Сподвижники Пророка (с.а.в.) и
                                его праведные последователи привыкли собираться у макама Ибрахима для совершения намаза,
                                поминания Аллаха, дуа и других видов поклонения. При наличии возможности совершение
                                намаза-таваф в макаме Ибрахима является рекомендуемым (мустахаб) действием.
                                <div className="flex gap-2 bg-[#f4f4f51] p-[5px] rounded-[15px]">
                                    <div>
                                        <p>Совершение намаза за макамом не должно быть именно за макамом</p>
                                        <p className="text-[14px] text-[#71717A] font-regular mt-2">Когда ты пьешь воду
                                            Можно совершить на
                                            той
                                            стороне, где будет удобно. Совершение на любом месте сзади макама Ибрахима
                                            (мир ему)
                                            намаза-суннат исполняется. Также исполняется суннат стояния за
                                            Макамом.(Аль-хаджу
                                            фазаилул ва ахIкамун, с. 259-262).
                                            Поэтому после двух ракаатов тавафа здесь нужно постараться от души прочитать
                                            дуа
                                            потому что это место где принимаются мольбы</p>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </>
            } triggerClassname='text-[16px] font-bold text-[#09090B] no-underline'>
                <div>
                    <img className="rounded-[15px] w-[90%] mx-auto" src='/maqam-how-to.jpg' alt="image"/>
                    <ul className="ml-6 mt-2 text-[20px]">
                        <li>1) Чтение два ракаат намаза за макамом</li>

                    </ul>
                </div>
            </ContextLink>
        </>,
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
        overview: <div className="mr-3"><p className="mb-2">В самой главной мечети мусульман в Мекке в 18 метрах от
            Чёрного камня находится священный колодец Зам-зам. История его возникновения связана с жизнью двух пророков
            - Ибрахима и его сына Исмаила (мир ему)</p>
            <p className="mb-2">В настоящее время в мечети Аль-Харам есть более чем 700 кранов, ежедневно сотни тысяч
                паломников берут оттуда воду Замзам. В добавок к этому тысячи специальных машин развозят воду Замзам по
                городам Саудии. И хвала Всевышнему, не смотря на это вода источника Замзам не кончается. <span
                    className="font-bold">Разве это не является доказательством величия Всевышнего Аллаха?!</span></p>
        </div>,
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
