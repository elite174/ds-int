import type { VoidComponent } from "solid-js";
import clsx from "clsx";

// This can be imported globaly for caching
import iconsSvg from "./assets/icons.svg";

import styles from "./Icon.module.scss";

export type IconName = "info" | "arrow-right" | "spinner";

interface Props {
  name: IconName;
  class?: string;
}

export const Icon: VoidComponent<Props> = (props) => (
  <svg class={clsx(props.class, styles.icon)}>
    <use href={`${iconsSvg}#${props.name}`} />
  </svg>
);
