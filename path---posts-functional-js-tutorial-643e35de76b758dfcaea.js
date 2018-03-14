webpackJsonp([28692295151527],{431:function(n,s){n.exports={data:{markdownRemark:{html:'<p>제가 요즘 프론트엔드 개발을 하면서 주로 관심을 가지고 있는 분야는</p>\n<ul>\n<li>CSS로 레이아웃을 더 잘 잡아보기 (without Grid, Flex - 하위호환 때문에…) + 더 사용자 친화적인 UI 고려하기</li>\n<li>타입스크립트의 타입 시스템을 적극적으로 활용해보기</li>\n<li>타입스크립트 뿐 아니라 자바스크립트의 기초에 소홀히 하지 않기</li>\n<li>다양한 프로그래밍 패러다임과 이론을 익히면서 실무에 접목하기 -> 더욱 간결하고 유지보수가 용이한 코드 작성하기</li>\n<li><a href="/posts/what-is-testing-javascript-kr">테스팅</a></li>\n</ul>\n<p>이 정도로 나열해 볼 수 있습니다.</p>\n<p>오늘은 이 중 세 번째와 네 번째 주제에 대해 아주 가벼운 이야기를 해 보려고 합니다. 최근에 자바스크립트 개발과 관련된 담론에서 많이 거론되는 용어가 있습니다. <strong><a href="https://www.reactivemanifesto.org/ko">Reactive Programming</a> - 이 선언에 기반한 RxJS 등의 라이브러리</strong>, <strong>Functional Programming(함수형 프로그래밍)</strong> 입니다. 사실 이 용어들이 등장한 것은 꽤 오래 전 일이라고 합니다만.. 저는 요즘에서야 눈을 돌리게 되었네요.</p>\n<p>그렇게 함수형 프로그래밍에 관심을 가지면서 책이나 강연 등을 살펴보고, 얼마 전에는 함수를 적극적으로 활용하여 CSS 파일을 압축(minify)하는 아주 간단한 함수를 만들었습니다. 이 압축 함수를 만들면서 제가 조금이나마 익힌 함수형 프로그래밍의 개념을 어떻게 활용했는지, 어떻게 발전시킬 수 있을지 함께 고민하는 시간을 마련해보고자 합니다.</p>\n<p>앞으로 제가 선보일 내용은 아주 기초적인데다 심지어 틀릴 수도 있으니 이상한 점이나 잘못된 점이 있다면 댓글이나 메일로 피드백 주시면 대단히 고맙겠습니다.</p>\n<h2 id="함수형-프로그래밍이란"><a href="#%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%B4%EB%9E%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>함수형 프로그래밍이란</h2>\n<p>제가 아는 한에서 여러가지로 장황하게 설명을 해 보려고 했으나, 다음 번역 글이 아주 좋은 설명을 하고 있다고 생각하여 링크로 대신하고자 합니다.</p>\n<ul>\n<li><a href="https://medium.com/@jooyunghan/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-fab4e960d263">(번역) 함수형 프로그래밍이란 무엇인가? – Jooyung Han (한주영) – Medium</a></li>\n<li><a href="https://medium.com/@jooyunghan/%EC%96%B4%EB%96%A4-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%96%B8%EC%96%B4%EB%93%A4%EC%9D%B4-%ED%95%A8%EC%88%98%ED%98%95%EC%9D%B8%EA%B0%80-fec1e941c47f">(번역) 어떤 프로그래밍 언어들이 함수형인가? – Jooyung Han (한주영) – Medium</a></li>\n</ul>\n<p>제 나름의 정의를 내리자면 “더 안정적인 프로그램을 만들기 위해 입력과 출력이 철저히 통제된 순수 함수 및 부수 효과(Side-effect)를 최소화한 함수 위주로 프로그래밍 하는 것. 이를 통해 간결하고 가독성 높은 프로그램을 작성할 수 있으며 동시성 작업을 더 안전하게 구현할 수 있다.” 라고 말씀드릴 수 있겠습니다. 여기서 한마디 더 얹어보자면 <strong>함수를 특별하게 취급하지 않는 프로그래밍 패러다임</strong> 이라고 말씀드릴 수 있겠습니다.</p>\n<p>사실 자바스크립트는 <strong>함수형 프로그래밍 언어가 아닙니다.</strong> 이 점은 반드시 인지하고 계셔야 합니다. 단순히 자바스크립트에서 함수가 일급 객체(First Class Citizen)이기 때문에 함수형 프로그래밍 언어인 것은 아닙니다. 함수형 프로그래밍이 가능한 정도입니다. 아마 이 주제 때문에 글 하나가 더 나오겠지만.. 언젠가 제가 더 확고한 기반지식을 쌓고 작성할 기회가 있으리라 생각합니다. (사실 이미 다른 분들의 훌륭한 글이나 번역이 많아서요)</p>\n<h2 id="css-압축-함수-만들기---초기-버전"><a href="#css-%EC%95%95%EC%B6%95-%ED%95%A8%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0---%EC%B4%88%EA%B8%B0-%EB%B2%84%EC%A0%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS 압축 함수 만들기 - 초기 버전</h2>\n<p>리액트 프로젝트를 하면서 외부 CSS나 미리 설정된 CSS를 HTML 헤더에 삽입할 일이 있는데, 저는 이 CSS 파일이 고스란히 노출되기보다 최소한 공백이나 개행 등을 제거하여 용량을 줄이고, 사용자가 조금이라도 빠르게 컨텐츠를 볼 수 있기를 원했습니다. 예를 들면 최상단에 페이지의 기본 설정을 위해 다음과 같은 CSS를 설정하였습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* page-setup.css */</span>\n<span class="token selector">html</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">html, body</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">div, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd,\ntable, th, td, form, fieldset, legend, input, textarea, blockquote, button</span> <span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">*, *:before, *:after</span> <span class="token punctuation">{</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">li</span> <span class="token punctuation">{</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>사실 CSS는 중괄호(<code>{}</code>) 만 제대로 열고 닫히고, 세미콜론을 지켜주는 등 기본적인 문법 요소만 충족하면 정상적으로 동작합니다. 다만 <code>margin: 0 auto;</code>  같이 작성되어 있을 때는 <code>0</code> 과 <code>auto</code> 사이의 공백은 유지해야합니다. 그래서 제가 만들려는 함수의 필요 구현 조건은 이랬습니다.</p>\n<ul>\n<li>CSS 파일 앞 뒤에 불필요한 공백과 개행이 없어야한다.</li>\n<li>CSS 파일 내부에도 개행이 없어야한다.</li>\n<li>CSS 파일 내부에서 다음 문자 주위의 공백은 불필요하다 -> <code>,</code>, <code>;</code>, <code>:</code>, <code>{</code>, <code>}</code></li>\n</ul>\n<p>그래서 CSS파일 자체를 문자열로 읽어들여서 이를 <code>string#trim</code>, <code>string#replace</code> 메서드로 수정하는 함수를 만들었습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">cssMinifierNormal</span><span class="token punctuation">(</span>cssString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> cssString\n    <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// -> CSS 전후 공백 및 개행 삭제</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/[\\r\\n]/g</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token comment">// -> 개행 삭제</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\s*,\\s*/g</span><span class="token punctuation">,</span> <span class="token string">\',\'</span><span class="token punctuation">)</span>  <span class="token comment">// -> 해당 문자열 주위의 공백을 삭제</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\s*;\\s*/g</span><span class="token punctuation">,</span> <span class="token string">\';\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\s*:\\s*/g</span><span class="token punctuation">,</span> <span class="token string">\':\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\s*{\\s*/g</span><span class="token punctuation">,</span> <span class="token string">\'{\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\s*}\\s*/g</span><span class="token punctuation">,</span> <span class="token string">\'}\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>아직까진 너무 간단한 함수입니다. 만약에 이 함수가 300개 이상의 규칙을 가지고 있다고 한다면 이렇게 작성하는게 옳은 방법일까요? 300개 이상의 규칙을 가지고 있는 함수에 새로운 규칙을 추기해야한다면 어디에 어떻게 추가해야 문제가 없을까요? 아마 당장은 이런 문제에 부딪힐 일이 없겠지만 약간의 고민 끝에 다른 방식으로 구현해 보았습니다.</p>\n<h2 id="함수로-풀어보자"><a href="#%ED%95%A8%EC%88%98%EB%A1%9C-%ED%92%80%EC%96%B4%EB%B3%B4%EC%9E%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>함수로 풀어보자</h2>\n<p>이번에는 서로 다른 함수를 조합하는 방식으로 또 다른 <code>cssMinifier</code> 함수를 만들어보겠습니다. 먼저 조금씩 각기 다른 공백 제거 함수를 분리해보겠습니다.</p>\n<ul>\n<li><code>trim</code>: 전후 공백 및 개행 삭제</li>\n<li><code>replace</code>: 특정 정규표현식에 해당하는 문자열 교체</li>\n</ul>\n<p>어? 방금 우리가 위에서 사용한 메서드 아닌가요? 하지만 이 메서드를 함수로 표현한다면 약간 이야기가 달라집니다. 함수를 평소와는 약간 다르게 구현해보겠습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">trim</span> <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// function trim(str) {</span>\n<span class="token comment">//   return str.trim();</span>\n<span class="token comment">// }</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">replace</span> <span class="token operator">=</span> <span class="token punctuation">(</span>regExp<span class="token punctuation">,</span> newSubStr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=></span>\n  str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regExp<span class="token punctuation">,</span> newSubStr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">// function replace(regExp, newSubStr) {</span>\n<span class="token comment">//   return function replacer(str) {</span>\n<span class="token comment">//     return str.replace(regExp, newSubStr);</span>\n<span class="token comment">//   }</span>\n<span class="token comment">// }</span>\n</code></pre>\n      </div>\n<p>화살표 함수(Arrow Function)는 보신적이 있어도 화살표가 이중으로 쓰여진 부분은 익숙지 않으신 분들이 계실지도 모르겠습니다. 그래서 아래에 일반 함수 표현식으로 작성하는 법도 따로 표기했습니다. <code>replace</code> 는 일종의 부분 함수입니다. 첫 번째로 인자를 입력해 두면 그 다음에는 <code>string#replace</code> 메서드를 적용할 문자열의 입력을 기다리는 함수가 리턴됩니다. (커링이라고 말씀드리려 했으나 엄밀히 따지면 커링은 여러 개의 인자를 받는 함수를 각각 한개씩 받을 수 있도록 만들어주는 기법이라고 이해하고 있어서 부분 함수라고 표현합니다)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 콤마 주변의 공백을 제거하는 함수 할당</span>\n<span class="token keyword">const</span> removeSpaceAroundComma <span class="token operator">=</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\s*,\\s*/g</span><span class="token punctuation">,</span> <span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">removeSpaceAroundComma</span><span class="token punctuation">(</span><span class="token string">\'One , Two , Three , Four\'</span><span class="token punctuation">)</span>\n<span class="token comment">// => \'One,Two,Three,Four\'</span>\n</code></pre>\n      </div>\n<p>위의 <code>replace</code> 함수를 이런 식으로 활용할 수 있습니다. 조금만 손을 보면 어떤 문자 주변의 공백이든 손쉽게 제거해주는 함수를 만들 수 있겠네요. </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">removeSpaceAroundChar</span> <span class="token operator">=</span> <span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`\\\\s*</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>char<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\\\s*`</span></span><span class="token punctuation">,</span> <span class="token string">\'g\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> char<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> removeSpaceAroundSemi <span class="token operator">=</span> <span class="token function">removeSpaceAroundChar</span><span class="token punctuation">(</span><span class="token string">\';\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">removeSpaceAroundSemi</span><span class="token punctuation">(</span><span class="token string">\'; undefined is not a function ; \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => \';undefined is not a function;\'</span>\n</code></pre>\n      </div>\n<p>아까 작성한 메서드 체인처럼 원하는 모든 문자열 주변의 공백을 제거하는 함수를 준비해보겠습니다. <code>Array#map</code>  함수를 쓰고자 하지만 이번에는 <code>map</code> 함수조차 직접 만들어봤습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span>iteratee<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token operator">=></span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>iteratee<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// function map(iteratee) {</span>\n<span class="token comment">//   return function mapped(list) {</span>\n<span class="token comment">//     return list.map(iteratee);</span>\n<span class="token comment">//   }</span>\n<span class="token comment">// }</span>\n</code></pre>\n      </div>\n<p>사실 이번 글에서는 새롭게 작성한 <code>map</code> 함수를 별로 사용할 일이 없을지 모르지만, 인자를 나중에 받는 방식으로 구현하면 함수끼리 조합이 용이해지는 이점이 있기 때문에 시험삼아 만들어봤습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> shrinkers <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span>removeSpaceAroundChar<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\',\'</span><span class="token punctuation">,</span> <span class="token string">\';\'</span><span class="token punctuation">,</span> <span class="token string">\':\'</span><span class="token punctuation">,</span> <span class="token string">\'{\'</span><span class="token punctuation">,</span> <span class="token string">\'}\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이렇게 특정 문자열 주변의 공백을 제거해주는 함수의 배열을 만들었습니다. 그러면 이제 익숙한 <code>Array#forEach</code> 함수나 <code>Array#reduce</code> 로 문자열을 수정하면 되겠지요. 이렇게요.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">shrinkCss</span><span class="token punctuation">(</span>cssString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> shrinkers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> shrinker<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">shrinker</span><span class="token punctuation">(</span>cssString<span class="token punctuation">)</span><span class="token punctuation">,</span> cssString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>오늘의 목표는 여기서 끝내는게 아닙니다. 함수를 만드는 것 까지 해봤으니 만든 함수를 <strong>조합</strong>해서 문제를 한번에 해결해보겠습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">pipe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">pipe</span><span class="token punctuation">(</span>\n  x <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  x <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  x <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => 3000</span>\n</code></pre>\n      </div>\n<p>보시는대로 <code>pipe</code> 함수는 인자로 받은 함수를 모아놨다가 적용할 값을 받아서 왼쪽에서 오른쪽으로(위에서 아래로) 순차적으로 연산합니다. 보통 반대로 <code>compose</code> 함수를 쓰는 경우도 있는데, 저는 가독성 측면에서 아직은 <code>pipe</code>  를 선호합니다.</p>\n<p>그럼 여태 만든 함수를 저 파이프라인에 쌓아두고 CSS 문자열을 넣기만 하면 우리가 원하는 문자열이 나오겠군요? 한번 최종 결과물을 만들어 보겠습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">\'./page-setup.css\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> encoding<span class="token punctuation">:</span> <span class="token string">\'utf-8\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">cssMinifier</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">cssMinifier</span><span class="token punctuation">(</span>cssString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">removeSpaceAroundChar</span> <span class="token operator">=</span> char <span class="token operator">=></span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`\\\\s*</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>char<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\\\s*`</span></span><span class="token punctuation">,</span> <span class="token string">\'g\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> char<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> removeNewLine <span class="token operator">=</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/[\\r\\n]/g</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> shrinkers <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span>removeSpaceAroundChar<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\',\'</span><span class="token punctuation">,</span> <span class="token string">\';\'</span><span class="token punctuation">,</span> <span class="token string">\':\'</span><span class="token punctuation">,</span> <span class="token string">\'{\'</span><span class="token punctuation">,</span> <span class="token string">\'}\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token function">pipe</span><span class="token punctuation">(</span>trim<span class="token punctuation">,</span> removeNewLine<span class="token punctuation">,</span> <span class="token operator">...</span>shrinkers<span class="token punctuation">)</span><span class="token punctuation">(</span>cssString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>구문 자체는 약간 복잡해졌을지 몰라도 코드 줄 수는 확연히 줄었으며 만약에 규칙을 추가해야 할 때는 어느 부분에 무엇을 추가해야하는지가 조금 더 간편해지고 명확해졌습니다. 각자 역할을 나타내는 이름을 가진 함수니까요. 지금은 <code>shrinkers</code> 오른편에 있는 배열에 원하는 글자만 추가해주면 새로운 공백 제거 규칙이 생성됩니다.</p>\n<p><code>shrinkers</code> 는 함수의 배열인지라 <code>pipe</code> 함수에 넣을 때는 전개 연산자(Spread Operator)로 풀어헤쳐서 인자로 적용하였습니다. 아마 <code>pipe</code> 함수를 고도화하면 배열로 된 인자에도 대응할 수 있겠지요. 이번 시간에는 작게나마 제가 이해하고 있는 부분만 말씀드렸습니다.</p>\n<h2 id="이렇게도-해-보고-저렇게도-해-보고"><a href="#%EC%9D%B4%EB%A0%87%EA%B2%8C%EB%8F%84-%ED%95%B4-%EB%B3%B4%EA%B3%A0-%EC%A0%80%EB%A0%87%EA%B2%8C%EB%8F%84-%ED%95%B4-%EB%B3%B4%EA%B3%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>이렇게도 해 보고, 저렇게도 해 보고</h2>\n<p>저도 요즘에야 이렇게 함수를 적극적으로 활용하여 주어진 문제를 풀어나가는 법을 연습하고 있습니다. 머리로 아무리 알고만 있어도 실제로 써먹지 않는다면 사용 가능한 지식이 아니겠지요. 위에 작성한 <code>replace</code>, <code>map</code>, <code>pipe</code> 함수는 원래대로라면 훨씬 고려해야 할 요소들이 많을지도 모릅니다. 제대로 된 인자가 들어왔는지, 더 재사용 가능한 방법이 있는지 등등... 저는 일단 실무에서 <a href="http://ramdajs.com">Ramda.js</a> 를 활용하고 있습니다. 위에 작성한 함수 모두 <code>R.replace</code>, <code>R.map</code>, <code>R.pipe</code> 로 대체 가능합니다.</p>\n<p>가능한 부분에 적극적으로 함수를 활용한 프로그래밍을 하자니 아직 모르는 점이 많습니다.</p>\n<ul>\n<li>비동기 작업(Promise 등)을 일으키는 함수를 다른 함수와 조합하려면 어떻게 해야할까?</li>\n<li>아무 생각없이 작성하는 클래스 상속도 함수의 조합만으로 해결 할 수 있어보이는데, 어떻게 해야할까?</li>\n<li>함수만으로 코드를 작성하자니 어색하다. 뭔가 Class 같이 공통된 역할을 하는 함수를 모으는 일도 해야할까? 한다면 어떻게 해야할까?</li>\n<li>재사용 가능한 함수를 어떻게 만들 수 있을까? 이 함수를 조합하는 방법은 더 다양할 것 같은데 어떤 게 있을까?</li>\n</ul>\n<p>이미 제가 했던 고민을 거쳐온 분들이라면 조금이라도 조언을 부탁드리고 싶고, 위의 문제를 해결하는 방식이 생소한 분들이라면 한번 기존에 작성했던/앞으로 작성하실 코드에 저처럼 다양한 시도를 해 보시길 권하고 싶습니다. 반드시 함수형 프로그래밍이라는 개념을 익힐 필요는 없습니다. 기존의 틀을 벗어나 새로운 시각을 받아들이고 적용하고자 할 때, 더 좋은 프로그램을 만들 수 있는 가능성이 열린다고 생각합니다.</p>\n<h2 id="참고-자료"><a href="#%EC%B0%B8%EA%B3%A0-%EC%9E%90%EB%A3%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>참고 자료</h2>\n<ul>\n<li><a href="http://ramdajs.com">Ramda Documentation</a></li>\n<li><a href="http://merong.city">merong님의 함수형 자바스크립트 프로그래밍 강좌</a></li>\n<li><a href="https://www.gitbook.com/book/mostly-adequate/mostly-adequate-guide">Frisby 교수님의 함수형 적절한 함수형 프로그래밍 가이드 · GitBook</a></li>\n<li><a href="https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript">Professor Frisby Introduces Composable Functional JavaScript from @drboolean on @eggheadio</a></li>\n<li><a href="http://aladin.kr/p/rUEvd">함수형 자바스크립트 - 모던 웹 개발에 충실한 실전 함수형 프로그래밍 안내서</a></li>\n</ul>',frontmatter:{date:"2018/02/19",path:"/posts/functional-js-tutorial",title:"자바스크립트로 함수형 프로그래밍 아주 살짝 맛보기",tags:["Functional Programming","Javascript"]}},site:{siteMetadata:{siteUrl:"https://emaren84.github.io",disqusShortUrl:"gatsby-blog-1"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-functional-js-tutorial-643e35de76b758dfcaea.js.map