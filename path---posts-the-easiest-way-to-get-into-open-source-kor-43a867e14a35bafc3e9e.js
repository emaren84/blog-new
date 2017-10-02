webpackJsonp([0x7c49c6856e30],{"./node_modules/json-loader/index.js!./.cache/json/posts-the-easiest-way-to-get-into-open-source-kor.json":function(n,t){n.exports={data:{markdownRemark:{html:'<ul>\n<li><strong>이 포스팅은 <a href="https://www.justinweiss.com/articles/the-easiest-way-to-get-into-open-source/">Justin Weiss의 블로그 포스팅</a>을 허가 아래 번역한 글입니다</strong></li>\n<li><strong>본 번역물의 저작권은 따로 없으며 인용하실 때 출처를 밝혀주신다면 무척 고맙겠습니다</strong></li>\n<li><strong>표현이 부족한 부분이나 오타를 발견하시면 댓글이나 트위터를 통해 알려주세요</strong></li>\n</ul>\n<hr>\n<p>Thom Parkin이 <a href="http://www.justinweiss.com/blog/2014/10/28/how-to-go-beyond-documentation-and-learn-a-new-library/#comment-1657912979">제 지난번 글에 아주 중요한 지적을 해 주었습니다.</a></p>\n<blockquote>\n<p>좋은 조언입니다. 그러나 당신은 아주 중요하고 결정적인 포인트를 하나 놓쳤어요. 지금 하고 있는 이야기는 오픈 소스에 관한 이야기이기 때문에 당신이 한번 어떤 기능이나 함수가 문서화가 잘 안되어있다는 것을 발견한다면, <strong>당신은 그 문서를 업데이트 하고 풀 리퀘스트(Pull Request)를 제출해야 합니다.</strong> 그렇게 전체 커뮤니티가 도움을 받게 되고 더불어 당신은 그런 참여를 통해 어느 정도의 "코더 평판(coder cred)"을 얻게 됩니다.</p>\n</blockquote>\n<p><strong>나는 Thom이 이 점을 언급해주어서 기뻤습니다. 이는 아주 중요한 것이기 때문입니다.</strong> 문서를 수정하는 것은 당신이 사용하고 좋아하는 프로젝트에 기여를 시작할 수 있는 가장 쉬운 방법입니다.</p>\n<p>제가 Rails, Rubinus, Elixir에 처음 기여했던 것들은 모두 문서 수정이었습니다. 저는 작은 수정들을 가해왔습니다. 문장을 더 명확하게 하고, 코드를 직접 읽어야만 발견할 수 있는 부분들을 설명하는 작업을 하거나, 심지어 단지 포맷이 잘못된 부분을 수정하기도 했습니다. 이 모든 것들은 좀 커다란 오픈 소스 프로젝트들을 돕는 가장 빠르고 쉬운 방법들입니다. 비록 이 일들이 제가 프로젝트에 유일하게 기여한 것들이지만, 여전히 미래의 사용자들을 돕고 있습니다. 심지어 미래의 제 자신도요. 그게 바로 오픈소스죠(And that’s what open source is all about).</p>\n<h2 id="왜-문서를-수정하는-것이-그렇게-좋은-방법인가"><a href="#%EC%99%9C-%EB%AC%B8%EC%84%9C%EB%A5%BC-%EC%88%98%EC%A0%95%ED%95%98%EB%8A%94-%EA%B2%83%EC%9D%B4-%EA%B7%B8%EB%A0%87%EA%B2%8C-%EC%A2%8B%EC%9D%80-%EB%B0%A9%EB%B2%95%EC%9D%B8%EA%B0%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>왜 문서를 수정하는 것이 그렇게 좋은 방법인가</h2>\n<p>Rails같이 거대한 프로젝트에선 문서를 수정하는 것이 가장 부담이 덜 되는 기여 방법입니다.</p>\n<ul>\n<li><strong>당신은 버그를 수정하기 위해 프로젝트를 세팅할 필요가 없습니다.</strong> 당신은 그저 문서를 업데이트 하는 것이기 때문에 테스트를 돌리거나 앱을 돌릴 필요가 없습니다. 심지어 당신은 자신의 컴퓨터에 프로젝트를 클론할 필요도 없습니다 - Github에서 바로 수정할 수 있어요!</li>\n<li><strong>관리자(Maintainer)가 당신의 풀 리퀘스트에 수정을 요청한다면, 보통 어법(wording)이나 취향 때문일 겁니다.</strong> 이런 변경점은 당신의 코드가 비판받는 것 보다 받아들이기 쉽습니다. 그리고 만들기도 쉽습니다. 왜냐면 당신은 테스트나 코드를 업데이트 할 필요가 없으니까요. 단지 단어들만 업데이트하면 됩니다.</li>\n<li><strong>문서화(Documentation)는 프로젝트 관리자에게는 힘든 일입니다. 그래서 업데이트는 큰 도움이 됩니다.</strong> 종종 코드의 작성자들은 자신의 코드와 너무 밀접해 있어서, 어느 부분이 혼란스러운 부분인지 잘 이해하지 못합니다. 그들은 다른, 혹은 뉴비 개발자들이 어느 부분의 문서에 도움이 필요한지 말해주길 원합니다. 당신의 프로젝트를 초보자의 시점으로 보는 건 연습이 필요합니다. 모두가 그런 기술을 가진 것은 아니거든요.</li>\n<li><strong>마지막으로, 당신은 프로젝트에 부담없는 변화를 주면서도 관리자와 관계를 형성할 수 있습니다.</strong> 당신은 프로젝트의 방향을 바꾸는 게 아닙니다. 예를 들면 당신이 전체 기능에 기여하는 것 처럼요. 그래서 당신의 변경점은 관리자가 리뷰하기 쉽고, 그들은 보통 당신에게 더 빠르게 답변 할 것입니다. 당신의 머지 요청은 "이게 정말 좋은 생각일까요?" 같은 말에 가로막히지 않을 것입니다.</li>\n</ul>\n<p>당신은 그 관계를 유지하면서 점차 신뢰받는 기여자로 보이기 시작할 것입니다. 당신의 풀 리퀘스트는 더 빠르게 리뷰될 것이고, 당신들이(당신과 관리자) 더 복잡한 기능 요청이나 버그 수정에 대해 자세하게 이야기를 나누기도 쉬워집니다.</p>\n<p>당신의 첫 기여를 <strong>시작하기도 쉽고, 하기도 쉽고, 머지도 더 빠르게 되는</strong> 문서 수정으로 해 보시는 게 어떨까요?</p>\n<h2 id="업데이트-된-문서에-다시-기여하는-방법"><a href="#%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EB%90%9C-%EB%AC%B8%EC%84%9C%EC%97%90-%EB%8B%A4%EC%8B%9C-%EA%B8%B0%EC%97%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>업데이트 된 문서에 다시 기여하는 방법</h2>\n<p>버그 수정과 마찬가지로 문서 업데이트에 기여하는 데는 유의할 점이 있습니다: <strong>둘 다 공통적으로 \'잘못되었다고 느껴지는 것들(things that feel wrong)\'에 많이 신경을 써야 한다는 점입니다.</strong> 당신은 주의를 기울여야 합니다.</p>\n<p>보통 코드가 당신이 기대하던대로 동작하지 않을 때가 문서를 업데이트 해야 할 시기입니다. 만약 당신이 코드를 직접 수정하여 문제를 해결한다면, 마찬가지로 다른 사람들에게 이에 대해 알려야 할 겁니다. 혹은 당신이 읽고 있는 문서의 잘못된 형식이나 오타가 신경쓰일 수도 있습니다. 당신이 고치지 않는다면 누가 할까요?</p>\n<p>당신이 어디를 변경하고 어떻게 말로 표현해야하는지 좋은 아이디어가 떠올랐다면, 그 부분을 변경하고 한번 Github에 풀 리퀘스트를 올려보세요.</p>\n<p>만약 당신이 문서를 업데이트 하는 가장 좋은 방법을 계속 구상중이라면 Github에 이슈를 열어보세요. 이런 식으로요:</p>\n<blockquote>\n<p>"저기요, 이건 제가 보기에 좀 헷갈리네요. 제가 이런 식으로 업데이트하는 걸 생각해 봤는데요: ... 어떻게 생각하세요? 제가 더 넣어야 할 내용이 있을까요?"</p>\n</blockquote>\n<p>이렇게 당신은 모두를 만족시키는 표현법을 함께 제안할 수 있습니다.</p>\n<p>마지막으로 당신이 답변을 얻지 못하더라도 주눅들지 마세요. 큰 프로젝트는 여러 일들이 진행됩니다. 그래서 당신의 기여는 그 사이 어딘가로 쏙 빠져버리기 쉽지요. <strong>일주일 안팎으로 당신이 아무런 답변을 듣지 못한다면, 관리자에게 다시 물어보세요.</strong></p>\n<p>보통 당신이 라이브러리를 사용하게 되면 무엇보다 먼저 마주치는 것이 문서입니다. 그러므로 문서를 자세하고 명료하게 만드는 것은 중요합니다.</p>\n<p>그러니 당신이 쓰는 코드가 혼란스러울 때나 직접 소스를 들여다 보아야 할 때, 다음 사람을 위해 보기 쉽게 만들어주세요. 간단한 업데이트를 작성하고 다시 기여하세요. 이것이 제가 알고있는 오픈 소스 기여자가 되는 가장 쉬운 방법입니다.</p>\n<hr>\n<h2 id="번역-후기"><a href="#%EB%B2%88%EC%97%AD-%ED%9B%84%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>번역 후기</h2>\n<p>첫 번역이라 부족한 점이 아주 많았습니다. 영어로 된 글을 읽는 것이 그래도 어느 정도는 읽을만 하다고 생각했는데, 다른 사람이 한글로 된 번역문을 읽으려면 훨씬 번역을 잘 해야하고, 우리말 문장도 매끄럽게 작성하도록 온 신경을 기울여야 한다는 점을 깨닫는 계기가 되었습니다.</p>\n<p>사실 번역을 시작해보게 된 계기는 단순합니다. 본 글의 저자인 <a href="http://www.justinweiss.com">Justin Weiss</a>의 블로그 포스팅들이 마음에 들어서 책(Practicing Rails)도 구매하고, 뉴스레터도 구독하면서 최근 뉴스레터의 내용들이 참 도움이 많이 된다고 생각하였습니다. 그래서 메일로 최근에 온 뉴스레터를 한글로 번역하여 공유해도 되겠냐고 물어보았지요.</p>\n<p>그는 조만간 그 뉴스레터를 블로그로 포스팅할 예정이고 그 포스팅이 첫 번째로 공개되는 포스팅이었으면 한다고 답변을 주었습니다. 즉 아직은 올릴 수 없다는 말이겠지요. 메일을 조금 더 주고받다가 저는 그의 좋은 포스팅들 중 첫 번역을 이 글로 시작하기로 협의했습니다.</p>\n<p>차차 Justin의 포스팅 이외에도 괜찮은 글들을 제가 번역할 기회가 주어진다면 조금씩 올려볼 예정입니다. 감사합니다.</p>',frontmatter:{date:"2016/12/09",path:"/posts/the-easiest-way-to-get-into-open-source-kor",title:"[번역] 오픈 소스에 참여하는 가장 쉬운 방법",tags:["Translation","Rails","OSS"]}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-the-easiest-way-to-get-into-open-source-kor-43a867e14a35bafc3e9e.js.map