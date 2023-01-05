import type { Meta } from "@storybook/html";

import { Icon, IconName } from "../components/Icon";

import docsPage from "./Button.docs.mdx";

import styles from "./Button.stories.module.scss";

type UIItem = {
  class: string;
  caption: string;
};

type VariantItem = UIItem;

type SizeItem = UIItem & {
  variants: VariantItem[];
};

type KindItem = UIItem & {
  sizes: SizeItem[];
  icon: IconName;
};

const variants: VariantItem[] = [
  { class: "disabled", caption: "Disabled" },
  { class: "", caption: "Regular" },
  { class: "hover", caption: "Hover" },
  { class: "focus", caption: "Focus" },
  { class: "active", caption: "Active" },
  { class: "loading", caption: "Loading" },
];

const sizes: SizeItem[] = [
  { class: "btn_size_s", caption: "Size S", variants },
  { class: "btn_size_l", caption: "Size L", variants },
];

const kind: KindItem[] = [
  { class: "btn_primary", caption: "Primary", sizes, icon: "info" },
  { class: "btn_secondary", caption: "Secondary", sizes, icon: "info" },
  { class: "btn_flat", caption: "Flat", sizes, icon: "arrow-right" },
  {
    class: "btn_destructive",
    caption: "Destructive",
    icon: "info",
    // I guess some variants are not ready yet?
    sizes: sizes.map((size) => ({
      ...size,
      variants: size.variants.slice(0, 3),
    })),
  },
];

export const Showcase = () => (
  <div class={styles.container}>
    {kind.map((kindItem) => (
      <table class={styles.table}>
        <caption>{kindItem.caption}</caption>
        <tbody>
          {kindItem.sizes.map((sizeItem) => (
            <>
              <tr>
                <td colSpan="5">{sizeItem.caption}</td>
              </tr>
              {sizeItem.variants.map((variantItem) => (
                <tr>
                  <td>{variantItem.caption}</td>
                  <td>
                    <button
                      class={`int btn btn_with_prefix ${sizeItem.class} ${variantItem.class} ${kindItem.class}`}
                    >
                      <Icon name={kindItem.icon} class="btn-icon" />
                      <Icon name="spinner" class="btn-loader" />
                      <span class="btn-text">Button</span>
                    </button>
                  </td>
                  <td>
                    <button
                      class={`int btn ${sizeItem.class} ${variantItem.class} ${kindItem.class}`}
                    >
                      <Icon name="spinner" class="btn-loader" />
                      <span class="btn-text">Button</span>
                    </button>
                  </td>
                  <td>
                    <button
                      class={`int btn btn_with_postfix ${sizeItem.class} ${variantItem.class} ${kindItem.class}`}
                    >
                      <Icon name={kindItem.icon} class="btn-icon" />
                      <Icon name="spinner" class="btn-loader" />
                      <span class="btn-text">Button</span>
                    </button>
                  </td>
                  <td>
                    <button
                      class={`int btn btn_only ${sizeItem.class} ${variantItem.class} ${kindItem.class}`}
                    >
                      <Icon class="btn-icon" name={kindItem.icon} />
                      <Icon name="spinner" class="btn-loader" />
                    </button>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    ))}
  </div>
);

export default {
  title: "Button",
  parameters: {
    docs: {
      page: docsPage,
    },
  },
} as Meta<{}>;
