import {Loader} from "@googlemaps/js-api-loader";
import {MarkerClusterer} from "@googlemaps/markerclusterer";
import {DEfAULT_ZOOM, locations, MAP_CENTER, TLocation} from "@/lib/constants";
import {createMarkerElement} from "@/lib/utils";
import {ClusterRenderer} from "@/lib/clusterRenderer";

const MAP_ID = "6738530fb632a00";

export const initMap = async (apiKey: string, element: HTMLDivElement | null, onClick: (location: TLocation) => void) => {
    if (!element) return;

    const loader = new Loader({
        apiKey,
        version: "beta",
        libraries: ["maps", "marker"],
    });

    const {Map} = await loader.importLibrary("maps") as google.maps.MapsLibrary;
    const {AdvancedMarkerElement} = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

    const map = new Map(element, {
        center: MAP_CENTER,
        zoom: DEfAULT_ZOOM,
        mapId: MAP_ID,
        mapTypeId: "hybrid",
        fullscreenControl: false,
        zoomControl: false,
        mapTypeControl: false,
    });

    if (!map) return;

    const markers = locations.map((location) => {
        const {
            setZoom,
            images,
            description,
            overview,
            amal,
            sira,
            distance,
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
            if (marker.gmpClickable) onClick(location);
        });

        return marker;
    })

    new MarkerClusterer({markers, map, renderer: new ClusterRenderer()});

    return map;
}