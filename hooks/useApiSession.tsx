import { useCallback, useMemo, useState } from "react";
import { fetchMethod, getSession, testSession } from "../api/fetch";

const useApiSession = () => {
  const [sessionId, setSessionId] = useState("");
  const [isValidSession, setIsValidSession] = useState(false);

  const getSessionId = useCallback(async () => {
    try {
      const data = await getSession();
      setSessionId(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [getSession, sessionId]);

  const validSession = useMemo(async () => {
    const isValid = await testSession(sessionId);
    setIsValidSession(isValid);
    return isValid;
  }, []);

  // ON PAGE CHANGE THIS IS ALWAYS FETCHING
  if (!sessionId) {
    console.log("this should be an empyt string", sessionId);
    getSessionId();
  } else {
    console.log("test session", { sessionId, isValidSession, validSession });
  }

  // CREATE SESSION
  // BEFORE RETURN SESSION WELL TEST SESSION
  // IF VALID RETURN
  // IF NOT FETCH NEW SESSION
  return { sessionId };
};

export default useApiSession;
