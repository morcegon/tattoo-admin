type Job = import("@models/Job");

type PaymentType =
  | "money"
  | "debit - visa"
  | "debit - master"
  | "debit - elo"
  | "credit"
  | "credit installment";
type JobInsert = Required<Pick<Job, "date" | "customer" | "value" | "payment">>;
