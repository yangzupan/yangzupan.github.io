import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as u,c as p,a as e,e as t,b as n,w as l,n as o,g as i,d}from"./app-du8q_9vT.js";const _={},b=e("h2",{id:"网站简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#网站简介","aria-hidden":"true"},"#"),t(" 网站简介")],-1),g=e("strong",null,"知识花园",-1),f=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),k={class:"hint-container warning"},m=e("p",{class:"hint-container-title"},"注意",-1),w=d('<h2 id="心路历程" tabindex="-1"><a class="header-anchor" href="#心路历程" aria-hidden="true">#</a> 心路历程</h2><h3 id="我为什么建这个网站" tabindex="-1"><a class="header-anchor" href="#我为什么建这个网站" aria-hidden="true">#</a> 我为什么建这个网站？</h3><p>我在学习的时候，我习惯做一些笔记，这看起来很好，对吧，但是时间一长，我的笔记很乱，这个文档里有一篇，那个文档里有几篇，没办法形成体系。这个问题很恼火，一直困扰着我，我也在不断的寻找解决方法。</p><h3 id="尝试在线笔记" tabindex="-1"><a class="header-anchor" href="#尝试在线笔记" aria-hidden="true">#</a> 尝试在线笔记</h3><p>我先后尝试后印象笔记、有道笔记、为知笔记、 OneNote、Notion、我来、FlowUs、语雀、Obsidian、Typora 等笔记软件。刚开始的时候，我把我的笔记都搬到了云笔记软件上，我觉得还挺好用的，但是用着用着就出问题，有的功能你得开会员，不开会员就不给你用了，比如分享功能。那行吧，就开个会员，这些都还能接受，最让我接受不了的是，导入笔记容易，导出笔记难，懂得都懂。</p><p>在线笔记的好处：</p><ul><li>用完就走：打开一个链接就可以直接开始编写，很方便。</li><li>共享方便：一键生成分享链接，分享方便。</li><li>权限控制：可以设置各种不同的权限。</li><li>功能丰富：能在文档中插入流程图、思维导图、数据表等。</li></ul><p>但是云笔记有一个无论如何都无法避免的缺点：<strong>你的笔记并不属于你！</strong></p><p>只要你使用云笔记，你的文档全部存在于各大公司的服务器之上，包括这些文档的解释权、访问权都不属你。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里不是说云笔记不好，只是说每个人的需求不同而已，根据自己的需求选择即可，这里我只是表明我的观点。</p></div><h3 id="继续寻找" tabindex="-1"><a class="header-anchor" href="#继续寻找" aria-hidden="true">#</a> 继续寻找</h3><p>接着，我又开始了我寻找之路。最后，找到一个让我相对满意的解决方案： Markdown + Vscode + VuePress + Github。这种方案的好处是：方便阅读、方便修改、简单、兼容性好。但是这种方案有两个问题：一个是图片，一个是分享。</p><p>Markdown 中图片的处理会比较麻烦，传统的例如 word 等文件格式它会将图片一起打包到文件中，但是在 md 当中图片更像是文档的依赖文件，是游离于文字之外的东西。</p>',13),v={href:"https://molunerfinn.com/PicGo/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://piclist.cn/",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"至于分享，倒是很好解决，我们可以使用 Github Pages 解决这个问题，同时我们也可将 VuePress 生成的静态资源托管到 Cloudflare Pages 、Netlify等服务商。通过服务商提供的默认域名即可访问的我们的笔记资源，我们也可以绑定我们自己的域名。如果我们的域名在国内以及的备案的话，还可以将静态资源托管到国内云服务器上，或者国内云服务器的对象存储。这样在国内的话，访问速度提到提升。",-1),z=e("h3",{id:"最终方案",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最终方案","aria-hidden":"true"},"#"),t(" 最终方案")],-1),B=e("p",null,"自已折腾了小半年后，最终找到了我比较满意的方案：Markdown + Git + VuePress + Github + GitHub Action +Github Pages/Cloudflare Pages。",-1),E={class:"hint-container tip"},G=e("p",{class:"hint-container-title"},"提示",-1),C={href:"https://mister-hope.com/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://theme-hope.vuejs.press/zh/related.html",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"网站定位",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#网站定位","aria-hidden":"true"},"#"),t(" 网站定位")],-1),V=e("li",null,[e("p",null,"本站是一个非盈利项目，从项目开始准备的时候就没有想通过这个项目盈利。")],-1),A=e("li",null,[e("p",null,"本站是我个人在学习过程中的一些思考或者记录，具有一定的主观性，在阅读时仅供参考。")],-1),M=e("li",null,[e("p",null,"为了大家的阅读体验，本网站不会接入广告，现在不会，以后也不会（因为我很讨厌广告了）。")],-1),H=e("strong",null,"网站内容",-1),L={href:"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"},F=e("strong",null,"网站源码",-1),T=e("h2",{id:"项目初心",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目初心","aria-hidden":"true"},"#"),t(" 项目初心")],-1),I=d('<p>而在筹划这个项目的时候，我更多的是希望我的这个知识库（知识花园）能够给别人带来帮助，哪怕是因为看了我的一篇文章而解决了一个问题。我都觉得这是一件很有意义的事情。</p><div class="hint-container tip"><p class="hint-container-title">利他就是极致的利己</p></div><h2 id="未来愿景" tabindex="-1"><a class="header-anchor" href="#未来愿景" aria-hidden="true">#</a> 未来愿景</h2><ol><li><p>我真心的希望这个项目会一直维护下去（虽然以后的事有太多的不确定性，但是我相信我能够坚持下去），争取不会半途而废。</p></li><li><p>我也希望能够帮助到更多的人。</p></li></ol><h2 id="版权协议" tabindex="-1"><a class="header-anchor" href="#版权协议" aria-hidden="true">#</a> 版权协议</h2>',5),S=e("strong",null,"原创内容",-1),j={href:"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"},D=e("strong",null,"网站源码",-1),O=e("h2",{id:"技术支持",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#技术支持","aria-hidden":"true"},"#"),t(" 技术支持")],-1),R=e("p",null,"本站由以下服务提供技术支持：",-1),U=e("h3",{id:"服务商",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务商","aria-hidden":"true"},"#"),t(" 服务商")],-1),Y={class:"vp-card-container"},q=e("h3",{id:"框架-主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#框架-主题","aria-hidden":"true"},"#"),t(" 框架 / 主题")],-1),J={class:"vp-card-container"},K=e("h3",{id:"工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工具","aria-hidden":"true"},"#"),t(" 工具")],-1),Q={class:"vp-card-container"},W=e("h2",{id:"仓库连接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#仓库连接","aria-hidden":"true"},"#"),t(" 仓库连接")],-1),X=e("p",null,"本站所有内容及代码均开源，可通过链接访问：",-1),Z={class:"vp-card-container"},$=d('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Gitee 仓库中的代码是从 Github 同步过来的，不能保证代码内容是最新的，如需查看最新代码，优先访问 Github。</p></div><h2 id="网站地址" tabindex="-1"><a class="header-anchor" href="#网站地址" aria-hidden="true">#</a> 网站地址</h2><p>本网站采用多线路并行部署，一份源码同时分发给多个托管服务商（阿里云、Github、Cloudflare 和 Netlify）。</p><h3 id="阿里云" tabindex="-1"><a class="header-anchor" href="#阿里云" aria-hidden="true">#</a> 阿里云</h3><p>本站使用了 阿里云OSS 提供的静态网站托管服务，演示地址如下：</p>',5),ee={class:"vp-card-container"},te=e("h3",{id:"github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),t(" GitHub")],-1),ne=e("p",null,"本站使用了 GitHub 提供的静态网站托管服务 GitHub Pages，演示地址如下：",-1),ae={class:"vp-card-container"},oe=e("h3",{id:"cloudflare",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cloudflare","aria-hidden":"true"},"#"),t(" Cloudflare")],-1),ie=e("p",null,"本站使用了 Cloudflare 提供的静态网站托管服务 Cloudflare Pages，演示地址如下：",-1),se={class:"vp-card-container"},re=e("h3",{id:"netlify",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),t(" Netlify")],-1),le=e("p",null,"本站使用了 Netlify 提供的静态网站托管服务，演示地址如下：",-1),de={class:"vp-card-container"},ce=d('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>知识花园是指把我自己在现实生活中的“所见、所闻、实践、感想、思考”，进行记录、整理、组织，从而分享出来。最终形成一个知识和信息“花园”。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function he(ue,pe){const r=c("RouterLink"),s=c("ExternalLinkIcon"),a=c("VPCard");return u(),p("div",null,[b,e("p",null,[t("本站是 "),n(r,{to:"/about/me.html"},{default:l(()=>[t("我（攀哥）")]),_:1}),t(" 搭建的一个个人知识库网站，我也把它叫做 "),g,f,t(" ，主要包含了我在学习、编程、折腾、创业等几方面的一些笔记或者心得。")]),e("div",k,[m,e("p",null,[t("本站的内容，可能存在错误，阅读时仅供参考，如有错误，请及时 "),n(r,{to:"/about/me.html#%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F"},{default:l(()=>[t("联系我")]),_:1}),t("，并敬请大家谅解。")])]),w,e("p",null,[t("然后，我又开始研究图床，找到图片的解决方案： Markdown + "),e("a",v,[t("picGo"),n(s)]),t(" / "),e("a",y,[t("PicList"),n(s)]),t(" ，图片通过图床外链放在 Markdown 文件中。")]),x,z,B,e("div",E,[G,e("p",null,[t("在这里，我也要感谢 "),e("a",C,[t("𝓜𝓻.𝓗𝓸𝓹𝓮"),n(s)]),t(" 这么棒的主题及其相关配套的 "),e("a",P,[t("插件"),n(s)]),t("。")])]),N,e("ol",null,[V,A,M,e("li",null,[e("p",null,[t("至于网站的成本开支，主要由我个人来承担，同时我也会接入 "),n(r,{to:"/about/contribution.html"},{default:l(()=>[t("捐助")]),_:1}),t(" 来平衡支出。（当然捐助是个人自愿的，我不会强求任何人给我捐助。）")])]),e("li",null,[e("p",null,[t("同时，本项目也是一个开源项目，"),H,t(" 采用"),e("a",L,[t("署名-非商业性使用-禁止演绎 4.0 国际标准"),n(s)]),t("协议，"),F,t(" 采用 MIT 协议。")])])]),T,e("p",null,[t("我在 "),n(r,{to:"/about/website.html#%E5%BF%83%E8%B7%AF%E5%8E%86%E7%A8%8B"},{default:l(()=>[t("心路历程")]),_:1}),t(" 中提到了 "),n(r,{to:"/about/website.html#%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%BF%99%E4%B8%AA%E7%BD%91%E7%AB%99"},{default:l(()=>[t("我为什么建这个网站")]),_:1}),t("，这只是这个项目的开始。")]),I,e("p",null,[t("本站的所有 "),S,t(" 均采用 cc 协议中比较严格的 "),e("a",j,[t("署名-非商业性使用-禁止演绎 4.0 国际标准 (CC BY-NC-ND 4.0)"),n(s)]),t(" ，"),D,t(" 采用 MIT 协议。")]),O,R,U,e("div",Y,[n(a,o(i({title:"阿里云",desc:"提供域名和 CDN 支持",link:"https://www.aliyun.com/minisite/goods?userCode=d4pbwxt5",background:"rgba(255, 106, 0, 0.15)"})),null,16),n(a,o(i({title:"Github",desc:"托管源码及静态网页文件",link:"https://github.com",background:"rgba(0, 0, 0, 0.15)"})),null,16),n(a,o(i({title:"Gitee",desc:"托管源码及静态网页文件",link:"https://gitee.com",background:"rgba(199, 29, 35, 0.15)"})),null,16),n(a,o(i({title:"Cloudflare",desc:"托管本站静态网页文件",link:"https://www.cloudflare.com/zh-cn/",background:"rgba(246, 130, 31, 0.15)"})),null,16),n(a,o(i({title:"Netlify",desc:"托管本站静态网页文件",link:"https://www.netlify.com/",background:"rgba(50, 230, 226, 0.15)"})),null,16)]),q,e("div",J,[n(a,o(i({title:"框架",desc:"VuePress",link:"https://v2.vuepress.vuejs.org/zh/",background:"rgba(58, 166, 117, 0.15)"})),null,16),n(a,o(i({title:"主题",desc:"VuePress Theme Hope",link:"https://theme-hope.vuejs.press/zh/",background:"rgba(65, 89, 114, 0.15)"})),null,16)]),K,e("div",Q,[n(a,o(i({title:"Git",desc:"版本管理工具",link:"https://git-scm.com/",background:"rgba(245, 77, 39, 0.15)"})),null,16),n(a,o(i({title:"Visual Studio Code",desc:"代码编辑器",link:"https://code.visualstudio.com/",background:"rgba(0, 102, 184, 0.15)"})),null,16),n(a,o(i({title:"GitHub Action",desc:"自动化部署工具",link:"https://github.com/features/actions",background:"rgba(65, 89, 114, 0.15)"})),null,16),n(a,o(i({title:"PicList",desc:"图床上传工具",link:"https://code.visualstudio.com/",background:"rgba(65, 89, 114, 0.15)"})),null,16)]),W,X,e("div",Z,[n(a,o(i({title:"Github",desc:"https://github.com/yangzupan/yangzupan.github.io",link:"https://github.com/yangzupan/yangzupan.github.io",background:"rgba(0, 0, 0, 0.15)"})),null,16),n(a,o(i({title:"Gitee",desc:"https://gitee.com/yangzupan/yangzupan",link:"https://gitee.com/yangzupan/yangzupan",background:"rgba(199, 29, 35, 0.15)"})),null,16)]),$,e("div",ee,[n(a,o(i({desc:"https://www.yangzupan.com",link:"https://www.yangzupan.com",background:"rgba(14, 165, 233, 0.15)"})),null,16),n(a,o(i({desc:"https://www.laopange.com",link:"https://www.laopange.com",background:"rgba(14, 165, 233, 0.15)"})),null,16),n(a,o(i({desc:"https://www.pange.net",link:"https://www.pange.net",background:"rgba(14, 165, 233, 0.15)"})),null,16)]),te,ne,e("div",ae,[n(a,o(i({desc:"https://yangzupan.github.io",link:"https://yangzupan.github.io",background:"rgba(14, 165, 233, 0.15)"})),null,16)]),oe,ie,e("div",se,[n(a,o(i({desc:"https://www.yangzupan.net",link:"https://www.yangzupan.net",background:"rgba(14, 165, 233, 0.15)"})),null,16),n(a,o(i({desc:"https://yangzupan.pages.dev",link:"https://yangzupan.pages.dev",background:"rgba(14, 165, 233, 0.15)"})),null,16)]),re,le,e("div",de,[n(a,o(i({desc:"https://yangzupan.netlify.app/",link:"https://yangzupan.netlify.app/",background:"rgba(14, 165, 233, 0.15)"})),null,16)]),ce])}const ge=h(_,[["render",he],["__file","website.html.vue"]]);export{ge as default};