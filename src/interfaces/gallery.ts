export type GalleryScore = {
    userId: string;
    lang: string;
    name: string;
    image: string;
    list?: Array<{
        name: string;
        audio?: string;
        references?: Array<References>;
        comments?: Array<Comments>
    }>
}

export type GalleryResponse = {
    _id: string;
    user: {
        _id: string,
        name: string
    };
    lang: string;
    name: string;
    image: string;
    list?: Array<{
        name: string;
        audio?: string;
        references?: Array<References>;
        comments?: Array<Comments>
    }>;
    createdAt: number;
    updatedAt: number
}

type References = {
    type: "audio" | "video" | "image";
    body: string
}
type Comments = {
    body: string;
    userId: string
}