import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Intro.module.css";
import Circle from "./Circle";

const intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#AAAAAA" top="-45vh" left="-45vh" />
      <Circle backgroundColor="#DB1C92" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>GranitMedia</span> DIGITAL BYRÅ
        </h1>
        <p className={styles.desc}>
          Vi erbjuder ett helhetskoncept för att du ska lyckas digitalt!
        </p>
        <button className={styles.button}>
          <Link href="/kontakt">Vill du bli uppringd?</Link>
        </button>
      </div>
      <div className={styles.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/meditating-man.png"}
          height="400px"
          width="250px"
          alt=""
        />
      </div>
    </div>
  );
};

export default intro;
