webpackJsonp([0xe0dd3d77314],{"./node_modules/json-loader/index.js!./.cache/json/posts-isolate-global-state-kor.json":function(n,s){n.exports={data:{markdownRemark:{html:'<ul>\n<li><strong>본 포스트는 <a href="https://lucaguidi.com/2016/12/27/isolate-global-state.html">Luca Guidi의 포스팅을</a> 번역한 글입니다</strong></li>\n<li><strong>문제를 설명하는데 나온 하나미(Hanami)에 대해서는 <a href="https://emaren84.github.io/blog/archivers/hanami-introduction">이 포스팅</a>을 참조해주세요</strong></li>\n<li><strong>전문 번역이 아니기에 부족한 표현이나 오역은 언제든지 지적해주세요</strong></li>\n</ul>\n<hr>\n<p>소프트웨어 프로그램에서 전역 상태를 사용하는건 개발하기엔 쉽지만 유지보수 할 때는 악몽이 된다. 예상치 못한 상황에서 발생하여 추적하기도 어려운 버그가 되기 쉽상이다.</p>\n<p>왜 그렇게 되는지, 그리고 어떻게 그 문제를 완화할 수 있을지 살펴보자.</p>\n<p><em>역주: 이 글에서 전역 상태는 전역 변수와 거의 동일한 의미로 사용되는 것으로 추정됩니다.</em></p>\n<h2>문제의 예시</h2>\n<p>예를 들자면 하나미의 코드 베이스 안에서 우리는 환경 변수에 따라 어떻게 프레임워크가 설정되는지 테스트 할 필요가 있다.</p>\n<p>우리<em>(역주: 하나미 개발팀으로 보입니다)</em>는 보통 테스트를 이런 식으로 작성한다:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token constant">RSpec</span><span class="token punctuation">.</span>describe <span class="token constant">Hanami</span><span class="token punctuation">:</span><span class="token symbol">:Environment</span> <span class="token keyword">do</span>\n  before <span class="token keyword">do</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_ENV\'</span><span class="token punctuation">]</span>  <span class="token operator">=</span> <span class="token keyword">nil</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'RACK_ENV\'</span><span class="token punctuation">]</span>    <span class="token operator">=</span> <span class="token keyword">nil</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_HOST\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">nil</span>\n    <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_PORT\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">nil</span>\n\n    <span class="token comment" spellcheck="true"># ...</span>\n  <span class="token keyword">end</span>\n\n  context <span class="token string">"when HANAMI_ENV is set"</span> <span class="token keyword">do</span>\n    before <span class="token keyword">do</span>\n      <span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">\'HANAMI_ENV\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'production\'</span>\n      <span class="token variable">@env</span> <span class="token operator">=</span> described_class<span class="token punctuation">.</span><span class="token keyword">new</span>\n    <span class="token class-name">end</span>\n\n    <span class="token comment" spellcheck="true"># ...</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>우리는 보통 각각의 테스트를 실행하기 전에 모든 환경 변수를 초기화해왔다. 그리고 우리가 필요로 하는 특별한 상황(the edge case)에서만 하나씩 설정했다.</p>\n<p>이러한 접근 방식을 사용할 때의 <strong>문제는</strong> 이 방법이 루비 프로세스의 전역 상태를 <strong>더럽힌다는</strong> 것이다. 우리가 테스트 파일을 단독으로 실행할 때는  <code>before</code> 블록이 환경 변수를 리셋하기 때문에 잘 작동한다.</p>\n<p>그러나 모든 테스트를 한번에 실행할 때, 테스트는 꼬이게 될 것이다. 환경 변수 초기화가 언제나 작동하진 않기 때문이다.</p>\n<p>만약 한 테스트가 <code>ENV</code> 속성을 변환하고 나서 뒷정리를 하지 않으면, 그 다음 테스트는 기존의 <code>ENV</code> 값의 변화를 <strong>물려받아서</strong> 우리가 기대하던대로 작동하지 않을 수 있다.</p>\n<p>때때로 위의 예시 처럼 눈에 띄는 부분에서 변화를 준 경우에는 우리가 <code>after</code> 블록을 설정하여 뒷정리를 할 수 있다. 그러나 다른 때엔 변환한 것(the mutation)이 우리 눈에 보이지 않는 부분에서 부작용을 초래할 수 있다.</p>\n<p>이건 소스의 버그다. 그리고 이 버그는 엉킨 실타래처럼 되어 디버그하기 힘들다.</p>\n<p><strong>오랜 시간동안, 여러 가지 전역 상태의 조합하는 것은 하나미를 지속적 통합 개발(<a href="https://ko.wikipedia.org/wiki/%EC%A7%80%EC%86%8D%EC%A0%81_%ED%86%B5%ED%95%A9">CI builds</a>)이 힘들도록 만들고 여러 버그를 일으켰다.</strong></p>\n<p>개발자로서의 내 경험으로 미루어보아(<em>역주: Luca Guidi는 숙련된 웹 개발자입니다</em>) 이런 형태의 문제를 완화할 수 있는 유일한 방법은 <strong>전역 상태를 격리하거나, 전역 상태를 사용하는 것을 아예 피하는 것이다.</strong> 우리는 <strong>가능한한 전역 상태를 사용하는 것을 줄이도록</strong> 하나미의 내부 구현을 바꾸고 있다.</p>\n<h2>문제의 해법</h2>\n<p>앞서 이야기한 특별한 경우를 위해 우리는 환경 변수를 격리할 수 있는 새로운 객체를 선보였다. 이는 <code>Hanami::Env</code> 라고 불린다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">module</span> <span class="token constant">Hanami</span>\n  <span class="token keyword">class</span> <span class="token class-name">Env</span>\n    <span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>env<span class="token punctuation">:</span> <span class="token constant">ENV</span><span class="token punctuation">)</span>\n      <span class="token variable">@env</span> <span class="token operator">=</span> env\n    <span class="token keyword">end</span>\n\n    <span class="token keyword">def</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n      <span class="token variable">@env</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    <span class="token keyword">end</span>\n\n    <span class="token keyword">def</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token variable">@env</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token keyword">end</span>\n\n    <span class="token comment" spellcheck="true"># ...</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>구현 자체는 별 것 아니다: <code>ENV</code> 에 접근하는 것을 캡슐화하는 것이다.</p>\n<p>우리는 환경 변수를 관리하기 위해 자체 인터페이스를 정의했다. 우리는 명시적인 구현(concrete implementation)을 사용하기보다(<code>ENV</code>) 추상화(<code>Hanami::Env</code>)에 의존하고 있다(<a href="https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EA%B4%80%EA%B3%84_%EC%97%AD%EC%A0%84_%EC%9B%90%EC%B9%99">의존관계 역전 원칙 참고</a>). </p>\n<p><code>Hanami::Environment</code> 는 프로젝트의 환경 변수를 설정하는 책임을 가지고 있는데, 우리는 이런 방식으로 사용한다:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">module</span> <span class="token constant">Hanami</span>\n  <span class="token keyword">class</span> <span class="token class-name">Environment</span>\n    <span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n      opts <span class="token operator">=</span> options<span class="token punctuation">.</span>to_h<span class="token punctuation">.</span>dup\n      <span class="token variable">@env</span> <span class="token operator">=</span> <span class="token constant">Hanami</span><span class="token punctuation">:</span><span class="token symbol">:Env</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>env<span class="token punctuation">:</span> opts<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token symbol">:env</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token constant">ENV</span><span class="token punctuation">)</span>\n\n      <span class="token comment" spellcheck="true"># ...</span>\n    <span class="token keyword">end</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>우리가 하나미 프로젝트를 사용할 때, <code>:env</code> 옵션은 설정되지 않은 상태이다. 이로 인해 <code>@env</code> 는 <code>ENV</code> 를 참조하여 루비 프로세스의 진짜 환경 변수를 읽거나 쓰게 된다.</p>\n<p>이렇게 우리는 <code>Hanami::Environment</code> 의 테스트 중에 많은 양의 코드를 단순화하고, <strong>공유되고 변화 가능한 상태(shared mutable state, 즉 <code>ENV</code> 말이다)의 사용을 피할 수 있었다.</strong> 아래 코드에서 우리는 <code>ENV</code> 와 유사하게 동작하는 <code>:env</code> 를 객체의 옵션으로 전달하지만, 이 것은 실제로 <code>ENV</code>가 아니다: 그냥 <code>Hash</code> 이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token constant">RSpec</span><span class="token punctuation">.</span>describe <span class="token constant">Hanami</span><span class="token punctuation">:</span><span class="token symbol">:Environment</span> <span class="token keyword">do</span>\n  context <span class="token string">"when HANAMI_ENV is set"</span> <span class="token keyword">do</span>\n    <span class="token function">let</span><span class="token punctuation">(</span><span class="token symbol">:env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token builtin">Hash</span><span class="token punctuation">[</span><span class="token string">"HANAMI_ENV"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"production"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n\n    it <span class="token string">"tests something interesting"</span>\n      <span class="token variable">@env</span> <span class="token operator">=</span> described_class<span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>env<span class="token punctuation">:</span> env<span class="token punctuation">)</span>  \n    <span class="token keyword">end</span>\n\n    <span class="token comment" spellcheck="true"># ...</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<h2>결론</h2>\n<p><a href="https://ko.wikipedia.org/wiki/%EC%BA%A1%EC%8A%90%ED%99%94">캡슐화</a>와 <a href="http://solnic.eu/2013/12/17/the-world-needs-another-post-about-dependency-injection-in-ruby.html">의존성 주입</a>을 적절하게 사용하여, 각각의 테스트에서 발생할 수 있는 변화는 나머지 테스트에서는 보이지 않게 되었다. 결과적으로 안정적인 테스트 수행을 할 수 있게 되었고, 하나미 내부를 <a href="https://ko.wikipedia.org/wiki/SOLID">SOLID 디자인</a>에 맞게 구성할 수 있었다. </p>\n<hr>\n<h2>번역 후기</h2>\n<p>보통 루비 프로젝트에서 <code>dotenv</code> 같은 젬으로 환경 변수를 관리합니다. 사실 이 환경 변수라는 개념도 저에게 아직 모호한 개념이지만, 객체지향 프로그래밍의 핵심적인 주제인 캡슐화와 의존성 주입을 어떤 식으로 활용하는지 좋은 예를 보여준 것 같아 한번 번역해보게 되었습니다.</p>\n<p>특히 제가 요즘에야 테스트를 작성해보기 시작했는데, 테스트를 개별로 실행할 때는 몰라도 전체 테스트를 실행할 때 원인을 알 수 없는 오류가 생길 때가 종종 있었습니다. 이 글을 통해 약간의 힌트를 얻었다는 생각도 듭니다. </p>',frontmatter:{date:"2016/12/30",path:"/posts/isolate-global-state-kor",title:"[번역] 전역 상태를 격리하라"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-isolate-global-state-kor-35c0109931c76244da13.js.map