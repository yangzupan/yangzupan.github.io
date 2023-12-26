import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.6_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHint } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Tabs from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.6_markdown-it@13.0.2_mermaid@10.6.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
