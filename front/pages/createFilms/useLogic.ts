import { useCallback } from "react";

export const useOnSubmit = (reset: () => void) => {
  return useCallback(async (values) => {
    const { name, duration } = values;

    try {
      await fetch("http://localhost:5001/api/film/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, duration }),
      });
      reset();
    } catch (e) {
      console.error(e);
    }
  }, []);
};
