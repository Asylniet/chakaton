type Location = {
    latitude: number;
    longitude: number;
    name: string;
    description: string;
    cover_image_url: string;
    overiew: Overview
}

type Overview = {
    content: React.ReactNode[]
}