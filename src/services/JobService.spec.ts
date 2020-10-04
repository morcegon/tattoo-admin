import { name, date, random } from "faker";

import ArtistFactory from "@database/factory/ArtistFactory";
import JobFactory from "@database/factory/JobFactory";
import connection from "@database/index";
import Job from "@models/Job";
import JobService from "@services/JobService";

const randomType = () =>
  random.arrayElement<PaymentType>([
    "money",
    "debit - visa",
    "debit - master",
    "debit - elo",
    "credit",
    "credit installment",
  ]);

describe("Job Service", () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  const jobData: JobInsert = {
    customer: name.findName(),
    date: date.recent(),
    value: 100.5,
    payment: randomType(),
  };

  it("should store a new job", async () => {
    expect.hasAssertions();

    await JobService.store(jobData);

    const [, count] = await Job.findAndCount({
      where: { customer: jobData.customer },
    });

    expect(count).toBe(1);
  });

  it("should update a stored job", async () => {
    expect.hasAssertions();

    const [job] = await JobFactory.produce();
    const [artist] = await ArtistFactory.produce();

    const updateData = {
      artist,
      customer: name.findName(),
      date: date.recent(),
      payment: randomType(),
      value: random.number({ min: 10, max: 1000, precision: 0.01 }),
    };

    await JobService.update(job.id, updateData);
    const stored = await Job.findOneOrFail(job.id);

    expect(stored.customer).toBe(updateData.customer);
  });

  test.todo("should destroy a stored job");
});
