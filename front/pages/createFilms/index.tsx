import React from "react";
import { Wrapper } from "@components/Wrapper";
import { Form, Formik } from "formik";
import { useOnSubmit } from "./useLogic";
import Link from "next/link";

import styles from "./styles.module.scss";

const CreateFilm = () => {
  const onSubmit = useOnSubmit();

  return (
    <Wrapper>
      <Link href="/">Main</Link>
      <Formik
        enableReinitialize
        initialValues={{ name: "", duration: "", slug: "" }}
        onSubmit={onSubmit}
      >
        {({ handleChange }) => (
          <Form className={styles.container}>
            <input
              className={styles.item}
              onChange={handleChange}
              name="name"
              placeholder="name"
            />
            <input
              onChange={handleChange}
              className={styles.item}
              name="duration"
              placeholder="duration"
              type="number"
            />
            <button className={styles.item} type="submit">
              submit
            </button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default CreateFilm;
