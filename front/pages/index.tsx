import type { NextPage } from "next";
import { Wrapper } from "@components/Wrapper";
import { Navbar } from "@components/Navbar";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <Wrapper>
      <Navbar active={pathname} />
      <div>There are will be a lot of films, My Friends!</div>
    </Wrapper>
  );
};

export default Home;
