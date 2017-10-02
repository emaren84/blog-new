webpackJsonp([680259409647],{"./node_modules/json-loader/index.js!./.cache/json/posts-mastering-ruby-blocks-in-less-than-5-minutes-kor.json":function(n,s){n.exports={data:{markdownRemark:{html:'<ul>\n<li><strong>이 포스팅은 <a href="https://twitter.com/chalmagean">Cezar Halmagean</a>의 <a href="https://mixandgo.com/blog/mastering-ruby-blocks-in-less-than-5-minutes">포스팅</a>을 번역한 글입니다</strong></li>\n<li><strong>번역 내용에 대한 조언 및 의견은 언제나 작성자에게 큰 도움이 됩니다</strong></li>\n</ul>\n<hr>\n<p>블록은 루비에서 가장 강력한 기능이지만 대수롭지 않게 여겨지는 기능이기도 합니다. 고백컨데 저도 루비 블록이 어떻게 동작하는지, 그리고 실제로 어떻게 유용하게 사용될 수 있는지 알아내는데 시간이 좀 걸렸습니다.</p>\n<p>처음에 블록을 이해하는데 굉장히 어렵게 만드는 요소로 <code>yield</code> 등의 개념이 있습니다. 저는 블록의 일부 개념에 대해 이야기하고 몇몇 예시를 들어서 글 마지막에는 여러분이 루비 블록을 명확하게 이해하도록 돕겠습니다.</p>\n<h2 id="무엇을-배울-것인가"><a href="#%EB%AC%B4%EC%97%87%EC%9D%84-%EB%B0%B0%EC%9A%B8-%EA%B2%83%EC%9D%B8%EA%B0%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>무엇을 배울 것인가</h2>\n<ol>\n<li>\n<p>기초: 루비 블록이란?</p>\n</li>\n<li>\n<p><code>yield</code> 가 동작하는 방법</p>\n<ul>\n<li>블록을 메서드로 전달하기</li>\n<li><code>yield</code> 도 매개변수를 받는다</li>\n</ul>\n</li>\n<li>\n<p><code>&#x26;block</code> 은 무엇을 의미하는가?</p>\n</li>\n<li>\n<p>값의 반환</p>\n</li>\n<li>\n<p><code>.map(&#x26;:something)</code> 은 어떻게 동작하는가?</p>\n</li>\n<li>\n<p>반복자, 그리고 여러분의 반복자를 직접 만들기</p>\n</li>\n<li>\n<p>블록을 이용하여 기본값으로 객체를 초기화하기</p>\n</li>\n<li>\n<p>루비 블록 예시</p>\n<p>​</p>\n</li>\n</ol>\n<h2 id="기초-루비-블록이란"><a href="#%EA%B8%B0%EC%B4%88-%EB%A3%A8%EB%B9%84-%EB%B8%94%EB%A1%9D%EC%9D%B4%EB%9E%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>기초: 루비 블록이란?</h2>\n<p>블록은 기본적으로 <code>do</code> 와 <code>end</code> 사이에 들어가는 코드입니다. 그게 다에요. <em>"그럼 마법같은 일(Magic)은 어디서 일어나는거죠?"</em> 라고 질문하실 수 있겠습니다. 우리는 몇 분 이내에 그 부분을 파고들겠지만 차례대로 설명하겠습니다(but first things first).</p>\n<p>여러분은 블록을 두 가지 방법으로 작성할 수 있습니다. 1. 멀티-라인으로 작성할 때는 <code>do</code> 와 <code>end</code> 사이에 코드를 작성하고, 2. 인라인으로 작성할 땐 <code>{</code> 와 <code>}</code> 사이에 코드를 작성하면 됩니다.</p>\n<p>이 두 가지 작성 방법은 정확하게 똑같이 작동합니다. 그래서 어느 방법을 고를 지는 여러분의 선택에 달려 있습니다. 일반적인 스타일 가이드에 의하면 가독성을 위해 코드가 한줄 이상 넘어가면 <code>do</code> ~ <code>end</code> 를 이용하여 작성하는 것이 좋습니다.</p>\n<p>멀티 라인 블록의 기본적인 예시는 이렇습니다: <code>[1, 2, 3].each do |n| puts "Number #{n}" end</code></p>\n<p>이 블록이 멀티 라인 블록이라 불리는 이유는 한 줄 이상으로 코드가 작성되어서가 아니고 인라인 블록이 아니기 때문입니다. 같은 예시를 인라인으로 작성할 수도 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token punctuation">{</span> <span class="token operator">|</span>n<span class="token operator">|</span> puts <span class="token string">"Number <span class="token interpolation"><span class="token delimiter tag">#{</span>n<span class="token delimiter tag">}</span></span>"</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>두 가지 버전 모두 1, 2, 3을 순서대로 출력할 겁니다. 파이프 사이에 있는 소문자 n(<code>|n|</code>)은 <strong>블록 매개변수(block parameter)</strong> 라고 불리고, 이 예시에서는 배열 안에 있는 각각의 번호가 순서대로 나오게됩니다. 그래서 처음 반복 시에 <code>n</code> 의 값은 1이 되고, 두번째 반복에서는 2가 되고 그 다음엔 3이 됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\nNumber 1\nNumber 2\nNumber 3\n => [1, 2, 3]</code></pre>\n      </div>\n<h2 id="yield가-동작하는-방법"><a href="#yield%EA%B0%80-%EB%8F%99%EC%9E%91%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>yield가 동작하는 방법</h2>\n<p>이제 위험한 녀석이 왔습니다(Here\'s bad wolf). 이 녀석이 루비 블록의 마법스러움과 혼란스러움을 가져다주는 주범이지요. 제 생각엔 대부분 <code>yield</code> 가 블록을 호출하는 방법과 어떻게 매개변수를 전달하는지가 어렵게 보일 것이라 생각합니다. 우리는 이 섹션에서 두 가지 시나리오를 모두 살펴볼겁니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">def</span> my_method\n  puts <span class="token string">"reached the top"</span>\n  <span class="token keyword">yield</span>\n  puts <span class="token string">"reached the bottom"</span>\n<span class="token keyword">end</span>\n\nmy_method <span class="token keyword">do</span>\n  puts <span class="token string">"reached yield"</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\nreached the top\nreached yield\nreached the bottom\n => nil</code></pre>\n      </div>\n<p>기본적으로 <code>my_method</code> 메서드가 실행되고 <code>yield</code> 를 호출하는 줄에 도달하면, 블록 안에 있는 코드가 실행됩니다. 그리고 블록 안의 코드가 끝나면 <code>my_method</code> 메서드가 계속 실행됩니다.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 492px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.07317073170732%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIElEQVQoz41Sy27CMBDk//+qBy4IqSpQaAQtaURImoftTWJvHCNNY7fh0ha60mjWkjU73vEM39VRB0MNuGtgVA0mib7nHxiGAbdqNjXZMcN+vUJyivDy9oj98QlRFSOWKVpucbkMAU1Do3APIoJSKnDbttBafwk652CthcgEqp0YHRoYq8HWgAeDru/gnL0KKiVhjEGe58iyDEVRoKqqcPaDZl7M1zlNsdtukagznotXRGUceF8nWH8cUGsZBIkUmDmIeAghIKUMvXd8FaScoJUep5ibmO7/ucPpArMJS9e6C0/qmX8Nxbk7oXj73vJms8JyucDDco75eoHjexoCOVEeMO3Q2v5+yv4rFHGJMi2hx0CEVlCGQNxAjtyM/F/BT16naRwsT7lHAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="2017 01 26 sc1"\n        title=""\n        src="/static/0b41e997207a170368c666aab1b250d5-806d2.png"\n        srcset="/static/0b41e997207a170368c666aab1b250d5-e0e3b.png 198w,\n/static/0b41e997207a170368c666aab1b250d5-4f7b9.png 395w,\n/static/0b41e997207a170368c666aab1b250d5-806d2.png 492w"\n        sizes="(max-width: 492px) 100vw, 492px"\n      />\n    </span>\n  </span>\n  </p>\n<h3 id="블록을-메서드로-전달하기"><a href="#%EB%B8%94%EB%A1%9D%EC%9D%84-%EB%A9%94%EC%84%9C%EB%93%9C%EB%A1%9C-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>블록을 메서드로 전달하기</h3>\n<p>블록을 매개변수로 받기 위해 메서드에 특별히 무언가를 정의할 필요는 없습니다. 그냥 블록을 함수(메서드)로 전달할 수 있습니다. 하지만 그 함수가 <code>yield</code> 를 호출하지 않으면 블록은 실행되지 않을겁니다.</p>\n<p>반면에 메서드에 <code>yield</code> 를 호출하도록 해놓으면 블록을 인자로 전달하는 것이 강제됩니다. 이 메서드가 블록을 매개변수로 받지 않는다면 에러가 발생하게 됩니다.</p>\n<p>만약 블록을 매개변수로 받는 것을 가변적으로 처리하고 싶다면 <code>block_given?</code> 메서드를 사용할 수 있습니다. 이 메서드는 블록이 메서드로 전달되었는지를 따져 true나 false를 리턴합니다.</p>\n<h3 id="yield-도-매개변수를-받는다"><a href="#yield%1C-%EB%8F%84-%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98%EB%A5%BC-%EB%B0%9B%EB%8A%94%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>yield</code> 도 매개변수를 받는다</h3>\n<p>어떠한 매개변수든지  <code>yield</code> 로 전달되면 블록의 매개변수처럼 동작할 것입니다. 그래서 블록이 실행될 때 원래 메서드로(yield를 호출하는 메서드)부터 전달되는 매개변수를 사용할 수 있습니다. 즉 매개변수는 <code>yield</code> 가 자리잡고 있는 메서드의 지역 변수가 될 수도 있다는 뜻입니다.</p>\n<p>전달되는 매개변수의 순서는 중요합니다. 왜냐면 여러분이 전달하는 매개변수의 순서가 블록이 매개변수를 전달받는 순서와 일치하기 때문입니다.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 475px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.15789473684211%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVQoz2OYP3+iILF41qwJogyEwJmmi6Y3a7IsrjcV6tytibG6U59lem7zVsEjR+byouOlSyeKA7Ww4jXwbM0N37O119zPt10xPF17xfX8hLNKp7tPq2EzcMWKKYQN3Nm2R2fRogmixOCZM3tlgFrYGMgETEDMBcQSUBoG8Luwu7uTBx0bGhoo5efn8mdkpAnExEQLJSUlCIJwTEyUENQi3MDYWENbV1dFX11d3jTIyUfvTMsFw7Mtl4zPtF7QP9dy2Rg5PKFhiB8Y6mvomzkYaGpMDTIBYb1pYfo600MNlCcHWGpOCTbRnBpsYjgjXEdlcoBFx4Jmmfb2dqnu7m7Bzs5O7Y6ODoWuri4JIFsXytZkONh43Gb58qmixOBZs3plCTkQANDMvCE6DwrTAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="2017 01 26 sc2"\n        title=""\n        src="/static/bb2e2064049183892cdc8f6790ab92a8-7203d.png"\n        srcset="/static/bb2e2064049183892cdc8f6790ab92a8-93713.png 198w,\n/static/bb2e2064049183892cdc8f6790ab92a8-ae0be.png 395w,\n/static/bb2e2064049183892cdc8f6790ab92a8-7203d.png 475w"\n        sizes="(max-width: 475px) 100vw, 475px"\n      />\n    </span>\n  </span>\n  </p>\n<p>한가지 유의하셔야 할 점은 블록 안의 매개변수는 블록에만 한정된 지역 변수가 된다는 겁니다. (메서드에 있던 지역 변수를 블록으로 전달할 때와는 다릅니다)</p>\n<h2 id="block은-무엇을-의미하는가-ampersand-parameter"><a href="#block%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%84-%EC%9D%98%EB%AF%B8%ED%95%98%EB%8A%94%EA%B0%80-ampersand-parameter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>&#x26;block은 무엇을 의미하는가? (ampersand parameter)</h2>\n<p>여러분은 아마 다른 루비 코드 여기저기에 <code>&#x26;block</code> 이 사용된 것을 보셨을 겁니다. 이 것은 지역 변수 대신에 블록에 대한 참조(reference) 자체를 메서드로 전달하는 방식입니다. 사실 <strong>루비는 블록처럼 작동하는 어떠한 객체라도 메서드에 전달되는걸 허용합니다.</strong> 메서드가 전달받은 객체가 블록이라면 이 블록을 사용하려 할 것이지만, <em>만약 블록이 아니라면 그 객체에 <code>to_proc</code> 메서드를 호출하여</em> 블록으로 변환하려고 시도할 것입니다.</p>\n<p>또 참고하셔야 할 점은 <code>block</code> 이라는 이름은(ampersend(&#x26;) 기호 이외의 부분) 단지 참조를 위한 이름일 뿐입니다. 여러분이 좋아하는 어떠한 이름이라도 사용하실 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token function">my_method</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>block<span class="token punctuation">)</span>\n  puts block\n  block<span class="token punctuation">.</span>call\n<span class="token keyword">end</span>\n\nmy_method <span class="token punctuation">{</span> puts <span class="token string">"Hello!"</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\n#<Proc:0x0000010124e5a8@tmp/example.rb:6>\nHello!</code></pre>\n      </div>\n<p>위의 예를 보시다시피, <code>my_method</code> 안에 있는 <code>block</code> 변수는 블록의 참조이고, 이 블록은 <code>call</code> 메서드를 통해 실행될 수 있습니다. 블록에 <code>call</code> 을 하는 것은 <code>yield</code> 와 똑같은 겁니다. 일부 사람들은 가독성을 위해 <code>yield</code> 대신에 <code>block.call</code> 을 사용합니다.</p>\n<h2 id="값의-반환"><a href="#%EA%B0%92%EC%9D%98-%EB%B0%98%ED%99%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>값의 반환</h2>\n<p><code>yield</code> 는 블록 안에서 마지막으로 평가된 값(last evaluated expression)이 반환됩니다. 달리 말하면 <code>yield</code> 가 리턴하는 값은 블록이 리턴하는 값이라는 겁니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">def</span> my_method\n  value <span class="token operator">=</span> <span class="token keyword">yield</span>\n  puts <span class="token string">"value is: <span class="token interpolation"><span class="token delimiter tag">#{</span>value<span class="token delimiter tag">}</span></span>"</span>\n<span class="token keyword">end</span>\n\nmy_method <span class="token keyword">do</span>\n  <span class="token number">2</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\nvalue is 2\n=> nil</code></pre>\n      </div>\n<h2 id="mapsomething은-어떻게-동작하는가"><a href="#mapsomething%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%98%EB%8A%94%EA%B0%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.map(&#x26;:something)은 어떻게 동작하는가?</h2>\n<p>여러분은 아마 <code>.map(&#x26;:capitalize)</code> 같은 단축 표현을 많이 쓰셨을 겁니다. 특히 레일즈로 코딩을 좀 해보셨다면 말이죠.  <code>.map { |title| title.capitalize }</code> 에 비하면 아주 깔끔한 단축 표현입니다.</p>\n<p><strong>그런데 이게 어떻게 작동하는걸까요?</strong></p>\n<p>실제로는 <a href="http://ruby-doc.org/core-2.2.0/Symbol.html#method-i-to_proc">심볼 클래스가</a> <code>to_proc</code> 을 메서드를 구현하고 있기 때문에, 단축 표현을 풀어서 실제의 긴 표현식으로 변환해주는 겁니다. 멋지죠?</p>\n<h2 id="반복자-그리고-여러분의-반복자를-직접-만들기"><a href="#%EB%B0%98%EB%B3%B5%EC%9E%90-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%97%AC%EB%9F%AC%EB%B6%84%EC%9D%98-%EB%B0%98%EB%B3%B5%EC%9E%90%EB%A5%BC-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>반복자, 그리고 여러분의 반복자를 직접 만들기</h2>\n<p>여러분은 메서드 안에 있는 <code>yield</code> 를 원하시는 대로 몇번이든 부를 수 있습니다. 그게 기본적으로 반복자(iterator)가 동작하는 원리입니다. <code>yield</code> 를 배열 안에 있는 각 요소마다 호출하면 루비에서 기본적으로 제공하는 반복자를 흉내낼 수 있습니다.</p>\n<p>루비의 <code>map</code> 메서드와 비슷한 메서드를 작성하는 방법을 보여드리겠습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token function">my_map</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>\n  new_array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n  <span class="token keyword">for</span> element <span class="token keyword">in</span> array\n    new_array<span class="token punctuation">.</span>push <span class="token keyword">yield</span> element\n  <span class="token keyword">end</span>\n\n  new_array\n<span class="token keyword">end</span>\n\n<span class="token function">my_map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>number<span class="token operator">|</span>\n  number <span class="token operator">*</span> <span class="token number">2</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\n[2, 4, 6]</code></pre>\n      </div>\n<h2 id="블록을-이용하여-객체를-기본값과-함께-초기화하기"><a href="#%EB%B8%94%EB%A1%9D%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B0%9D%EC%B2%B4%EB%A5%BC-%EA%B8%B0%EB%B3%B8%EA%B0%92%EA%B3%BC-%ED%95%A8%EA%BB%98-%EC%B4%88%EA%B8%B0%ED%99%94%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>블록을 이용하여 객체를 기본값과 함께 초기화하기</h2>\n<p>루비 블록을 사용할 수 있는 멋진 패턴 중 하나는 객체를 기본값과 함께 초기화하는 것입니다. 한번이라도 아무 루비 젬에서나 <code>.gemspec</code> 파일을 살펴보았을 때 이 패턴을 보셨을겁니다.</p>\n<p>작동하는 원리는 이렇습니다. <code>initialize</code> 메서드 안에 <code>yield(self)</code> 를 호출하는 초기화 도구(initializer)를 넣어두는 겁니다. 여기서 <code>self</code> 는 초기화되는 객체 자신입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">Car</span>\n  attr_accessor <span class="token symbol">:color</span><span class="token punctuation">,</span> <span class="token symbol">:doors</span>\n\n  <span class="token keyword">def</span> initialize\n    <span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n\ncar <span class="token operator">=</span> <span class="token constant">Car</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">do</span> <span class="token operator">|</span>c<span class="token operator">|</span>\n  c<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"red"</span>\n  c<span class="token punctuation">.</span>doors <span class="token operator">=</span> <span class="token number">4</span>\n<span class="token keyword">end</span>\n\nputs <span class="token string">"My car\'s color is <span class="token interpolation"><span class="token delimiter tag">#{</span>car<span class="token punctuation">.</span>color<span class="token delimiter tag">}</span></span> and it\'s got <span class="token interpolation"><span class="token delimiter tag">#{</span>car<span class="token punctuation">.</span>doors<span class="token delimiter tag">}</span></span> doors."</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\nMy car\'s color is Red and it\'s got 4 doors.</code></pre>\n      </div>\n<h2 id="루비-블록-예시"><a href="#%EB%A3%A8%EB%B9%84-%EB%B8%94%EB%A1%9D-%EC%98%88%EC%8B%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>루비 블록 예시</h2>\n<p>요즘은 예시로 보여주는게 대세(all the rage these days)인만큼 실제 세계에서(혹은 실제 세계와 최대한 가까운) 블록을 사용하는 몇가지 흥미로운 시나리오를 보여드리겠습니다.</p>\n<h3 id="텍스트를-html-태그로-감싸기"><a href="#%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC-html-%ED%83%9C%EA%B7%B8%EB%A1%9C-%EA%B0%90%EC%8B%B8%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>텍스트를 HTML 태그로 감싸기</h3>\n<p>여러분이 다양한 코드 덩어리를 약간의 고정된 코드로 감싸고자 할 때 블록은 최고의 도구입니다. 예를 들자면 여러분이 어떤 텍스트를 감싸고 있는 HTML 태그를 만들고자 한다면, 텍스트는 가변적이고(왜냐면 아직 당신은 무엇을 태그로 감쌀지 전혀 모르니까요) 태그는 고정적인 부분입니다. 이 형태는 변하지 않습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">def</span> wrap_in_h1\n  <span class="token string">"&lt;h1><span class="token interpolation"><span class="token delimiter tag">#{</span><span class="token keyword">yield</span><span class="token delimiter tag">}</span></span>&lt;/h1>"</span>\n<span class="token keyword">end</span>\n\nwrap_in_h1 <span class="token punctuation">{</span> <span class="token string">"Here\'s my heading"</span> <span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true"># => "&lt;h1>Here\'s my heading&lt;/h1>"</span>\n\nwrap_in_h1 <span class="token punctuation">{</span> <span class="token string">"Ha"</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true"># => "&lt;h1>HaHaHa&lt;/h1>"</span>\n</code></pre>\n      </div>\n<p>메서드에 블록을 넘기는 방법은 여러분이 특정 행동을 재사용하고 싶지만 살짝 다르게 쓰고 싶을 때 유용하다는 점을 알아두시기 바랍니다. 이번엔 우리가 HTML 태그로 감싸고 싶은 문자열이 있고, 이걸 조금 다른 용도로 사용하는 경우를 봅시다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">def</span> <span class="token function">wrap_in_tags</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> text<span class="token punctuation">)</span>\n  html <span class="token operator">=</span> <span class="token string">"&lt;<span class="token interpolation"><span class="token delimiter tag">#{</span>tag<span class="token delimiter tag">}</span></span>><span class="token interpolation"><span class="token delimiter tag">#{</span>text<span class="token delimiter tag">}</span></span>&lt;/<span class="token interpolation"><span class="token delimiter tag">#{</span>tag<span class="token delimiter tag">}</span></span>>"</span>\n  <span class="token keyword">yield</span> html\n<span class="token keyword">end</span>\n\n<span class="token function">wrap_in_tags</span><span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">|</span>html<span class="token operator">|</span> <span class="token constant">Mailer</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span> <span class="token punctuation">}</span>\n<span class="token function">wrap_in_tags</span><span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">|</span>html<span class="token operator">|</span> <span class="token constant">Page</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token symbol">:body</span> <span class="token operator">=</span><span class="token operator">></span> html<span class="token punctuation">)</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>첫 번째 경우에는 <code>&#x3C;title>Hello&#x3C;/title></code> 이라는 문자열을 이메일로 보냈고, 두 번째 경우에는 <code>Page</code>  레코드를 만듭니다. 두 경우 모두 같은 메서드를 사용했지만 다른 일을 했습니다.</p>\n<h3 id="노트-작성하기"><a href="#%EB%85%B8%ED%8A%B8-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>노트 작성하기</h3>\n<p>우리가 생각(아이디어)을 데이터베이스 테이블로 저장하는 방법을 빠르게 개발한다고 생각해보겠습니다. 이 도구가 바르게 작동하려면 우리는 노트의 내용을 전달하고 메서드가 데이터베이스 연결을 다루도록 해야 합니다. 이상적으로 우리는 <code>Note.create { "Nice day today" }</code> 라고 호출하고 나면 데이터베이스 연결을 열고 닫는데 일일이 신경 쓰고 싶지 않을 것입니다. 그럼 한번 보시죠.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">Note</span>\n  attr_accessor <span class="token symbol">:note</span>\n\n  <span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>note<span class="token operator">=</span><span class="token keyword">nil</span><span class="token punctuation">)</span>\n    <span class="token variable">@note</span> <span class="token operator">=</span> note\n    puts <span class="token string">"@note is <span class="token interpolation"><span class="token delimiter tag">#{</span>@note<span class="token delimiter tag">}</span></span>"</span>\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">def</span> <span class="token keyword">self</span><span class="token punctuation">.</span>create\n    <span class="token keyword">self</span><span class="token punctuation">.</span>connect\n    note <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token keyword">yield</span><span class="token punctuation">)</span>\n    note<span class="token punctuation">.</span>write\n    <span class="token keyword">self</span><span class="token punctuation">.</span>disconnect\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">def</span> write\n    puts <span class="token string">"Writing \\"<span class="token interpolation"><span class="token delimiter tag">#{</span>@note<span class="token delimiter tag">}</span></span>\\" to the database."</span>\n  <span class="token keyword">end</span>\n\nprivate\n\n  <span class="token keyword">def</span> <span class="token keyword">self</span><span class="token punctuation">.</span>connect\n    puts <span class="token string">"Connecting to the database..."</span>\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">def</span> <span class="token keyword">self</span><span class="token punctuation">.</span>disconnect\n    puts <span class="token string">"Disconnecting from the database..."</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n\n<span class="token constant">Note</span><span class="token punctuation">.</span>create <span class="token punctuation">{</span> <span class="token string">"Foo"</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\nConnecting to the database...\n@note is Foo\nWriting "Foo" to the database.\nDisconnecting from the database...</code></pre>\n      </div>\n<p>데이터베이스 연결, 노트 작성, 그리고 연결을 종료하는 기능의 구체적인 구현은 이 글에서 다루는 범위를 넘어가는 것이라 설명하지 않겠습니다.</p>\n<h3 id="배열에서-나눌-수-있는divisible-요소를-찾기"><a href="#%EB%B0%B0%EC%97%B4%EC%97%90%EC%84%9C-%EB%82%98%EB%88%8C-%EC%88%98-%EC%9E%88%EB%8A%94divisible-%EC%9A%94%EC%86%8C%EB%A5%BC-%EC%B0%BE%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>배열에서 나눌 수 있는(divisible) 요소를 찾기</h3>\n<p>제가 점점 "실제 시나리오" 와 멀어진 설명을 하고 있는 것 같습니다만, 마지막 예시를 보여드리도록 하겠습니다. 만약 배열 안에 있는 모든 요소 중에서 3으로 나뉘는 요소를 가져온다고 할 때(어떤 숫자를 생각하셔도 상관없습니다), 루비 블록을 어떻게 활용할 수 있을까요?</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">Fixnum</span>\n  <span class="token keyword">def</span> to_proc\n    <span class="token builtin">Proc</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">do</span> <span class="token operator">|</span>obj<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token operator">|</span>\n      obj <span class="token operator">%</span> <span class="token keyword">self</span> <span class="token operator">==</span> <span class="token number">0</span>\n    <span class="token keyword">end</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n\nnumbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token number">3</span><span class="token punctuation">)</span>\nputs numbers\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># 결과\n3\n6\n9</code></pre>\n      </div>\n<p>역주: 위의 코드를 간략하게 설명하자면, 글 위에 <code>&#x26;block</code> 을 설명한 부분에서 <code>&#x26;</code> 기호 뒤에 붙어있는 객체가 블록이 아니라면 <code>to_proc</code> 으로 블록으로 변환하는 것을 시도한다는 내용이 있습니다. 그래서 <a href="https://en.wikipedia.org/wiki/Monkey_patch">몽키 패칭</a>으로 <code>Fixnum</code> 클래스에 <code>to_proc</code> 메서드를 정의해 두는 겁니다. 3이라는 숫자는 <code>Fixnum</code> 클래스의 객체이기 때문입니다. (루비 2.4.0부터는 Integer 클래스에 속합니다.) 실제로 변환된 블록은 다음의 형태를 가지고 있을 겁니다. <code>*args</code> 는 옵션입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span>select <span class="token keyword">do</span> <span class="token operator">|</span>n<span class="token operator">|</span>\n  n <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<h2 id="결론"><a href="#%EA%B2%B0%EB%A1%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>결론</h2>\n<p>블록은 단순히 <strong>코드 덩어리</strong>라고 볼 수 있고, <code>yield</code> 는 메서드 어딘가에 그 코드를 <em>주입</em>할 수 있도록 만들어줍니다. 말인 즉슨 여러분은 한 가지 메서드를 다양한 방법으로 조작할 수 있다는 뜻입니다. 그래서 여러 메서드를 작성할 필요가 없어지게 됩니다. (한 메서드를 재사용하여 여러 가지를 할 수 있다는 겁니다.)</p>\n<p>수고하셨습니다! 이 포스트를 통해 여러분은 루비 블록을 더 유용하게 활용하는 방법을 익히셨을 겁니다. 만약 여전히 혼란스러운 부분이 있거나 이 글에서 뭔가 놓친 부분이 있다면 <a href="https://mixandgo.com/blog/mastering-ruby-blocks-in-less-than-5-minutes">댓글을 남겨주세요</a>.</p>\n<p>또는 루비 블록에 대해 새로 배운게 있다면 이 글을 공유해주세요.</p>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>회사에서 개발을 하면서 필요한 기능에 맞추어 메서드를 만들다가 무언가 반복되는 부분이 발견되었습니다. 처음엔 메서드를 쪼개서 한 메서드를 여러 메서드가 공유하는 방식으로 사용했었는데, 생각해보니 그렇게까지 할 것도 없더군요. 분명 머리속엔 <code>yield</code> 라는 게 있다고 기억은 하고 있었는데.. 자세한 용도를 다시 살펴보고자 검색을 하니 이 포스팅을 발견하였고, 내용이 너무 좋아서 바로 번역을 해도 되겠냐고 저자에게 물었습니다. 하지만 실제 번역된 결과물을 내기까지 생각보다 시간이 걸렸습니다.</p>\n<p>포스팅에 작성 된 예제 말고도 <a href="https://ko.wikipedia.org/wiki/%EB%A9%94%ED%83%80_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D">메타프로그래밍</a> 등 블록이 사용될 수 있는 부분은 무궁무진하게 많습니다. 이 글을 시작으로 간단하게 블록을 사용하여 이미 작성한 메서드를 개량하는 것부터 시작해보시는게 어떨까요?</p>\n<p>여담이지만 아직까지는 번역을 하면서 존대어를 쓰는 번역도 있고 경어를 쓰는 번역도 있습니다. 제 자신도 실력이 부족하고, 표현에 대해서 큰 고민을 하지 않고 의미 전달에만 초점을 두다 보니 이런 뒤죽박죽인 결과가 나왔네요. 번역 퀄리티가 점점 더 발전할 수 있도록 노력하겠습니다. 물론 좋은 글들을 흡수하여 제 자신이 더 좋은 코드를 작성하는 것도 신경 써야겠지요 :)</p>',
frontmatter:{date:"2017/01/26",path:"/posts/mastering-ruby-blocks-in-less-than-5minutes-kor",title:"[번역] 루비 블록을 5분 이내에 마스터하기",tags:["Ruby"]}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-mastering-ruby-blocks-in-less-than-5-minutes-kor-68393fe14c57fb0afcb7.js.map