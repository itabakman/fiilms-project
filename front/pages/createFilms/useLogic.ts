import { useCallback } from "react";
import slugify from "slugify";

export const useOnSubmit = () => {
  return useCallback(async (values, { resetForm }) => {
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
      resetForm();
    } catch (e) {
      console.error(e);
    }
  }, []);
};
