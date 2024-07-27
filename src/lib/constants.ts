type CustomMarker = google.maps.marker.AdvancedMarkerElementOptions & {
    zoomCallback?: (zoom: number) => boolean;
    setZoom?: number;
}


export const markers: CustomMarker[] = [
    {
        position: {lat: 21.422550, lng: 39.826350},
        title: "3",
        gmpClickable: false,
        zoomCallback: zoom => zoom <= 18,
        setZoom: 19,
    },
    {
        position: {lat: 21.422487, lng: 39.826206},
        title: "Al-Haram",
        gmpClickable: true,
        zoomCallback: zoom => zoom > 18,
        setZoom: 20,
    },
    {
        position: {lat: 21.422623, lng: 39.826325},
        title: "Maqaam Ibrahim",
        gmpClickable: true,
        zoomCallback: zoom => zoom > 18,
        setZoom: 20,
    },
    {
        position: {lat: 21.422595, lng: 39.826533},
        title: "Zamzam",
        gmpClickable: true,
        zoomCallback: zoom => zoom > 18,
        setZoom: 20,
    },
];