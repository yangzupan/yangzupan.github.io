// 滑动主体
function goToMain() {
  window.scrollTo({
    top: document.documentElement.clientHeight,
    behavior: "smooth",
  });
}
// 夜间模式切换
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function switchDarkMode() {
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

// 生成二维码
var link = document.querySelectorAll("[data-qrcode-link]");
var qrcodeImg = document.querySelectorAll("[data-qrcode-img]");
for (let i = 0; i < link.length; i++) {
  new AwesomeQR.AwesomeQR({
    text: link[i].getAttribute("data-qrcode-link"), // 内容
    // size: 256, // 二维码大小
    margin: 12, // 二维码白边大小
  }).draw()
    .then((dataURL) => {
      qrcodeImg[i].setAttribute("src", dataURL)
    })
    .catch((err) => {
      console.error(err);
    });
}