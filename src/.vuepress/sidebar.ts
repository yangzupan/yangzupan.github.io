import { sidebar } from "vuepress-theme-hope";
export default sidebar({

  // 阅读
  "/read/": "structure",

  // 编程
  "/coding/": "structure",

  // 折腾
  "/geek/": "structure",

  // 写作
  "/write/": "structure",

  // 事业
  "/career/": "structure",

  // 生活
  "/life/": "structure",

  // 关于
  "/about/": "structure",


  "/": [
    //首页
    "/",
    // 阅读
    {
      text: "阅读",
      icon: "fa-solid fa-folder-open",
      prefix: "read/",
      collapsible: true,
      children: [
        "book",
        "people",
        "thing",
      ],
    },
    // 编程
    {
      text: "编程",
      icon: "fa-solid fa-folder-open",
      prefix: "coding/",
      collapsible: true,
      children: [
        "basis",
        "front",
        "back",
        "devops",
        "bigdata",
        "ai",
      ],
    },
    // 折腾
    {
      text: "折腾",
      icon: "fa-solid fa-folder-open",
      prefix: "geek/",
      collapsible: true,
      children: [
        "hardware",
        "software",
        "cloud-service",
        "web",
      ],
    },
    // 写作
    {
      text: "写作",
      icon: "fa-solid fa-folder-open",
      prefix: "write/",
      collapsible: true,
      children: [
        // "",
      ],
    },
    // 事业
    {
      text: "事业",
      icon: "fa-solid fa-folder-open",
      prefix: "career/",
      collapsible: true,
      children: [
        // "",
      ],
    },
    // 生活
    {
      text: "生活",
      icon: "fa-solid fa-folder-open",
      prefix: "life/",
      collapsible: true,
      children: [
        "experience",
        "apperception",
      ],
    },
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
