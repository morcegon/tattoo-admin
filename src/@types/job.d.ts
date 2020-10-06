type Job = import("@models/Job");
type Artist = import("@models/Artist");

type PaymentType =
  | "money"
  | "debit - visa"
  | "debit - master"
  | "debit - elo"
  | "credit"
  | "credit installment";

type JobInsert = Required<
  Pick<Job, "date" | "customer" | "value" | "payment">
> & { artistId: string };

type JobUpdate = Partial<JobInsert>;
