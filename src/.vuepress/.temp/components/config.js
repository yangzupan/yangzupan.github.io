import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/@vueuse+core@10.7.0_vue@3.3.13/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(`https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/fontawesome.min.js`);
    useScriptTag(`https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/solid.min.js`);
    useScriptTag(`https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/brands.min.js`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
