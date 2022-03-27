import type { NextPage } from "next";
import { Wrapper } from "@components/Wrapper";
import { Navbar } from "@components/Navbar";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <Wrapper>
      <div>
        <Navbar active={pathname} />
      </div>
    </Wrapper>
  );
};

export default Home;
