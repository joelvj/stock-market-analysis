import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stock Market Analysis</h1>
      <div className={styles.stockContainer}>
        <div className={styles.stockItems}>
          <h3 className={styles.stockContainerItems}>ticker: </h3>
          <h3 className={styles.stockContainerItems}>beta: </h3>
          <h3 className={styles.stockContainerItems}>P/E: </h3>
          <h3 className={styles.stockContainerItems}>current price: </h3>
        </div>
      </div>

      <form className={styles.formContainer}>
        <label className={styles.label} htmlFor="ticker">
          Ticker:
        </label>

        <input name="ticker" type="text" className={styles.input}></input>
        <label className={styles.label} htmlFor="beta">
          Beta:
        </label>
        <input name="beta" type="text" className={styles.input}></input>
        <label className={styles.label} htmlFor="p/e">
          Price/Earnings:{" "}
        </label>

        <input name="p/e" type="text" className={styles.input}></input>
        {/* <input name="ticker" type="text" className={styles.input}></input>
        <input name="ticker" type="text" className={styles.input}></input> */}
      </form>
    </div>
  );
}
