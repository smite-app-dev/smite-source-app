import { useCallback, useState } from "react";
import { fetchMethod, getSession, testSession } from "../api/fetch";

const useApiSession = async () => {
  const [sessionId, setSessionId] = useState("");

  const getSessionId = useCallback(async () => {
    try {
      const data = await getSession();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  // CREATE SESSION
  // BEFORE RETURN SESSION WELL TEST SESSION
  // IF VALID RETURN
  // IF NOT FETCH NEW SESSION
  return { sessionId };
};

export default useApiSession;
