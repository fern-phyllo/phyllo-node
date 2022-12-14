/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PhylloConnectApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const IdentityAudienceData: core.schemas.ObjectSchema<
  IdentityAudienceData.Raw,
  PhylloConnectApi.connect.IdentityAudienceData
> = core.schemas.object({
  status: core.schemas.lazy(() => serializers.connect.DataStatus),
  lastSyncAt: core.schemas.property("last_sync_at", core.schemas.date().optional()),
  monitorType: core.schemas.property(
    "monitor_type",
    core.schemas.lazy(() => serializers.connect.MonitoringType)
  ),
});

export declare namespace IdentityAudienceData {
  interface Raw {
    status: serializers.connect.DataStatus.Raw;
    last_sync_at?: string | null;
    monitor_type: serializers.connect.MonitoringType.Raw;
  }
}
