/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface Status<RawValue extends Status.RawValue = Status.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: Status._Visitor<Result>) => Result;
}

const _Active: Status<"ACTIVE"> = {
  value: "ACTIVE",
  visit: (visitor) => visitor.active(),
};
const _Inactive: Status<"INACTIVE"> = {
  value: "INACTIVE",
  visit: (visitor) => visitor.inactive(),
};
export const Status = {
  Active: _Active,
  Inactive: _Inactive,
} as const;

export declare namespace Status {
  type RawValue = "ACTIVE" | "INACTIVE" | string;

  interface _Visitor<Result> {
    active: () => Result;
    inactive: () => Result;
    _other: (value: string) => Result;
  }
}