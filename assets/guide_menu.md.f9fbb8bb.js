import{o as n,c as s,a}from"./app.b2699450.js";const t='{"title":"菜单","description":"","frontmatter":{},"headers":[{"level":2,"title":"菜单项类型","slug":"菜单项类型"},{"level":2,"title":"菜单模块","slug":"菜单模块"},{"level":2,"title":"新增菜单","slug":"新增菜单"},{"level":2,"title":"菜单排序","slug":"菜单排序"}],"relativePath":"guide/menu.md","lastUpdated":1634194873723}',p={},o=a('<h1 id="菜单"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h1><p>项目菜单配置存放于 <a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/menus" target="_blank" rel="noopener noreferrer">src/router/menus</a> 下面</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>菜单必须和路由匹配才能显示</p></div><h2 id="菜单项类型"><a class="header-anchor" href="#菜单项类型" aria-hidden="true">#</a> 菜单项类型</h2><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>\n  <span class="token comment">//  菜单名</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 菜单图标,如果没有，则会尝试使用route.meta.icon</span>\n  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 菜单路径</span>\n  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 是否禁用</span>\n  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 子菜单</span>\n  children<span class="token operator">?</span><span class="token operator">:</span> Menu<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">// 菜单标签设置</span>\n  tag<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 为true则显示小圆点</span>\n    dot<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n    <span class="token comment">// 内容</span>\n    content<span class="token operator">:</span> <span class="token builtin">string</span>&#39;<span class="token punctuation">;</span>\n    <span class="token comment">// 类型</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment">// 是否隐藏菜单</span>\n  hideMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="菜单模块"><a class="header-anchor" href="#菜单模块" aria-hidden="true">#</a> 菜单模块</h2><p>一个菜单文件会被当作一个模块</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>children 的 path 字段不需要以<code>/</code>开头</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> MenuModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> menu<span class="token operator">:</span> MenuModule <span class="token operator">=</span> <span class="token punctuation">{</span>\n  orderNo<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  menu<span class="token operator">:</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>\n\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;analysis&#39;</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.analysis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;workbench&#39;</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.workbench&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> menu<span class="token punctuation">;</span>\n</code></pre></div><p>以上模块会转化成以下结构</p><div class="language-ts"><pre><code><span class="token punctuation">[</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;dashboard/analysis&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.analysis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;dashboard/workbench&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.workbench&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><h2 id="新增菜单"><a class="header-anchor" href="#新增菜单" aria-hidden="true">#</a> 新增菜单</h2><p>直接在 <a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/menus/modules" target="_blank" rel="noopener noreferrer">src/router/menus/modules</a> 内新增一个模块文件即可。</p><p>不需要手动引入，放在<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/menus/modules" target="_blank" rel="noopener noreferrer">src/router/routes/menus/modules</a> 内的文件会自动被加载。</p><h2 id="菜单排序"><a class="header-anchor" href="#菜单排序" aria-hidden="true">#</a> 菜单排序</h2><p>在菜单模块内，设置 <code>orderNo</code> 变量，数值越大，排序越靠后</p>',16);p.render=function(a,t,p,e,c,r){return n(),s("div",null,[o])};export default p;export{t as __pageData};
