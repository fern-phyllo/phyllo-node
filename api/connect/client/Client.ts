/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { PhylloConnectApi } from "../../..";
import urlJoin from "url-join";
import * as schemas from "../../../schemas";

export interface Client {
  getWorkPlatform(
    request: PhylloConnectApi.connect.getWorkPlatform.Request
  ): Promise<PhylloConnectApi.connect.getWorkPlatform.Response>;
  getAllWorkPlatforms(
    request: PhylloConnectApi.connect.getAllWorkPlatforms.Request
  ): Promise<PhylloConnectApi.connect.getAllWorkPlatforms.Response>;
  getUser(request: PhylloConnectApi.connect.getUser.Request): Promise<PhylloConnectApi.connect.getUser.Response>;
  getAllUsers(
    request: PhylloConnectApi.connect.getAllUsers.Request
  ): Promise<PhylloConnectApi.connect.getAllUsers.Response>;
  createUser(
    request: PhylloConnectApi.connect.CreateUserRequest
  ): Promise<PhylloConnectApi.connect.createUser.Response>;
  getUserByExernalId(
    request: PhylloConnectApi.connect.getUserByExernalId.Request
  ): Promise<PhylloConnectApi.connect.getUserByExernalId.Response>;
  createSdkToken(
    request: PhylloConnectApi.connect.SDKTokenRequest
  ): Promise<PhylloConnectApi.connect.createSdkToken.Response>;
  getAccount(
    request: PhylloConnectApi.connect.getAccount.Request
  ): Promise<PhylloConnectApi.connect.getAccount.Response>;
  getAllAccounts(
    request: PhylloConnectApi.connect.getAllAccounts.Request
  ): Promise<PhylloConnectApi.connect.getAllAccounts.Response>;
  disconnectAccount(
    request: PhylloConnectApi.connect.disconnectAccount.Request
  ): Promise<PhylloConnectApi.connect.disconnectAccount.Response>;
}

export declare namespace Client {
  interface Options {
    _origin: string;
    _credentials?: core.Supplier<core.BasicAuth>;
  }
}

export class Client implements Client {
  constructor(private readonly options: Client.Options) {}

  public async getWorkPlatform(
    request: PhylloConnectApi.connect.getWorkPlatform.Request
  ): Promise<PhylloConnectApi.connect.getWorkPlatform.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/v1/work-platforms/${request.id}`),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.WorkPlatform.parse(response.body as schemas.connect.WorkPlatform.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getAllWorkPlatforms(
    request: PhylloConnectApi.connect.getAllWorkPlatforms.Request
  ): Promise<PhylloConnectApi.connect.getAllWorkPlatforms.Response> {
    const queryParameters = new URLSearchParams();
    if (request.limit != null) {
      queryParameters.append("limit", request.limit.toString());
    }

    if (request.name != null) {
      queryParameters.append("name", request.name);
    }

    if (request.offset != null) {
      queryParameters.append("offset", request.offset.toString());
    }

    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/v1/work-platforms"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.AllWorkPlatformsResponse.parse(
          response.body as schemas.connect.AllWorkPlatformsResponse.Raw
        ),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getUser(
    request: PhylloConnectApi.connect.getUser.Request
  ): Promise<PhylloConnectApi.connect.getUser.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/v1/users/${request.id}`),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.User.parse(response.body as schemas.connect.User.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getAllUsers(
    request: PhylloConnectApi.connect.getAllUsers.Request
  ): Promise<PhylloConnectApi.connect.getAllUsers.Response> {
    const queryParameters = new URLSearchParams();
    if (request.limit != null) {
      queryParameters.append("limit", request.limit.toString());
    }

    if (request.offset != null) {
      queryParameters.append("offset", request.offset.toString());
    }

    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/v1/users"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.AllUsersResponse.parse(response.body as schemas.connect.AllUsersResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async createUser(
    request: PhylloConnectApi.connect.CreateUserRequest
  ): Promise<PhylloConnectApi.connect.createUser.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/v1/users"),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      body: schemas.connect.CreateUserRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.User.parse(response.body as schemas.connect.User.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getUserByExernalId(
    request: PhylloConnectApi.connect.getUserByExernalId.Request
  ): Promise<PhylloConnectApi.connect.getUserByExernalId.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/v1/users/external_id/${request.externalId}`),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.User.parse(response.body as schemas.connect.User.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async createSdkToken(
    request: PhylloConnectApi.connect.SDKTokenRequest
  ): Promise<PhylloConnectApi.connect.createSdkToken.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/v1/sdk-tokens"),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      body: schemas.connect.SDKTokenRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.SDKTokenResponse.parse(response.body as schemas.connect.SDKTokenResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getAccount(
    request: PhylloConnectApi.connect.getAccount.Request
  ): Promise<PhylloConnectApi.connect.getAccount.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/v1/accounts/${request.id}`),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.Account.parse(response.body as schemas.connect.Account.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getAllAccounts(
    request: PhylloConnectApi.connect.getAllAccounts.Request
  ): Promise<PhylloConnectApi.connect.getAllAccounts.Response> {
    const queryParameters = new URLSearchParams();
    if (request.limit != null) {
      queryParameters.append("limit", request.limit.toString());
    }

    if (request.offset != null) {
      queryParameters.append("offset", request.offset.toString());
    }

    if (request.userId != null) {
      queryParameters.append("user_id", request.userId);
    }

    if (request.workPlatformId != null) {
      queryParameters.append("work_platform_id", request.workPlatformId);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/v1/accounts"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.AllAccountsResponse.parse(response.body as schemas.connect.AllAccountsResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async disconnectAccount(
    request: PhylloConnectApi.connect.disconnectAccount.Request
  ): Promise<PhylloConnectApi.connect.disconnectAccount.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/v1/accounts/${request.id}/disconnect`),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.connect.DisconnectAccountResponse.parse(
          response.body as schemas.connect.DisconnectAccountResponse.Raw
        ),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}
