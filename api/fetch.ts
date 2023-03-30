import moment from "moment";
import { MD5 } from "crypto-js";
import axios from "axios";
import { SMITE_DEV_ID, SMITE_AUTH_KEY } from "@env";

const baseURL = "https://api.smitegame.com/smiteapi.svc";

function createSignature(devId: string, methodName: string, authKey: string) {
  const timestamp = moment().utc().format("YYYYMMDDHHmmss");
  const signature = MD5(devId + methodName + authKey + timestamp).toString();
  return { timestamp, signature };
}

export async function fetchMethod(
  methodName: string = "createsession",
  devId: string,
  authKey: string,
  session?: string,
  languageCode?: string
) {
  const { signature, timestamp } = createSignature(devId, methodName, authKey);

  const { data } = await axios.get(
    `${baseURL}/${methodName}Json/${devId}/${signature}/${
      session ? `${session}/` : ""
    }${timestamp}${languageCode ? `/${languageCode}` : ""}`
  );
  return data;
}

export async function getSession(): Promise<string> {
  try {
    const { session_id }: { session_id: string } = await fetchMethod(
      "createsession",
      SMITE_DEV_ID,
      SMITE_AUTH_KEY
    );
    return session_id;
  } catch (error) {
    console.log(error);
  }
  return "";
}

export async function testSession(sessionId?: string) {
  const { signature, timestamp } = createSignature(
    SMITE_DEV_ID,
    "testsession",
    SMITE_AUTH_KEY
  );

  if (!sessionId) {
    sessionId = await getSession();
  }

  const { data } = await axios.get(
    `${baseURL}/testsessionJson/${SMITE_DEV_ID}/${signature}/${sessionId}/${timestamp}`
  );

  if (data.includes("Invalid")) {
    return false;
  } else {
    return true;
  }
}

export async function getGods() {
  const { session_id } = await fetchMethod(
    "createsession",
    SMITE_DEV_ID,
    SMITE_AUTH_KEY
  );

  const data = await fetchMethod(
    "getgods",
    SMITE_DEV_ID,
    SMITE_AUTH_KEY,
    session_id,
    "1"
  );
  console.log(data);
  return data;
}

export async function getItems() {
  const { session_id } = await fetchMethod(
    "createsession",
    SMITE_DEV_ID,
    SMITE_AUTH_KEY
  );

  const data = await fetchMethod(
    "getitems",
    SMITE_DEV_ID,
    SMITE_AUTH_KEY,
    session_id,
    "1"
  );
  console.log(data);
  return data;
}
