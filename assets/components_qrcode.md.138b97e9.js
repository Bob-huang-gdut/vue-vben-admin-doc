import{o as n,c as s,a}from"./app.b2699450.js";const t='{"title":"QrCode","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"components/qrcode.md","lastUpdated":1634194873723}',p={},o=a('<h1 id="qrcode"><a class="header-anchor" href="#qrcode" aria-hidden="true">#</a> QrCode</h1><p>用于生成二维码的组件</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QrCode</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qrCodeUrl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> QrCode<span class="token punctuation">,</span> QrCodeActionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Qrcode/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> LogoImg <span class="token keyword">from</span> <span class="token string">&#39;/@/assets/images/logo.png&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> qrCodeUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.vvbin.cn&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> QrCode <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> qrRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>QrCodeActionType<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> qrEl <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>qrRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>qrEl<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n        qrEl<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">&#39;文件名&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        qrCodeUrl<span class="token punctuation">,</span>\n        LogoImg<span class="token punctuation">,</span>\n        download<span class="token punctuation">,</span>\n        qrRef<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.qrcode-demo-item</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>\n    <span class="token property">margin-right</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>string</code></td><td>-</td><td>-</td><td>二维码地址</td></tr><tr><td>options</td><td><code>QRCodeRenderersOptions</code></td><td>-</td><td>-</td><td>二维码配置 ,见 QRCodeRenderersOptions</td></tr><tr><td>width</td><td><code>number</code></td><td>2</td><td>-</td><td>宽度</td></tr><tr><td>logo</td><td><code>string｜LogoType</code></td><td>-</td><td>-</td><td>中间 logo 配置，见 LogoType</td></tr><tr><td>tag</td><td><code>渲染标签</code></td><td>canvas</td><td><code>canvas | img</code></td><td>img 不支持内嵌 logo</td></tr></tbody></table><p><strong>QRCodeRenderersOptions</strong></p><div class="language-ts"><pre><code><span class="token comment">/**\n * 定义margin的宽度。.\n * Default: 4\n */</span>\nmargin<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token comment">/**\n * 比例因子。值1表示每个模块1像素（黑点）。\n * Default: 4\n */</span>\nscale<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token comment">/**\n * 为输出图像强制指定宽度。\n * 如果宽度太小而不能包含qr符号，则此选项将被忽略。\n * 优先于规模。\n */</span>\nwidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\ncolor<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * 暗模块的颜色。值必须为十六进制格式（RGBA）.\n   * 注意：深色应始终比color.light暗。.\n   * Default: #000000ff\n   */</span>\n  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">/**\n   * 照明模块的颜色。值必须为十六进制格式（RGBA）.\n   * Default: #ffffffff\n   */</span>\n  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</code></pre></div><p><strong>LogoType</strong></p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">// logo图片</span>\n  src<span class="token operator">:</span> string<span class="token punctuation">;</span>\n  <span class="token comment">// logo大小</span>\n  logoSize<span class="token operator">:</span> number<span class="token punctuation">;</span>\n  <span class="token comment">// 背景颜色</span>\n  bgColor<span class="token operator">:</span> string<span class="token punctuation">;</span>\n  <span class="token comment">// logo圆角</span>\n  logoRadius<span class="token operator">:</span> number<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>download</td><td><code>Function(fileName:string)</code></td><td>下载</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>done</td><td><code>(data: QrcodeDoneEventParams)=&gt;void</code></td><td>绘制完成</td></tr><tr><td>error</td><td><code>(error)=&gt;void</code></td><td>生成二维码时发生错误</td></tr></tbody></table><p>QrcodeDoneEventParams</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  url<span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// 二维码DataURL数据</span>\n  ctx<span class="token operator">?</span><span class="token operator">:</span> CanvasRenderingContext2D<span class="token punctuation">;</span>  <span class="token comment">// 该对象为画布的2D渲染上下文，仅在tag为canvas时有效，可用于自定义绘制</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><code>done</code> 事件回调中可以对二维码进行自定义的绘制，示例代码如下：</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QrCode</span>\n  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qrCodeUrl<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@done</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onQrcodeDone<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">onQrcodeDone</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> ctx <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx <span class="token keyword">instanceof</span> <span class="token class-name">CanvasRenderingContext2D</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 额外绘制</span>\n    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&#39;16px &quot;微软雅黑&quot;&#39;</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&#39;你帅你先扫&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">195</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>有关 <code>CanvasRenderingContext2D</code> 的更多资料以及绘制方法，请参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noopener noreferrer">MDN</a></p>',20);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
