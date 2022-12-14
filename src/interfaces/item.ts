export type ItemScore = {
  userId: string;
  galleryId: string;
  name: string;
  audio?: string;
  references?: Array<ReferencesScore>;
  comments?: Array<CommentsScore>;
};

export type ItemMini = {
  name: string;
  audio?: string;
  references?: Array<ReferencesScore>;
};

export type ItemResponse = {
  _id: string;
  userId: string;
  galleryId: string;
  name: string;
  audio?: string;
  references?: Array<ReferencesScore>;
  comments?: Array<CommentsScore>;
  createdAt: number;
  updatedAt: number;
};

export type ReferencesScore = {
  type: "video" | "image";
  body: string;
};
export type CommentsScore = {
  body: string;
  userId: string;
};
