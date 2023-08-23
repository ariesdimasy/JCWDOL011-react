import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={style.container}>
        <div className={style.logo}></div>
        <ul>
          <li>
            <a href="."> Home </a>
          </li>
          <li>
            <a href="."> About </a>
          </li>
          <li>
            <a href="."> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
