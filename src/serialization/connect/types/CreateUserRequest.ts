/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PhylloConnectApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const CreateUserRequest: core.schemas.ObjectSchema<
  CreateUserRequest.Raw,
  PhylloConnectApi.connect.CreateUserRequest
> = core.schemas.object({
  name: core.schemas.string(),
  externalId: core.schemas.property(
    "external_id",
    core.schemas.lazy(() => serializers.connect.ExternalId)
  ),
});

export declare namespace CreateUserRequest {
  interface Raw {
    name: string;
    external_id: serializers.connect.ExternalId.Raw;
  }
}