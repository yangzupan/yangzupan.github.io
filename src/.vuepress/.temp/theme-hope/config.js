import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "E:/assets/07-my/03-project/01-my/01-web/00-website/01-code/01-vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.7_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "E:/assets/07-my/03-project/01-my/01-web/00-website/01-code/01-vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.7_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_markdown-it@13_43kepoobkgzkboilq2h4hemwpq/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogGetter } from "E:/assets/07-my/03-project/01-my/01-web/00-website/01-code/01-vuepress/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-rc.7_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegt_i44zzvsc4lin5muwnv4jbocsia/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "E:/assets/07-my/03-project/01-my/01-web/00-website/01-code/01-vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.7_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_markdown-it@13_43kepoobkgzkboilq2h4hemwpq/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "E:/assets/07-my/03-project/01-my/01-web/00-website/01-code/01-vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.7_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_markdown-it@13_43kepoobkgzkboilq2h4hemwpq/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";

import "E:/assets/07-my/03-project/01-my/01-web/00-website/01-code/01-vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.7_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_markdown-it@13_43kepoobkgzkboilq2h4hemwpq/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

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

    app.component("BloggerInfo", BloggerInfo);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});