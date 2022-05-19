import Link from "next/link";
import Head from "next/head";
import commonStyles from "../styles/common.module.scss";
import { FiCalendar, FiUser } from "react-icons/fi";
import styles from "./home.module.scss";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Como utilizar hooks</h1>
          <h3>
            Um breve arquivo sobre a origem da ferramenta que facilitou o acesso
            de databases e ampliou produtividade para o ecossistema
            JavaScript/TypeScript
          </h3>
          <div className={styles.author}>
            <span>
              <FiCalendar /> 19 abr 2021
            </span>

            <span>
          
              <FiUser />
              Rosana Moreira
            </span>
          </div>
        </div>
        <div className={styles.container}>
          <h1>Como utilizar hooks</h1>
          <h3>
            Um breve arquivo sobre a origem da ferramenta que facilitou o acesso
            de databases e ampliou produtividade para o ecossistema
            JavaScript/TypeScript
          </h3>
          <div className={styles.author}>
            <span>
              <FiCalendar /> 19 abr 2021
            </span>

            <span>
             
              <FiUser />
              Rosana Moreira
            </span>
          </div>
        </div>
        <div className={styles.morePosts}>
          <button type="button">carregar mais posts</button>
        </div>
      </main>
    </>
  );
}
