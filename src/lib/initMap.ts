import {Loader} from "@googlemaps/js-api-loader";
import {MarkerClusterer, Renderer} from "@googlemaps/markerclusterer";
import {DEfAULT_ZOOM, locations} from "@/lib/constants";
import {createMarkerElement} from "@/lib/utils";
import {ClusterRenderer} from "@/lib/clusterRenderer";

export const initMap = async (apiKey: string, element: HTMLDivElement | null, onClick: () => void) => {
    if (!element) return;

    const loader = new Loader({
        apiKey,
        version: "beta",
        libraries: ["maps", "marker"],
    });

    const {Map} = await loader.importLibrary("maps") as google.maps.MapsLibrary;
    const {AdvancedMarkerElement} = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

    const map = new Map(element, {
        center: {lat: 21.422487, lng: 39.8260},
        zoom: DEfAULT_ZOOM,
        mapId: "6738530fb632a00",
        mapTypeId: "hybrid",
    });

    if (!map) return;

    const markers = locations.map((location) => {
        const {
            setZoom,
            ...markerOptions
        } = location;

        const marker = new AdvancedMarkerElement({
            ...markerOptions,
            map,
            content: createMarkerElement(location.title),
        })

        marker.addListener("gmp-click", () => {
            map.setCenter(marker.position as google.maps.LatLng);
            // Map won't center smoothly if there is no change in zoom
            // hence I added a random small number to zoom to make it smooth
            if (setZoom) map.setZoom(setZoom + Math.random() / 100);
            if (marker.gmpClickable) {
                setTimeout(() => onClick(), 300);
            }
        });

        return marker;
    })

    new MarkerClusterer({markers, map, renderer: new ClusterRenderer()});

    return map;
}