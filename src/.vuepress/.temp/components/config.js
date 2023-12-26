import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.6_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/@vueuse+core@10.7.0_vue@3.3.13/node_modules/@vueuse/core/index.mjs";
import SiteInfo from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import VPBanner from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import VPCard from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import ArtPlayer from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import BiliBili from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import PDF from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import XiGua from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";
import Badge from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/assets/07-my/03-project/01-my/01-web/01-homepage/01-code/03-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.6_artplayer@5.1.0_dashjs-pure@1.0.0_hls.js@1.4.14_mpegts._psekgleqvevli2nlf222bbjk6u/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
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
