/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PhylloConnectApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const WorkPlatformAttribute: core.schemas.ObjectSchema<
  WorkPlatformAttribute.Raw,
  PhylloConnectApi.connect.WorkPlatformAttribute
> = core.schemas.object({
  id: core.schemas.lazy(() => schemas.connect.WorkPlatformId),
  name: core.schemas.string(),
  logoUrl: core.schemas.property("logo_url", core.schemas.string()),
});

export declare namespace WorkPlatformAttribute {
  interface Raw {
    id: schemas.connect.WorkPlatformId.Raw;
    name: string;
    logo_url: string;
  }
}
