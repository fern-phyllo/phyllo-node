/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PhylloConnectApi } from "../../..";
import * as core from "../../../core";

export const MonitoringType: core.schemas.Schema<MonitoringType.Raw, PhylloConnectApi.connect.MonitoringType> =
  core.schemas.string().transform<PhylloConnectApi.connect.MonitoringType>({
    parse: (value) => PhylloConnectApi.connect.MonitoringType._parse(value),
    json: ({ value }) => value,
  });

export declare namespace MonitoringType {
  type Raw = string;
}