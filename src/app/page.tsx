import {Map} from "@/components/Map";
import {Cards} from "@/components/Cards";

export default function Home() {
    return (
        <div className="h-dvh w-full">
            <Map apiKey="AIzaSyDJv7lkKemUFD_ovIk1G5WEmRlwtdPMC9M"/>
            <Cards/>
        </div>
    );
}
