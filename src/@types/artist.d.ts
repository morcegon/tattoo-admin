type ArtistType = "tattoo" | "piercer";

type ArtistInsert = {
  name: string;
  type: ArtistType;
};

type Artist = ArtistInsert & {
  id: string;
};

type ArtistUpdate = Partial<ArtistInsert>;
