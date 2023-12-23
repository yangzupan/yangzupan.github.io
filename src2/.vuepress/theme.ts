import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
  // 网站部署域名
  hostname: "https://www.laopange.com",
  // 全局默认作者
  author: {
    name: "老攀哥",
    url: "https://www.laopange.com",
  },
  // 字体图标资源链接
  iconAssets: [
    "https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/fontawesome.min.js",
    "https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/solid.min.js",
    "https://cdn.yangzupan.com/libs/fontawesome/6.4.2/js/brands.min.js",
  ],
  // 导航栏标题
  navTitle: "",
  // 全屏按钮
  fullscreen: true,
  // 是否在向下滚动时自动隐藏导航栏
  navbarAutoHide: "none",
 // 导航栏图标
  logo: "https://cdn.yangzupan.com/images/public/logo/pan/logo.svg",
  logoDark: "https://cdn.yangzupan.com/images/public/logo/pan/logo_dark.svg",
  // 导航栏配置
  navbar,
  // 侧边栏配置
  sidebar,
  // 插件配置
  plugins: {
    //图片浏览
    photoSwipe:false,
    // 版权插件
    copyright: {
      author: "老攀哥",
      license: " CC BY-NC-ND 4.0 ",
      canonical: "https://www.laopange.com/",
      global: true,
    },
    // 代码复制
    copyCode: {
      // 是否启用华丽样式
      fancy: true,
    },
  },
});
