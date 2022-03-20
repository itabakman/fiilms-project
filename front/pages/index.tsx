import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <div>
        <h2>there are will be some links</h2>
        <ul>
          <ol>
            <Link href="/createFilms">Create a film</Link>
          </ol>
          <ol>
            <Link href="/films">All films</Link>
          </ol>
          <ol>
            <Link href="/about">About</Link>
          </ol>
        </ul>
      </div>
    </div>
  );
};

export default Home;
