import ClientButton from "@/components/ClientButton";
import styles from "./page.module.css";
import variables from "./variables.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      Home Page return{" "}
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js - SASS!</h1>
      <ClientButton />
    </main>
  );
}
