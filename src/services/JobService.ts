import Job from "@models/Job";

const store = async (data: JobInsert): Promise<Job> => {
  const job = new Job();

  job.customer = data.customer;
  job.date = data.date;
  job.value = data.value;
  job.payment = data.payment;

  return job.save();
};

export default { store };
