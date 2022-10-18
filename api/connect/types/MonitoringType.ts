/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface MonitoringType<RawValue extends MonitoringType.RawValue = MonitoringType.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: MonitoringType._Visitor<Result>) => Result;
}

const _Standard: MonitoringType<"STANDARD"> = {
  value: "STANDARD",
  visit: (visitor) => visitor.standard(),
};
const _OnDemand: MonitoringType<"ON_DEMAND"> = {
  value: "ON_DEMAND",
  visit: (visitor) => visitor.onDemand(),
};
export const MonitoringType = {
  Standard: _Standard,
  OnDemand: _OnDemand,
} as const;

export declare namespace MonitoringType {
  type RawValue = "STANDARD" | "ON_DEMAND" | string;

  interface _Visitor<Result> {
    standard: () => Result;
    onDemand: () => Result;
    _other: (value: string) => Result;
  }
}
