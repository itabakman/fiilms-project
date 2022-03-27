import React, { useState, FC } from "react";
import Link from "next/link";

import styles from "./styles.module.scss";
import { links } from "@components/Navbar/static";

type Props = {
  active: string;
};

export const Navbar: FC<Props> = ({ active }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  console.log(active);

  const linksNodes = links.map((item) => {
    const isActive =
      active === item.value ? true : active.slice(1).includes(item.value);

    return (
      <div
        key={item.value}
        className={isActive ? styles.linkActive : styles.link}
      >
        <Link href={item.value}>{item.title}</Link>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={toggleOpen}>
        ...
      </div>
      {open && <div className={styles.navbar}>{linksNodes}</div>}
    </div>
  );
};
