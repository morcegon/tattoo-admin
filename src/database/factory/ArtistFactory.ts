import { name, random } from "faker";

import Artist from "@models/Artist";

const produce = async (
  data?: ArtistUpdate,
  quantity = 1
): Promise<Artist[]> => {
  const artistsToSave = [];

  for (let i = 0; i < quantity; i += 1) {
    const artist = new Artist();

    artist.name = data?.name ?? name.findName();
    artist.type =
      data?.type ?? random.arrayElement<ArtistType>(["tattoo", "piercer"]);

    artistsToSave.push(artist);
  }

  return Artist.save(artistsToSave);
};

export default { produce };
