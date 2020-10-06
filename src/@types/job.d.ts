type Job = import("@models/Job").default;
type Artist = import("@models/Artist").default;

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
