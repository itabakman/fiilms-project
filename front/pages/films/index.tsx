import React from "react";
import { Wrapper } from "@components/Wrapper";
import { Film } from "@interfaces/film";

import styles from "./styles.module.scss";
import FilmCard from "@components/FilmCard";
import Link from "next/link";

type Props = {
  films: Film[];
};

const Films = ({ films }: Props) => {
  const filmNodes = films?.map((item) => (
    <FilmCard key={item.slug} film={item} />
  ));

  return (
    <Wrapper>
      <Link href="/">Main</Link>
      <div className={styles.films}>{filmNodes}</div>
    </Wrapper>
  );
};

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5001/api/film/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { films: [...data] } };
}

export default Films;
