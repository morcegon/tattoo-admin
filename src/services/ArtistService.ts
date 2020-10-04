import ArtistModel from "@models/Artist";

const Artist = new ArtistModel();

const store = async (data: ArtistInsert): Promise<Artist> => {
  Artist.name = data.name;
  Artist.type = data.type;

  return Artist.save();
};

const update = async (userId: string, data: ArtistUpdate): Promise<Artist> => {
  const artist = await ArtistModel.findOne(userId);

  if (!artist) {
    throw new Error("There's no artist with this ID");
  }

  if (data.name) artist.name = data.name;
  if (data.type) artist.type = data.type;

  return artist.save();
};

export default { store, update };
