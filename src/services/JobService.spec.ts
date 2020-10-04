import { name, date, random } from "faker";

import connection from "@database/index";
import Job from "@models/Job";
import JobService from "@services/JobService";

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
    payment: random.arrayElement<PaymentType>([
      "money",
      "debit - visa",
      "debit - master",
      "debit - elo",
      "credit",
      "credit installment",
    ]),
  };

  it("should store a new job", async () => {
    expect.hasAssertions();

    await JobService.store(jobData);

    const [, count] = await Job.findAndCount({
      where: { customer: jobData.customer },
    });

    expect(count).toBe(1);
  });

  test.todo("should update a stored job");

  test.todo("should destroy a stored job");
});
