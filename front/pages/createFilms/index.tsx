import React from "react";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { Wrapper } from "@components/Wrapper";
import { useForm } from "react-hook-form";
import { useOnSubmit } from "./useLogic";

import styles from "./styles.module.scss";
import { ValidationSchema } from "./static";
import { Navbar } from "@components/Navbar";
import { useRouter } from "next/router";

const CreateFilm = () => {
  const formOptions = { resolver: yupResolver(ValidationSchema) };
  const { pathname } = useRouter();

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = useOnSubmit(reset);

  return (
    <Wrapper>
      <Navbar active={pathname} />
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={styles.item}
            placeholder="Name"
            required
            {...register("name")}
          />
        </div>
        <div>
          <input
            className={styles.item}
            placeholder="Budget"
            min={0}
            step={1000}
            type="number"
            required
            {...register("budget")}
          />
        </div>
        <div>
          <input
            className={styles.item}
            placeholder="Duration"
            min={0}
            max={600}
            type="number"
            required
            {...register("duration")}
          />
        </div>
        <div>
          <input
            className={styles.item}
            placeholder="IMDb"
            type="text"
            required
            {...register("imdb")}
          />
        </div>
        <button className={styles.button} type="submit">
          Create
        </button>
      </form>
    </Wrapper>
  );
};

export default CreateFilm;
