/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface PhylloProducts<RawValue extends PhylloProducts.RawValue = PhylloProducts.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: PhylloProducts._Visitor<Result>) => Result;
}

const _Identity: PhylloProducts<"IDENTITY"> = {
  value: "IDENTITY",
  visit: (visitor) => visitor.identity(),
};
const _Engagement: PhylloProducts<"ENGAGEMENT"> = {
  value: "ENGAGEMENT",
  visit: (visitor) => visitor.engagement(),
};
const _Income: PhylloProducts<"INCOME"> = {
  value: "INCOME",
  visit: (visitor) => visitor.income(),
};
const _EngagementAudience: PhylloProducts<"ENGAGEMENT.AUDIENCE"> = {
  value: "ENGAGEMENT.AUDIENCE",
  visit: (visitor) => visitor.engagementAudience(),
};
const _IdentityAudience: PhylloProducts<"IDENTITY.AUDIENCE"> = {
  value: "IDENTITY.AUDIENCE",
  visit: (visitor) => visitor.identityAudience(),
};
export const PhylloProducts = {
  Identity: _Identity,
  Engagement: _Engagement,
  Income: _Income,
  EngagementAudience: _EngagementAudience,
  IdentityAudience: _IdentityAudience,
  _parse: (value: string): PhylloProducts => {
    switch (value) {
      case "IDENTITY": {
        return _Identity;
      }
      case "ENGAGEMENT": {
        return _Engagement;
      }
      case "INCOME": {
        return _Income;
      }
      case "ENGAGEMENT.AUDIENCE": {
        return _EngagementAudience;
      }
      case "IDENTITY.AUDIENCE": {
        return _IdentityAudience;
      }
      default: {
        return {
          value: value as PhylloProducts.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace PhylloProducts {
  type RawValue = "IDENTITY" | "ENGAGEMENT" | "INCOME" | "ENGAGEMENT.AUDIENCE" | "IDENTITY.AUDIENCE";

  interface _Visitor<Result> {
    identity: () => Result;
    engagement: () => Result;
    income: () => Result;
    engagementAudience: () => Result;
    identityAudience: () => Result;
    _other: (value: string) => Result;
  }
}
