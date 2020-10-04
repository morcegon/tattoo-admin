import { name, random } from "faker";

import ArtistFactory from "@database/factory/ArtistFactory";
import connection from "@database/index";
import Artist from "@models/Artist";
import ArtistService from "@services/ArtistService";

const artistData: ArtistInsert = {
  name: name.findName(),
  type: random.arrayElement<ArtistType>(["tattoo", "piercer"]),
};

describe("artist service", () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  it("should store a new artist in database", async () => {
    expect.hasAssertions();

    const artist = await ArtistService.store(artistData);

    expect(artist.name).toBe(artistData.name);

    const stored = await Artist.findAndCount({ id: artist.id });

    expect(stored[1]).toBeGreaterThanOrEqual(1);
  });

  it("should update a store artist", async () => {
    expect.hasAssertions();

    const [artist] = await ArtistFactory.produce();

    const updatedData: ArtistUpdate = {
      name: name.findName(),
      type: random.arrayElement<ArtistType>(["tattoo", "piercer"]),
    };

    await ArtistService.update(artist.id, updatedData);

    const updated = await Artist.findOneOrFail(artist.id);

    expect(updated.name).toBe(updatedData.name);
  });

  it("should destroy a stored artist", async () => {
    expect.hasAssertions();

    const [artist] = await ArtistFactory.produce();

    await ArtistService.destroy(artist.id);

    const [, count] = await Artist.findAndCount({ id: artist.id });

    expect(count).toBe(0);
  });
});
