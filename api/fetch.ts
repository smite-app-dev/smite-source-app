import moment from "moment";
import { MD5 } from "crypto-js";

export async function fetchMethod(
  methodName: string = "createsession",
  devId: string,
  authKey: string,
  session?: string,
  languageCode?: string
) {
  const baseURL = "https://api.smitegame.com/smiteapi.svc";
  const timestamp = moment().utc().format("YYYYMMDDHHmmss");
  const signature = MD5(
    devId + "createsession" + authKey + timestamp
  ).toString();

  return fetch(
    `${baseURL}/${methodName}Json/${devId}/${signature}/${
      session ? `${session}/` : ""
    }${timestamp}${languageCode ? `/${languageCode}` : ""}`
  )
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
