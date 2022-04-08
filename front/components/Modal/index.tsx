import React, { ReactNode, SyntheticEvent } from "react";

import styles from "./styles.module.scss";

type Props = {
  children: ReactNode | string;
  title: string;
  onClose: () => void;
};

export const Modal = ({ children, title, onClose }: Props) => {
  const stop = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.content} onClick={stop}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.close} onClick={onClose}>
            X
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
