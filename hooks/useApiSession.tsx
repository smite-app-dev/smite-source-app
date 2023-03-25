import { useCallback, useState } from "react";
import { fetchMethod, getSession, testSession } from "../api/fetch";

const useApiSession = async () => {
  const [sessionId, setSessionId] = useState("");

  const getSessionId = useCallback(async () => {
    const data = await getSession();
    console.log(data);
    return data;
  }, []);

  console.log(getSessionId, "sometiuoabnfdnsaoifnasoifn");
  // CREATE SESSION
  //   if (!sessionId) {
  //     const id = await getSession();
  //     console.log(id, "this is id");
  //     setSessionId(id);
  //   }
  // BEFORE RETURN SESSION WELL TEST SESSION

  // IF VALID RETURN
  // IF NOT FETCH NEW SESSION
  return { sessionId };
};

export default useApiSession;
