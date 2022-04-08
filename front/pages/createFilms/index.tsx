import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { Wrapper } from "@components/Wrapper";
import { Navbar } from "@components/Navbar";
import { useOnSubmit } from "./useLogic";

import { ValidationSchema } from "./static";
import styles from "./styles.module.scss";

const CreateFilm = () => {
  const formOptions = { resolver: yupResolver(ValidationSchema) };
  const { pathname } = useRouter();

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  // const { errors } = formState;
  const onSubmit = useOnSubmit(reset);

  return (
    <Wrapper>
      <Navbar active={pathname} />
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.item}
          placeholder="Name"
          required
          {...register("name")}
        />
        <input
          className={styles.item}
          placeholder="Budget"
          min={0}
          step={1000}
          type="number"
          required
          {...register("budget")}
        />
        <input
          className={styles.item}
          placeholder="Year"
          min={0}
          type="number"
          required
          {...register("year")}
        />
        <input
          className={styles.item}
          placeholder="Duration"
          min={0}
          max={600}
          type="number"
          required
          {...register("duration")}
        />
        <input
          className={styles.item}
          placeholder="IMDb"
          type="text"
          required
          {...register("imdb")}
        />
        <input
          className={styles.item}
          placeholder="Language"
          type="text"
          required
          {...register("language")}
        />
        <input
          className={styles.item}
          placeholder="IMDb"
          type="text"
          required
          {...register("imdb")}
        />
        <textarea
          className={styles.item}
          placeholder="Описание"
          required
          {...register("descrition")}
        />
        <button className={styles.button} type="submit">
          Create
        </button>
      </form>
    </Wrapper>
  );
};

export default CreateFilm;
