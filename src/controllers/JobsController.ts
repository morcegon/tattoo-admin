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

const update = async (req: Request, resp: Response): Promise<Response> => {
  try {
    const job = await JobService.update(req.params.id, req.body);
    return resp.json(job);
  } catch (e) {
    return resp.status(400).json({
      error: true,
      message: e.message,
    });
  }
};

const destroy = async (req: Request, resp: Response): Promise<Response> => {
  try {
    await JobService.destroy(req.params.id);
    return resp.json({
      success: true,
      message: "Job successfully deleted",
    });
  } catch (e) {
    return resp.status(400).json({
      error: true,
      message: e.message,
    });
  }
};

export default { index, destroy, show, store, update };
