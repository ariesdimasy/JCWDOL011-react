import style from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={style.content}>
        <h1> Yudhistira.id </h1>
        <h3> Lorem Ipsum sit dolor amet </h3>
        <p> Berubah </p>
      </div>
    </header>
  );
}
