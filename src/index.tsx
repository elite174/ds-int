/* @refresh reload */
import { render } from "solid-js/web";

import "./index.scss";
import styles from "./App.module.scss";

render(
  // you can easily rewrite library styles without increasing specificity
  () => (
    <button class={`btn btn_secondary btn_size_s ${styles.button}`}>
      hi!!
    </button>
  ),
  document.getElementById("root") as HTMLElement
);
