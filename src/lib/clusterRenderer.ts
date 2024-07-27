import {Cluster, ClusterStats, Renderer} from "@googlemaps/markerclusterer";
import {createMarkerElement} from "@/lib/utils";

export class ClusterRenderer implements Renderer {
    public render(
        cluster: Cluster,
        stats: ClusterStats,
        map: google.maps.Map,
    ) {
        return new google.maps.marker.AdvancedMarkerElement({
            map,
            position: cluster.position,
            content: createMarkerElement(stats.markers.sum.toString()),
        });
    }
}