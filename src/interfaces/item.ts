export type ItemScore = {
    userId: string;
    galleryId: string;
    name: string;
    audio?: string;
    references?: Array<References>;
    comments?: Array<Comments>
}

export type ItemResponse = {
    _id: string;
    userId: string;
    galleryId: string;
    name: string;
    audio?: string;
    references?: Array<References>;
    comments?: Array<Comments>;
    createdAt: number;
    updatedAt: number
}

export type References = {
    type: "audio" | "video" | "image";
    body: string
}
export type Comments = {
    body: string;
    userId: string
}
