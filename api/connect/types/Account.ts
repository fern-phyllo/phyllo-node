/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PhylloConnectApi } from "../../..";

export interface Account {
  id: PhylloConnectApi.connect.AccountId;
  createdAt: Date;
  updatedAt: Date;
  user: PhylloConnectApi.connect.UserAttribute;
  workPlatform: PhylloConnectApi.connect.WorkPlatformAttribute;
  platformUsername?: string;
  profilePicUrl?: string;
  status: PhylloConnectApi.connect.AccountStatus;
  platformProfileName?: string;
  platformProfileId?: string;
  platformProfilePublishedAt?: Date;
  data: PhylloConnectApi.connect.AccountData;
}