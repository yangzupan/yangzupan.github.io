import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.6_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_markdown-it@13_znmvfq3kglys2a35zh52kxi7dq/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogGetter } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegt_37x2oyrfne6lzyklccp2iy7h6u/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { h } from "vue"

import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_markdown-it@13_znmvfq3kglys2a35zh52kxi7dq/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});