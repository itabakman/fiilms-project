import { useCallback } from "react";

export const useOnSubmit = (reset: () => void) => {
  return useCallback(async (values) => {
    try {
      const ans = await fetch("http://localhost:5001/api/film/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });
      if (ans.status === 200) {
        reset();
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
};
