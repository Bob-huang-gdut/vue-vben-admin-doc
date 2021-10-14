import{o as n,c as s,b as a,d as t}from"./app.b2699450.js";const o='{"title":"国际化","description":"","frontmatter":{},"headers":[{"level":2,"title":"I18n-ally 插件","slug":"i18n-ally-插件"},{"level":2,"title":"配置默认语言","slug":"配置默认语言"},{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"语言文件","slug":"语言文件"},{"level":3,"title":"语言导入逻辑说明","slug":"语言导入逻辑说明"},{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"切换语言","slug":"切换语言"},{"level":2,"title":"新增","slug":"新增"},{"level":3,"title":"语言文件","slug":"语言文件-1"},{"level":3,"title":"新增语言","slug":"新增语言"},{"level":2,"title":"远程读取语言数据","slug":"远程读取语言数据"},{"level":3,"title":"setupI18n 函数","slug":"setupi18n-函数"},{"level":3,"title":"changeLocale 函数","slug":"changelocale-函数"}],"relativePath":"dep/i18n.md","lastUpdated":1634194873723}',e={},c=a("h1",{id:"国际化"},[a("a",{class:"header-anchor",href:"#国际化","aria-hidden":"true"},"#"),t(" 国际化")],-1),l=a("p",null,[t("如果你使用的 vscode 开发工具，则推荐安装 "),a("a",{href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",target:"_blank",rel:"noopener noreferrer"},"I18n-ally"),t(" 这个插件")],-1),p=a("h2",{id:"i18n-ally-插件"},[a("a",{class:"header-anchor",href:"#i18n-ally-插件","aria-hidden":"true"},"#"),t(" I18n-ally 插件")],-1),u=a("p",null,"安装了该插件后，你的代码内可以实时看到对应的语言内容",-1),i=a("p",null,[a("img",{src:"/vue-vben-admin-doc/images/i18n.png",alt:""})],-1),r=a("h2",{id:"配置默认语言"},[a("a",{class:"header-anchor",href:"#配置默认语言","aria-hidden":"true"},"#"),t(" 配置默认语言")],-1),k=a("p",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/settings/localeSetting.ts",target:"_blank",rel:"noopener noreferrer"},"src/settings/localeSetting.ts"),t(" 内可以配置默认语言")],-1),d=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token constant"},"LOCALE"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t(),a("span",{class:"token punctuation"},"["),t("key"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token operator"},":"),t(" LocaleType "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token constant"},"ZH_CN"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'zh_CN'"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token constant"},"EN_US"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'en'"),a("span",{class:"token punctuation"},","),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"const"),t(" localeSetting"),a("span",{class:"token operator"},":"),t(" LocaleSetting "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token comment"},"// 是否显示语言选择器"),t("\n  showPicker"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token comment"},"// 当前语言"),t("\n  locale"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token constant"},"LOCALE"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"ZH_CN"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token comment"},"// 默认语言"),t("\n  fallback"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token constant"},"LOCALE"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"ZH_CN"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token comment"},"// 允许的语言"),t("\n  availableLocales"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token constant"},"LOCALE"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"ZH_CN"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token constant"},"LOCALE"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"EN_US"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token comment"},"// 配置语言列表"),t("\n"),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"const"),t(" localeList"),a("span",{class:"token operator"},":"),t(" DropMenu"),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),t("\n  "),a("span",{class:"token punctuation"},"{"),t("\n    text"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'简体中文'"),a("span",{class:"token punctuation"},","),t("\n    event"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'zh_CN'"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"{"),t("\n    text"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'English'"),a("span",{class:"token punctuation"},","),t("\n    event"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'en'"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),g=a("h2",{id:"配置"},[a("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),t(" 配置")],-1),m=a("p",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/setupI18n.ts",target:"_blank",rel:"noopener noreferrer"},"src/locales/setupI18n.ts"),t(" 内引入的 i18n 这个无需修改")],-1),h=a("h3",{id:"语言文件"},[a("a",{class:"header-anchor",href:"#语言文件","aria-hidden":"true"},"#"),t(" 语言文件")],-1),f=a("p",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/lang",target:"_blank",rel:"noopener noreferrer"},"src/locales/lang/"),t(" 可以配置具体的语言")],-1),y=a("div",{class:"language-bash"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# locales/lang/"),t("\n\n"),a("span",{class:"token comment"},"# 中文语言"),t("\nzh_CN:\n  component: 组件相关\n  layout: 布局相关\n  routes: 路由菜单相关\n  sys: 系统页面相关\n\nen: 同上\n\n")])])],-1),w=a("h3",{id:"语言导入逻辑说明"},[a("a",{class:"header-anchor",href:"#语言导入逻辑说明","aria-hidden":"true"},"#"),t(" 语言导入逻辑说明")],-1),b=a("ol",null,[a("li",null,"初始化")],-1),v=a("p",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/setupI18n.ts",target:"_blank",rel:"noopener noreferrer"},"src/locales/setupI18n"),t(" 内的根语言文件可以看到")],-1),L=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"const"),t(" defaultLocal "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"await"),t(),a("span",{class:"token keyword"},"import"),a("span",{class:"token punctuation"},"("),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"./lang/"),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),t("locale"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token string"},".ts"),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),I=a("p",null,[t("这会导入 "),a("code",null,"src/locales/lang/{lang}.ts"),t(" 文件语言包，此文件会导入对应语言下的所有文件。")],-1),_=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" genMessage "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'../helper'"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token keyword"},"import"),t(" antdLocale "),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'ant-design-vue/es/locale/zh_CN'"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token keyword"},"import"),t(" momentLocale "),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'moment/dist/locale/zh-cn'"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token keyword"},"const"),t(" modules "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"import"),a("span",{class:"token punctuation"},"."),t("meta"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"globEager"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'./zh_CN/**/*.ts'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"default"),t(),a("span",{class:"token punctuation"},"{"),t("\n  message"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token operator"},"..."),a("span",{class:"token function"},"genMessage"),a("span",{class:"token punctuation"},"("),t("modules"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token string"},"'zh_CN'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),t("\n    antdLocale"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  momentLocale"),a("span",{class:"token punctuation"},","),t("\n  momentLocaleName"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'zh-cn'"),a("span",{class:"token punctuation"},","),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),N=a("p",null,"并将其按相应的目录结构转化为多层级的",-1),C=a("p",null,"例:",-1),x=a("p",null,[a("code",null,"lang/zh_CN/components/modal.ts"),t(" 的文件内容为")],-1),z=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),t("\n  title"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'标题'"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),E=a("p",null,[t("则在使用的使用直接使用 "),a("code",null,"t('components.modal.title')"),t(" 进行获取。")],-1),S=a("p",null,"这样做的好处在于更容易管理大型项目的多语言。如果不需要分模块划分，可以直接自己手动导入即可。",-1),M=a("h2",{id:"使用"},[a("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),t(" 使用")],-1),O=a("p",null,[t("引入项目自带的 "),a("code",null,"useI18n"),t(),a("strong",null,"注意不要引入 vue-i18n 的 useI18n")],-1),A=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" useI18n "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'/@/hooks/web/useI18n'"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token punctuation"},"{"),t(" t "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"useI18n"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token keyword"},"const"),t(" title "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"t"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'components.modal.title'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),P=a("h2",{id:"切换语言"},[a("a",{class:"header-anchor",href:"#切换语言","aria-hidden":"true"},"#"),t(" 切换语言")],-1),H=a("p",null,[t("切换语言需要使用 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/useLocale.ts",target:"_blank",rel:"noopener noreferrer"},"src/locales/useLocale.ts")],-1),Z=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),t(),a("span",{class:"token punctuation"},"{"),t(" useLocale "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"from"),t(),a("span",{class:"token string"},"'/@/locales/useLocale'"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token punctuation"},"{"),t(" changeLocale "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"useLocale"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token function"},"changeLocale"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'en'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),T=a("h2",{id:"新增"},[a("a",{class:"header-anchor",href:"#新增","aria-hidden":"true"},"#"),t(" 新增")],-1),U=a("h3",{id:"语言文件-1"},[a("a",{class:"header-anchor",href:"#语言文件-1","aria-hidden":"true"},"#"),t(" 语言文件")],-1),W=a("p",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/lang",target:"_blank",rel:"noopener noreferrer"},"src/locales/lang/"),t(" 增加对应语言的文件即可")],-1),$=a("h3",{id:"新增语言"},[a("a",{class:"header-anchor",href:"#新增语言","aria-hidden":"true"},"#"),t(" 新增语言")],-1),j=a("p",null,[t("目前项目自带的语言只有 "),a("code",null,"zh_CN"),t(" 和 "),a("code",null,"en"),t(" 两种")],-1),D=a("p",null,"如果需要新增，按以下操作即可",-1),F=a("ol",null,[a("li",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/lang",target:"_blank",rel:"noopener noreferrer"},"src/locales/lang/"),t(" 下新增相应的语言目录及语言文件并引入 引入 ant-design-vue 和 moment 对应的语言包")]),a("li",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/types/config",target:"_blank",rel:"noopener noreferrer"},"types/config.d.ts"),t(" 内加上预览类型定义")]),a("li",null,[t("在 "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/settings/localeSetting.ts",target:"_blank",rel:"noopener noreferrer"},"src/settings/localeSetting.ts"),t(" 修改语言配置")])],-1),q=a("h2",{id:"远程读取语言数据"},[a("a",{class:"header-anchor",href:"#远程读取语言数据","aria-hidden":"true"},"#"),t(" 远程读取语言数据")],-1),B=a("p",null,[t("目前项目会在 "),a("code",null,"src/main.ts"),t(" 内等待 "),a("code",null,"setupI18n"),t(" 这个函数执行完之后才会渲染界面，所以只需在 setupI18n 内发送 ajax 请求，将对应的数据设置到 i18n 实例上即可")],-1),G=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"// src/main.ts"),t("\n"),a("span",{class:"token keyword"},"await"),t(),a("span",{class:"token function"},"setupI18n"),a("span",{class:"token punctuation"},"("),t("app"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\napp"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"mount"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'#app'"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n")])])],-1),J=a("h3",{id:"setupi18n-函数"},[a("a",{class:"header-anchor",href:"#setupi18n-函数","aria-hidden":"true"},"#"),t(" setupI18n 函数")],-1),K=a("p",null,[t("代码: "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/setupI18n.ts",target:"_blank",rel:"noopener noreferrer"},"src/locales/setupI18n/")],-1),Q=a("p",null,"如下所示，这里会先设置一个默认语言，默认语言可以设置在本地，也可以在这里等待接口返回默认语言",-1),R=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"// setup i18n instance with glob"),t("\n"),a("span",{class:"token keyword"},"export"),t(),a("span",{class:"token keyword"},"async"),t(),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"setupI18n"),a("span",{class:"token punctuation"},"("),t("app"),a("span",{class:"token operator"},":"),t(" App"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" options "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"await"),t(),a("span",{class:"token function"},"createI18nOptions"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  i18n "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"createI18n"),a("span",{class:"token punctuation"},"("),t("options"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"as"),t(" I18n"),a("span",{class:"token punctuation"},";"),t("\n  app"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),t("i18n"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\n"),a("span",{class:"token keyword"},"async"),t(),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"createI18nOptions"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token builtin"},"Promise"),a("span",{class:"token operator"},"<"),t("I18nOptions"),a("span",{class:"token operator"},">"),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" locale "),a("span",{class:"token operator"},"="),t(" localeStore"),a("span",{class:"token punctuation"},"."),t("getLocale"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token comment"},"// 这里改成接口获取"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" defaultLocal "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"await"),t(),a("span",{class:"token keyword"},"import"),a("span",{class:"token punctuation"},"("),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"./lang/"),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),t("locale"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token string"},".ts"),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" message "),a("span",{class:"token operator"},"="),t(" defaultLocal"),a("span",{class:"token punctuation"},"."),t("default"),a("span",{class:"token operator"},"?."),t("message "),a("span",{class:"token operator"},"??"),t(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token keyword"},"return"),t(),a("span",{class:"token punctuation"},"{"),t("\n    legacy"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},","),t("\n    locale"),a("span",{class:"token punctuation"},","),t("\n    fallbackLocale"),a("span",{class:"token operator"},":"),t(" fallback"),a("span",{class:"token punctuation"},","),t("\n    messages"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token punctuation"},"["),t("locale"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token operator"},":"),t(" message"),a("span",{class:"token punctuation"},","),t("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n    availableLocales"),a("span",{class:"token operator"},":"),t(" availableLocales"),a("span",{class:"token punctuation"},","),t("\n    sync"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),t("\n    silentTranslationWarn"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),t("\n    missingWarn"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},","),t("\n    silentFallbackWarn"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),V=a("h3",{id:"changelocale-函数"},[a("a",{class:"header-anchor",href:"#changelocale-函数","aria-hidden":"true"},"#"),t(" changeLocale 函数")],-1),X=a("p",null,[t("代码: "),a("a",{href:"https://github.com/anncwb/vue-vben-admin/tree/main/src/locales/useLocale",target:"_blank",rel:"noopener noreferrer"},"src/locales/useLocale/")],-1),Y=a("p",null,[t("当手动切换语言的时候会触发 "),a("code",null,"useLocale"),t(" 函数，useLocale 也是异步函数，只需等待接口返回响应的数据后，再进行设置即可")],-1),nn=a("div",{class:"language-ts"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"async"),t(),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"changeLocale"),a("span",{class:"token punctuation"},"("),t("locale"),a("span",{class:"token operator"},":"),t(" LocaleType"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" globalI18n "),a("span",{class:"token operator"},"="),t(" i18n"),a("span",{class:"token punctuation"},"."),t("global"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" currentLocale "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"unref"),a("span",{class:"token punctuation"},"("),t("globalI18n"),a("span",{class:"token punctuation"},"."),t("locale"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("currentLocale "),a("span",{class:"token operator"},"==="),t(" locale"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"return"),t(" locale"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("loadLocalePool"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"includes"),a("span",{class:"token punctuation"},"("),t("locale"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token function"},"setI18nLanguage"),a("span",{class:"token punctuation"},"("),t("locale"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token keyword"},"return"),t(" locale"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token comment"},"// 这里改成接口获取"),t("\n  "),a("span",{class:"token keyword"},"const"),t(" langModule "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"await"),t(),a("span",{class:"token keyword"},"import"),a("span",{class:"token punctuation"},"("),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"./lang/"),a("span",{class:"token interpolation"},[a("span",{class:"token interpolation-punctuation punctuation"},"${"),t("locale"),a("span",{class:"token interpolation-punctuation punctuation"},"}")]),a("span",{class:"token string"},".ts"),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"as"),t(),a("span",{class:"token builtin"},"any"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),t("default "),a("span",{class:"token keyword"},"as"),t(" LangModule"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("langModule"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token keyword"},"const"),t(),a("span",{class:"token punctuation"},"{"),t(" message"),a("span",{class:"token punctuation"},","),t(" momentLocale"),a("span",{class:"token punctuation"},","),t(" momentLocaleName "),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token operator"},"="),t(" langModule"),a("span",{class:"token punctuation"},";"),t("\n\n  globalI18n"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"setLocaleMessage"),a("span",{class:"token punctuation"},"("),t("locale"),a("span",{class:"token punctuation"},","),t(" message"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  moment"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"updateLocale"),a("span",{class:"token punctuation"},"("),t("momentLocaleName"),a("span",{class:"token punctuation"},","),t(" momentLocale"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  loadLocalePool"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),t("locale"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n  "),a("span",{class:"token function"},"setI18nLanguage"),a("span",{class:"token punctuation"},"("),t("locale"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"return"),t(" locale"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1);e.render=function(a,t,o,e,sn,an){return n(),s("div",null,[c,l,p,u,i,r,k,d,g,m,h,f,y,w,b,v,L,I,_,N,C,x,z,E,S,M,O,A,P,H,Z,T,U,W,$,j,D,F,q,B,G,J,K,Q,R,V,X,Y,nn])};export default e;export{o as __pageData};
