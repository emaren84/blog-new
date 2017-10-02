webpackJsonp([25713588976102],{"./node_modules/json-loader/index.js!./.cache/json/posts-the-penguin-that-cannot-fly-kor.json":function(n,s){n.exports={data:{markdownRemark:{html:'<ul>\n<li><strong>이 포스팅은 <a href="https://lucaguidi.com/2016/06/07/the-penguin-that-cannot-fly.html">Luca Guidi의 포스팅</a>을 번역한 글입니다</strong></li>\n<li><strong>오역이나 잘못된 표현 지적은 언제나 환영합니다</strong></li>\n</ul>\n<hr>\n<h2 id="객체-지향-프로그래밍-인터페이스-동적-타입에-대한-짧은-이야기"><a href="#%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%8F%99%EC%A0%81-%ED%83%80%EC%9E%85%EC%97%90-%EB%8C%80%ED%95%9C-%EC%A7%A7%EC%9D%80-%EC%9D%B4%EC%95%BC%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>객체 지향 프로그래밍, 인터페이스, 동적 타입에 대한 짧은 이야기</h2>\n<p><em>역주: 이 글은 가상의 이야기를 기반으로 객체 지향의 개념을 일부 짚어주는 글입니다 \'루비 3\'는 아직 개발 중이며, 어떤 형태로 나오게 될 지 모릅니다.</em></p>\n<p>오늘은 주식회사 활빈당(Spectacular Foo Ltd. <em>역주: 보통 임의의 사람 이름을 홍길동이라고 하다 보니 임의의 회사 이름은 무엇으로 할까 하다가...</em>)의 본사에서 일어나는 일을 이야기해보고자 한다. 이 회사는 인디 게임계에서 떠오르고 있는 회사이고, 다음 블록버스터 타이틀인 <em>흔해빠진 새들(Banal Birds)</em> 의 발매를 앞두고 있다.</p>\n<p>올해는 2019년이고, 루비 3는 세배나 빠르고, 놀랍게도 모든 문제를 해결할 수 있는 동적 타입을 가지고 있다! 조금 향수에 젖은 결정이긴 하지만 당신은 리드 개발자로서 루비를 이 프로젝트에 사용하기로 결정했다.</p>\n<p>당신은 관리자인 제인에게 최종 코드 리뷰를 부탁했다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">Game</span>\n  <span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>bird<span class="token punctuation">:</span> <span class="token constant">Bird</span><span class="token punctuation">)</span>\n    <span class="token variable">@bird</span> <span class="token operator">=</span> bird\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">def</span> play\n    <span class="token variable">@bird</span><span class="token punctuation">.</span>fly\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>아이디어는 간단하지만 혁명적이었다: 플레이어는 <strong>어떤</strong> 종류의 새라도 고를 수 있고 그 새가 날아가는 것을 볼 수 있다. 이건 엄청날거야!(This is gonna be kickass!)</p>\n<p>당신은 유명한 루비 젬 <code>acts_as_a_bird</code>(새처럼 행동하라)를 재사용했다. 이 젬은 <code>Bird</code> 를 완벽하게 구현하였다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">Bird</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>많은 새들 가운데서 우리는 올빼미나 벌새도 구현했다:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">Owl</span> <span class="token operator">&lt;</span> <span class="token constant">Bird</span>\n  <span class="token keyword">def</span> fly\n    puts <span class="token string">"I\'m a flying owl"</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Hummingbird</span> <span class="token operator">&lt;</span> <span class="token constant">Bird</span>\n  <span class="token keyword">def</span> fly\n    puts <span class="token string">"I\'m a flying hummingbird"</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>소프트웨어 공학의 참으로 놀라운 부분 아닌가? 글쎄, 이 게임에 엄청난 투자를 했음에도 불구하고 문제가 하나 남아있었다: 제인이 \'그러면 펭귄은요?\' 라고 물었다. 그렇다, 펭귄은 새지만 날 수 없다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">Penguin</span> <span class="token operator">&lt;</span> <span class="token constant">Bird</span>\n  <span class="token comment" spellcheck="true"># LOL I\'m a penguin (ㅋㅋㅋ 난 펭귄인데?)</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>오늘은 게임 발매 당일이고 당신은 버그를 수정하기 위한 여력이 없다. 그래도 발매는 되어야 한다(The show must go on). 그래서 당신은 게임을 발매하고 사용자들이 펭귄을 고르지 않기를 기도할 수 밖에 없다.</p>\n<p>당신은 기분이 별로다. 그리고 자기 자신에게 묻기 시작한다: <em>왜 내가 루비를 골랐지? 왜 동적 타입을 쓴걸까?</em></p>\n<p>제인은 "당신이 정말 사용해야 했던 것은 타입이 아니라 인터페이스에요." 라고 말했다. 당신은 그 말을 듣자마자 "맙소사, 자바 말인가요!?(OMG, Java!)"  라고 말했지만, 그녀는 찬찬히 시간을 들여 그 개념은 <a href="http://golangtutorials.blogspot.kr/2011/06/interfaces-in-go.html">Go(GoLang)</a>에서 빌려온 것이라고 설명하였다.</p>\n<blockquote>\n<p>"루비같이 동적 타입을 가지고 있는 언어에서, 당신이 정말 신경써야 하는 것은 <strong>행동(behavior)</strong>이에요. 당신은 객체에 <em>메세지를 보낼 수 있도록</em> 해야합니다. 그게 객체 지향 프로그래밍의 핵심이에요."</p>\n</blockquote>\n<p>그녀는 계속 설명했다: "타입을 사용하는 것은, 당신이 수행하고자 하는 일보다 과하게 많은 일을 수행하려는 객체를 받아들인다는 것과 같아요. 그리고 그건 <a href="https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4_%EB%B6%84%EB%A6%AC_%EC%9B%90%EC%B9%99">인터페이스 분리 원칙</a>을 무너뜨립니다."</p>\n<blockquote>\n<p>"차이점은 미묘해요: 당신은 <code>Bird</code> 클래스가 <code>fly</code> 메서드에 반응할 것이라(respond to) 추측했지요. 하지만 언제나 그렇진 않아요. 대신 프로그래밍 언어 측에서<em>(역주: 문맥 상 프로그래머가 작성한 코드를 말하는 것으로 보입니다)</em> 주어진 객체가 특정 메서드(혹은 메서드의 모음)를 구현하고 있는 지 확인하는 도구를 제공해야 합니다."</p>\n</blockquote>\n<p>이 시점에서 당신은 충격을 받았다. 당신은 루비가 행동의 모음을 정의할 수 있는 특별한 모듈을 제공했으면 정말 좋겠다고 생각했다<em>(역주: wished라는 동사를 사용했지만 문맥상 희망하다라고 쓰기엔 딱딱해 보입니다)</em>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>interface <span class="token class-name">Flying</span>\n  <span class="token keyword">def</span> fly\n    puts <span class="token string">"I\'m a flying <span class="token interpolation"><span class="token delimiter tag">#{</span> name <span class="token delimiter tag">}</span></span>"</span>\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">def</span> name\n    <span class="token string">"bird"</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Falcon</span>\n  include <span class="token constant">Flying</span>\n\n  <span class="token keyword">def</span> name\n    <span class="token string">"falcon"</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Game</span>\n  <span class="token keyword">def</span> <span class="token function">initialize</span><span class="token punctuation">(</span>bird<span class="token punctuation">:</span> <span class="token constant">Flying</span><span class="token punctuation">)</span>\n    <span class="token variable">@bird</span> <span class="token operator">=</span> bird\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">def</span> play\n    <span class="token variable">@bird</span><span class="token punctuation">.</span>fly\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>또한 가상머신(VM)이 \'펭귄은 날 수 없다\' 같은 당황스러운 에러를 내뿜기 전에 당신을 막아주었으면 좋겠다고 생각했다. </p>\n<hr>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>예전에 RORLAB 슬랙의 질문 채널에서 이런 내용의 대화를 주고받은 적이 있습니다.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 544px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 87.86764705882352%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACoklEQVQ4y51USa7TQBT8N+ISnII7sGHDgg1ixwI2XIILfCEhJAQ7Fh9+QElsx4lndybHYzwlzuPVSxwIYQORWt3pobqqXrVvtmVLb9/dk6viL0T0Bm2/37dVVRP39K+/m6wo6emL16RbKpzNZne+H9x5ntfpukGu61IYhrRYLInnpGHOdhwZHw6Ha8B+kCQpRVHEAIosy6IgCBhoQb7v03w+J497h4Ewl2UZA/pyEfZ7smdB2+32F2BVVbIJYEVRiNyu66QHkz/7rjvQbrc7/+/bGRAguA3MIJOlS79crmS82WxkLeA5MFVKiarlcin7giAUjAtAHLpk0Z1vxg+M2rY9z2G937M/9TeK0V89f0LDH19pMjGprhv2ovyvCktRIOPls8c0uP9G0+mMVqujRJgMC0xzKnIgTam5+IwzqHLIslE0FGe1Wh8lg2bTNFK5vqrwZDazpLo4jKgArI8PwHHmrwwNQ6dHDx/Q54/vaTAYUBzHDJ5L1RGDuq5px741TSvjsixlDYAFr5dlJczwXzwEs08fbqVy47EmDBBqDjkNhyO2gSXbHGqbA23b1Ace4Xa4BwFUHGm4iA1uh+Q0TmQxSRJac9DTNJUxvI2ijdgga+u1rOEc2PUWnAGxiFtDl03nZtsOmcwOrKypRcoPJfSappNhGNJPWYVhTMTfPM8vAeGbzhtRudFozNU15SCkmxwn13Kk4kgCbNB0XS6AKmTz6i2DMmJSZgUVm5RyvgDepGlGZVqIRBxGPGAJvFuvI4kXHsQ1IH+u1NSh2JuT/n1Irn1kBMk+FwTZHGuasMIcmKKQKBIYw1/I/u3pbcUX+HH8ZC1OQfakRwMzvKC+9R8PPMmrjwOyheD2IACFLARbnV4Exqg2YoM9yGSeF/Jc+99PtUBNJ1KbsKwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="slack_conversation"\n        title=""\n        src="/static/a13427f93ee2f60a5107ed26df13cfdc-959a9.png"\n        srcset="/static/a13427f93ee2f60a5107ed26df13cfdc-5510e.png 198w,\n/static/a13427f93ee2f60a5107ed26df13cfdc-f5670.png 395w,\n/static/a13427f93ee2f60a5107ed26df13cfdc-959a9.png 544w"\n        sizes="(max-width: 544px) 100vw, 544px"\n      />\n    </span>\n  </span>\n  </p>\n<p>마침 이 글을 읽은 직후라 비유를 <code>fly</code> 로 사용했었던 것이 기억나네요. 보통 동적 타입을 사용하는 언어들의 단점으로 여러가지가 거론되지만 \'실행하기 전에는 무슨 일이 일어날 지 바로 알 수 없다\' 라는 단점을 본 적이 있습니다.</p>\n<p>하지만 본문에서 설명한 개념으로 그런 단점을 최소화하는게 가능하겠지요. 핵심은 프로그래머가 자신의 프로그램이 어떻게 동작할지를 면밀하게 설계할 필요가 있다는 것입니다.</p>\n<p>위 개념을 조금 더 적극적으로 활용하고자 하시는 루비 프로그래머분들은 <a href="http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=49317754">루비로 배우는 객체지향 디자인</a>의 5, 6, 7장을 찬찬히 살펴보시면 많은 도움이 될 것입니다.</p>\n<p>2016년의 마지막 날, 이 글을 읽는 분들에게 조그마한 새해 선물이 되었이 되었으면 좋곘고 새해에도 많은 분들과 더 좋은 내용의 글을 주고받을 수 있도록 개발자로서의 역량을 갈고 닦고 싶습니다 :)</p>',frontmatter:{date:"2016/12/31",path:"/posts/the-penguin-that-cannot-fly-kor",title:"[번역] 펭귄은 날 수 없다(The Penguin That Can't Fly)",tags:["Ruby","OOP"]}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-the-penguin-that-cannot-fly-kor-1c9f3510a88754e07125.js.map