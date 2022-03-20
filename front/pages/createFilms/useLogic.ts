import { useCallback } from "react";
import slugify from "slugify";

export const useOnSubmit = () => {
  return useCallback(async (values) => {
    const { name, duration } = values;
    const slug = slugify(values.name, {
      locale: "ru",
      lower: true,
    });

    try {
      await fetch("http://localhost:5001/api/film/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, duration, slug }),
      });
      console.log(JSON.stringify({ name, duration, slug }));
    } catch (e: any) {
      console.error(e.message);
    }
  }, []);
};
