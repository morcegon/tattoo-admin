import { Request, Response } from "express";

import Job from "@models/Job";
import JobService from "@services/JobService";

const index = async (req: Request, resp: Response): Promise<Response> =>
  resp.json({
    success: true,
    data: await Job.find(),
  });

const show = async (
  req: Request<{ id: string }>,
  resp: Response
): Promise<Response> =>
  resp.json({
    success: true,
    data: await Job.findOneOrFail(req.params.id),
  });

const store = async (req: Request, resp: Response): Promise<Response> => {
  try {
    const job = await JobService.store(req.body);
    return resp.json(job);
  } catch (e) {
    return resp.status(400).json({
      error: true,
      message: e.message,
    });
  }
};

export default { index, show, store };
