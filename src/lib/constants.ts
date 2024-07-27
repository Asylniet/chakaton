type Location = google.maps.marker.AdvancedMarkerElementOptions & {
    setZoom?: number;
}

export const DEfAULT_ZOOM = 18;

export const locations: Location[] = [
    {
        position: {lat: 21.422487, lng: 39.826206},
        title: "Al-Haram",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
    },
    {
        position: {lat: 21.422623, lng: 39.826325},
        title: "Maqaam Ibrahim",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
    },
    {
        position: {lat: 21.422595, lng: 39.826533},
        title: "Zamzam",
        gmpClickable: true,
        setZoom: DEfAULT_ZOOM + 1.5,
    },
];
