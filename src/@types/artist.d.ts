type Artist = import("@models/Artist");

type ArtistType = "tattoo" | "piercer";

type ArtistInsert = {
  name: string;
  type: ArtistType;
};

type ArtistInsert = Required<Pick<Artist, "name" | "type">>;

type ArtistUpdate = Partial<ArtistInsert>;
