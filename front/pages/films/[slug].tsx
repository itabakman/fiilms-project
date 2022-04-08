import React, { useState } from "react";
import { useRouter, Router } from "next/router";
import { Wrapper } from "@components/Wrapper";
import { Film } from "interfaces/film";

import styles from "./styles.module.scss";
import { Navbar } from "@components/Navbar";
import { Modal } from "@components/Modal";

type Props = {
  film: Film;
};

const Film = ({ film }: Props) => {
  const {
    pathname,
    query: { slug },
  } = useRouter();

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleOpen = () => {
    setOpenModal((prev) => !prev);
  };

  const onDelete = async () => {
    setLoading(true);

    await fetch(`http://localhost:5001/api/film/${slug}`, {
      method: "DELETE",
    });
    toggleOpen();
    setLoading(false);
  };

  return (
    <>
      <Wrapper>
        <Navbar active={pathname} />
        <div className={styles.container}>
          <div>film slug is : {slug}</div>
          <div>Название фильма: {film.name}</div>
          <div>Бюджет: {film.budget}</div>
          <div>Imdb: {film.imdb}</div>
          <div>Продолжительность: {film.duration}</div>
          <button onClick={toggleOpen} disabled={loading}>
            Удалить
          </button>
        </div>
      </Wrapper>
      {openModal && (
        <Modal title="Удаление" onClose={toggleOpen}>
          Точно хочешь удалить?
          <div className={styles.btns}>
            <button onClick={onDelete}> Да</button>
            <button onClick={toggleOpen}>Нет</button>
          </div>
        </Modal>
      )}
    </>
  );
};

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
