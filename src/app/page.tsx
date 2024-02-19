import { Inter, Gamja_Flower } from "next/font/google";
import styles from "../styles/page.module.css";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

// const gamja_flower = Gamja_Flower({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
    </div>
  );
}
