import React, { useState } from "react";
import { useRouter, Router } from "next/router";
import { Wrapper } from "@components/Wrapper";
import { Film } from "interfaces/film";
import Link from "next/link";

import styles from "./styles.module.scss";
import { Navbar } from "@components/Navbar";

type Props = {
  film: Film;
};

const Film = ({ film }: Props) => {
  const {
    pathname,
    query: { slug },
  } = useRouter();

  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);

    await fetch(`http://localhost:5001/api/film/${slug}`, {
      method: "DELETE",
    });

    setLoading(false);
  };

  return (
    <Wrapper>
      <Navbar active={pathname} />
      <div>film slug is : {slug}</div>
      <div>Film name: {film.name}</div>
      <div>Duration: {film.duration}</div>
      <button className={styles.button} onClick={onDelete} disabled={loading}>
        Удалить
      </button>
    </Wrapper>
  );
};

// TODO поправить контекст
export async function getServerSideProps(context: Router) {
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:5001/api/film/${context.query.slug}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { film: { ...data } } };
}

export default Film;
