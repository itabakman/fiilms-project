import React, { ReactNode } from "react";

import styles from "./wrapper.module.scss";

type Props = {
  children: ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
