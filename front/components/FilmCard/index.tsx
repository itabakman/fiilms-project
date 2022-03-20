import { Film } from "@interfaces/film";
import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

type Props = {
  film: Film;
};

const FilmCard = ({ film }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`films/${film.slug}`);
  };

  return (
    <div className={styles.film} onClick={onClick}>
      <div className={styles.row}>
        <div className={styles.title}>Название:</div>
        <div>&nbsp;{film.name}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Продолжительность:</div>
        <div>&nbsp;{film.duration} мин.</div>
      </div>
    </div>
  );
};

export default FilmCard;
