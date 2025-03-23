import styles from "./page.module.css";
import DataList from "./components/DataList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>MongoDB with Docker & Next.js</h1>
        <br />
        <DataList />
      </main>
    </div>
  );
}
