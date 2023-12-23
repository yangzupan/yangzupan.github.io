import { defineClientConfig } from "@vuepress/client";
import { useHint } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHint();
  }
});
