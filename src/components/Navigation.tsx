import styles from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <p>숙박</p>
      <p>관광지</p>
      <p>음식점</p>
      <p>쇼핑</p>
      <p>축제 / 행사</p>
      <p>정보</p>
    </nav>
  );
}
