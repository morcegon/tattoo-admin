import Artist from "@models/Artist";

const store = async (data: ArtistInsert): Promise<Artist> => {
  const artist = new Artist();
  artist.name = data.name;
  artist.type = data.type;

  return artist.save();
};

const update = async (userId: string, data: ArtistUpdate): Promise<Artist> => {
  const artist = await Artist.findOne(userId);

  if (!artist) {
    throw new Error("There's no artist with this ID");
  }

  if (data.name) artist.name = data.name;
  if (data.type) artist.type = data.type;

  return artist.save();
};

const destroy = async (userId: string): Promise<Artist> => {
  const artist = await Artist.findOneOrFail(userId);

  return artist.softRemove();
};

export default { store, update, destroy };
