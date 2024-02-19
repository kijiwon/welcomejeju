import styles from "../styles/header.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo2.png";
import { TbSearch } from "react-icons/tb";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <div className={styles.logo_wrapper}>
          <Image className={styles.logo} src={Logo} alt="logo" />
          <p>제주, 어디까지 아니?</p>
        </div>
        <form className={styles.searchForm}>
          <input type="text" placeholder="관광지 또는 상호명을 입력하세요" />
          <TbSearch className={styles.searchIcon} />
        </form>
      </div>
      <Navigation />
    </header>
  );
}
