export type TLocation = google.maps.marker.AdvancedMarkerElementOptions & {
    setZoom?: number;
    images: string[];
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
        ]
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
        ]
    },
    {
        position: {lat: 21.422595, lng: 39.826533},
        title: "Zamzam",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
        images: [
            '/zamzam-1.jpg',
        ]
    },
];
