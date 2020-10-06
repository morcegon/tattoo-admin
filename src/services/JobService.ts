import Artist from "@models/Artist";
import Job from "@models/Job";

const store = async (data: JobInsert): Promise<Job> => {
  const job = new Job();
  const artist = await Artist.findOneOrFail(data.artistId);

  job.customer = data.customer;
  job.date = data.date;
  job.value = data.value;
  job.payment = data.payment;
  job.artist = artist;

  return job.save();
};

const update = async (jobId: string, data: JobInsert): Promise<Job> => {
  const job = await Job.findOneOrFail(jobId);

  job.customer = data.customer;
  job.date = data.date;
  job.value = data.value;
  job.payment = data.payment;

  return job.save();
};

const destroy = async (jobId: string): Promise<Job> => {
  const job = await Job.findOneOrFail(jobId);

  return job.softRemove();
};

export default { store, update, destroy };
