import { Request, Response } from "express";

import Artist from "@models/Artist";
import ArtistService from "@services/ArtistService";

const index = async (
  req: Request,
  resp: Response
): Promise<Response<Artist[]>> => {
  return resp.json(await Artist.find());
};

const store = async (
  req: Request,
  resp: Response
): Promise<Response<Artist>> => {
  try {
    const artist = await ArtistService.store(req.body);

    return resp.json({
      success: true,
      data: await Artist.findOneOrFail(artist.id),
    });
  } catch (e) {
    return resp.status(400).json({
      error: true,
      message: e.message,
    });
  }
};

const update = async (
  req: Request<{ id: string }>,
  resp: Response
): Promise<Response<Artist>> => {
  try {
    return resp.json(await ArtistService.update(req.params.id, req.body));
  } catch (e) {
    return resp.status(400).json({
      error: true,
      message: e.message,
    });
  }
};

const destroy = async (
  req: Request<{ id: string }>,
  resp: Response
): Promise<Response> => {
  try {
    await ArtistService.destroy(req.params.id);

    return resp.json({
      success: true,
      message: "Artist successfull deleted",
    });
  } catch (e) {
    return resp.status(400).json({
      error: true,
      message: e.message,
    });
  }
};

export default { index, store, update, destroy };
