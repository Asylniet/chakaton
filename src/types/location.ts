type TLocation = {
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    description: string;
    cover_image_url: string;
    overview: Overview
    amal?: Amal
    sira?: string
}

type Overview = {
    content: React.ReactNode[]
}

type Amal = {
    content: React.ReactNode[]
}
