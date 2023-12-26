import { navbar } from "vuepress-theme-hope";
export default navbar([
    "/",
    //关于
    {
        text: "关于",
        icon: "fa-solid fa-folder-open",
        prefix: "/about/",
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
]);
