import { AccountType } from "../models";

export interface IAccountFormModel {
  id?: number;
  holdersName: string;
  employeeName: string;
  bankId: number;
  bank: { name: string };
  branchId: number;
  branch: { name: string };
  employeeNumber: bigint;
  number: number;
  type: AccountType;
}
