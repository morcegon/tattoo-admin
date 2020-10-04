import Job from "@models/Job";

const store = async (data: JobInsert): Promise<Job> => {
  const job = new Job();

  job.customer = data.customer;
  job.date = data.date;
  job.value = data.value;
  job.payment = data.payment;

  return job.save();
};

const update = async (jobId: string, data: JobUpdate): Promise<Job> => {
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
