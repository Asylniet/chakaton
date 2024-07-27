import {Loader} from "@googlemaps/js-api-loader";
import {markers} from "@/lib/constants";
import {createMarkerElement} from "@/lib/utils";

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
        zoom: 17,
        mapId: "6738530fb632a00",
        mapTypeId: "hybrid",
    });

    if (!map) return;

    markers.forEach((markerData) => {
        const {zoomCallback, setZoom, ...markerOptions} = markerData;

        const marker = new AdvancedMarkerElement({
            ...markerOptions,
            map,
            content: createMarkerElement(markerData.title),
        });

        marker.addListener("gmp-click", () => {
            map.setCenter(marker.position as google.maps.LatLng);
            if (setZoom) map.setZoom(setZoom);
            if (markerData.gmpClickable) onClick();
        });

        const handleZoom = () => {
            const zoom = map.getZoom();
            if (zoom && !!zoomCallback) {
                marker.map = zoomCallback(zoom) ? map : null;
            }
        }

        handleZoom();
        map.addListener('zoom_changed', handleZoom);
    });

}