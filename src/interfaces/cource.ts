import LangList from "./languages-list";

export type CourceScore = {
    adminId: string;
    lang: LangList;
    name: string;
    text: string;
    image: string;
    view: number;
}

export type CourceResponse = {
    _id: string;
    adminId: string;
    lang: LangList;
    name: string;
    text: string;
    image: string;
    view: number;
    createdAt: number;
    updatedAt: number;
}