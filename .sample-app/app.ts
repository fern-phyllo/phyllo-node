import { PhylloConnectApi } from "@fern-api/phyllo";

void main();

async function main() {
  const clientId = process.env.PHYLLO_CLIENT_ID;
  if (clientId == null) {
    console.error("PHYLLO_CLIENT_ID is not set in your environment.");
    return;
  }

  const phylloSecret = process.env.PHYLLO_SECRET;
  if (phylloSecret == null) {
    console.error("PHYLLO_SECRET is not set in your environment.");
    return;
  }

  const phyllo = new PhylloApi.Client({
    _origin: "api.getphyllo.com",
    _credentials: {
      username: clientId,
      password: phylloSecret
    }
  });

  const createResponse = await phyllo.connect.createUser({
    name: "myName",
    external_id: "user_abc123"
  });

  if (!createResponse.ok) {
    console.error("Failed to create user", createResponse.error)
  } else {
    console.log(`Created user! The user ID is ${createResponse.body.id}`);
  }
}