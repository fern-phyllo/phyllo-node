/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PhylloConnectApi } from "../../..";

export interface User extends PhylloConnectApi.connect.UserAttribute {
  externalId: PhylloConnectApi.connect.ExternalId;
  createdAt: Date;
  updatedAt: Date;
  status: PhylloConnectApi.connect.Status;
}