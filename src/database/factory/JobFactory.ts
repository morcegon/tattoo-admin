import { date, name, random } from "faker";

import ArtistFactory from "@database/factory/ArtistFactory";
import Job from "@models/Job";

const produce = async (data?: JobUpdate, quantity = 1): Promise<Job[]> => {
  const toSave = [];
  const [artist] = await ArtistFactory.produce();

  for (let i = 0; i < quantity; i += 1) {
    const job = new Job();

    job.artist = data?.artist ?? artist;
    job.customer = data?.customer ?? name.findName();
    job.date = data?.date ?? date.recent();
    job.value =
      data?.value ?? random.number({ min: 10, max: 1000, precision: 0.01 });
    job.payment =
      data?.payment ??
      random.arrayElement<PaymentType>([
        "money",
        "debit - visa",
        "debit - master",
        "debit - elo",
        "credit",
        "credit installment",
      ]);

    toSave.push(job);
  }

  return Job.save(toSave);
};

export default { produce };
