/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PhylloConnectApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const EngagementProduct: core.schemas.ObjectSchema<
  EngagementProduct.Raw,
  PhylloConnectApi.connect.EngagementProduct
> = core.schemas.object({
  isSupported: core.schemas.property("is_supported", core.schemas.boolean()),
  audience: core.schemas.lazyObject(() => schemas.connect.Audience),
});

export declare namespace EngagementProduct {
  interface Raw {
    is_supported: boolean;
    audience: schemas.connect.Audience.Raw;
  }
}
