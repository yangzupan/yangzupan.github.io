import { navbar } from "vuepress-theme-hope";
export default navbar([
    "/",
    // 阅读
    {
        text: "阅读",
        icon: "fa-solid fa-folder-open",
        prefix: "/read/",
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
        prefix: "/coding/",
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
        prefix: "/geek/",
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
        prefix: "/write/",
        children: [
            "",
        ],
    },
    // 事业
    {
        text: "事业",
        icon: "fa-solid fa-folder-open",
        prefix: "/career/",
        children: [
            "",
        ],
    },
    // 生活
    {
        text: "生活",
        icon: "fa-solid fa-folder-open",
        prefix: "/life/",
        children: [
            // "",
            "experience",
            "apperception",
        ],
    },
    //更多
    {
        text: "更多",
        icon: "fa-solid fa-folder-open",
        children: [
            // 导航
            {
                text: "导航",
                prefix: "/nav/",
                children: [
                    "software",
                    "coding",
                    "study",
                ],
            },
            // 资源
            {
                text: "资源",
                prefix: "/resource/",
                children: [
                    "software",
                    "font",
                    "icon",
                ],
            },
            // 文档
            {
                text: "文档",
                prefix: "/docs/",
                children: [
                    "",
                ],
            },

            // 关于
            {
                text: "关于",
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

        ],
    },
]);
