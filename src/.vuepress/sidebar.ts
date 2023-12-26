import { sidebar } from "vuepress-theme-hope";
export default sidebar({
  // 关于
  "/about/": "structure",
  
  "/": [
    //首页
    "/",
    // 关于
    {
      text: "关于",
      icon: "fa-solid fa-folder-open",
      prefix: "about/",
      collapsible: true,
      children: [
        "me",
        "website",
        "contribution",
        "contribution-guide",
        "error-feedback",
        "copyright",
        "privacy",
        "logs",
        "link",
      ],
    },
  ],
});
