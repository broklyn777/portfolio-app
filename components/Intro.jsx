import Image from "next/image";
import styles from "../styles/Intro.module.css";
import Circle from "./Circle";

const intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <Circle backgroundColor="#b0ff49" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>GranitMedia</span> DIGITAL BYRÅ
        </h1>
        <p className={styles.desc}>
          Vi erbjuder ett helhetskoncept för att du ska lyckas digitalt!
        </p>
        <button className={styles.button}>SE MER</button>
      </div>
      <div className={styles.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/Avocado.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default intro;
