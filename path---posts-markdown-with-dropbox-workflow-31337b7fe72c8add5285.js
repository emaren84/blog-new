webpackJsonp([29999669462158],{"./node_modules/json-loader/index.js!./.cache/json/posts-markdown-with-dropbox-workflow.json":function(n,l){n.exports={data:{markdownRemark:{html:'<h2>한동안 마크다운으로 노트를 작성해본 후 느끼는 아쉬움</h2>\n<p>마크다운 문법을 이용한 글 작성에 조금씩 익숙해지고 있는 것은 좋은데, 조금씩 노트의 양이 늘어가니 관리하기가 힘들어질 것 같다는 걱정이 들기 시작했다.<br>\n여지껏 노트를 작성하더라도 그렇게 잘 활용하진 못한 기분이 들지만.. 이번에는 개발노트(업무일지, 스터디노트), 각종 새로 배운 내용들, 아이디어들 등을 마크다운 문서로 작성해서 보관하고자 하는 목표가 생겼다.<br>\n에버노트나 원노트 등과 비교해서 마크다운 문서를 작성했을 때의 장점이라면</p>\n<ul>\n<li>단순함</li>\n<li>다른 양식이 필요없이 텍스트만으로 작성 가능</li>\n<li>코드 적기에 용이함(이게 제일 큰 차이점)</li>\n<li>플랫폼의 구애를 받지 않음</li>\n</ul>\n<p>이정도를 들 수 있겠는데, 문제는 그 단순함에 비례한 관리의 어려움이다.\n처음에 심플노트를 쓰기 시작하고, 그와 더불어 nvALT를 알게 되면서 \'간단히 노트를 작성하고 동기화하기에 굉장히 좋구나\' 라고 생각하게 되었는데 폴더 관리 방식이 아니다보니 태그만으로는 정리하기가 좀 힘들어지고 있다.</p>\n<p>태그 정렬방식의 또 다른 문제는 심플노트와 nvALT에 종속될 수 밖에 없다는 것이다.<br>\n노트들은 폴더 하나에 텍스트파일로 죄다 들어가게 되는데 지금이야 100개 조금 넘는 정도의 노트지만, 점점 노트가 늘어갈 수록 어떤 노트가 무슨 내용을 담고 있는지 한 눈에 알아보기 힘들고 관리하기 힘들어질 수 있겠다는 생각이 들었다.</p>\n<p>특히 조금씩이지만 랩탑의 활용도가 늘고 있는데 랩탑이 맥이 아니다보니 nvALT를 사용할 수 없는 부분이 크게 작용했다.<br>\nnvPY로 유사한 인터페이스의 심플노트 싱크는 가능하지만, 드롭박스에 텍스트파일을 생성하지 않다보니 나에게는 반쪽자리 애플리케이션이었기 때문이다.</p>\n<h2>마크다운 + 심플노트 + 드롭박스 작업환경을 생각해보다</h2>\n<p>내가 생각하는 노트 동기화 환경은 드롭박스를 메인으로 하고 심플노트를 서브로 사용하는 방식으로 이용하고 싶은데 그러면 드롭박스에 생성된 텍스트 파일들이 전부 따로 제목을 가지고 있어서 문제가 된다.</p>\n<p>많은 고민과 검색 끝에 조금이나마 내놓은 대책은 <strong>제목을 태그화하는 것</strong>인데, 첫 제목(파일 이름)을 일정 형식으로 만들어서 태그를 매긴 것 처럼 보이게 하고, 텍스트 본문 첫 줄에 제목을 작성하는 형식으로 관리를 하는 것이다.</p>\n<p><strong>Sample tag names</strong></p>\n<ul>\n<li>refx - reference</li>\n<li>runx - running list</li>\n<li>rcpx - recipes</li>\n<li>mtgx - meeting notes</li>\n<li>blogx - blog entires</li>\n<li>contactx - contact information records</li>\n<li>carx - auto info</li>\n<li>notex - note taking for courses or lectures</li>\n<li>lolx - wildcard!!!</li>\n</ul>\n<p>이런 식의 태그 이름을 활용하여 제목을 <code>refx-emacs-tutorial</code> 등으로 작성하는 것이다.\n왜 태그 이름에 X가 붙냐면 <strong>태그임을 명시</strong> 하기 위함인데, 보통 ref 등으로 검색을 하면 ref가 딸려있는 내용들이 죄다 같이 검색이 될 텐데 refx 같은 단어는 굉장히 독특하기 때문에 태그만 나올 것이기 때문이다.</p>\n<p>저런 태그를 이용하여 현재까지 작성 된 모든 노트의 이름을 형식화하는 작업을 하려고 한다.\n먼저 내가 사용하고자 하는 나만의 태그를 정의해본다면</p>\n<ul>\n<li>refx: 레퍼런스, 팁</li>\n<li>ideax: 순간의 아이디어, 구상</li>\n<li>devnotex: 개발노트</li>\n<li>studyx: 공부노트</li>\n<li>infox: 특정 정보</li>\n<li>reviewx: 리뷰</li>\n<li>blogx: 블로그 포스팅</li>\n<li>readx: 책이나 자료를 읽고 작성</li>\n</ul>\n<p>뭔가 생각나는데로 마구 작성해봤는데 많이 사용되는 태그는 위에서 4개까지일 것이라 생각된다.\n낑낑대면서 약 120개의 노트의 제목을 다시 정리하고, 원래 노트의 제목(txt 파일 이름)은 노트 본문의 첫번째 줄에다 마크다운의 h1태그를 써서 옮겨두었다.</p>\n<p><img src="./2016-08-04-sc1.png" alt="nvALT로 제목을 모두 수정한 후"></p>\n<p>한동안은 이런 방식으로 노트를 작성해보고 차차 수정해나갈 예정이다.\n리눅스에서는 오늘 마침 <a href="https://burnsoftware.wordpress.com/p-s-notes/">P.S Notes</a>라는 꽤 괜찮은 텍스트 작성 애플리케이션을 발견했는데, 랩탑으로 노트를 작성할 일이 이 앱으로 작성하여 드롭박스와 동기화하는 방법을 사용하려고 한다.</p>\n<hr>\n<p>References</p>\n<ul>\n<li><a href="http://computers.tutsplus.com/tutorials/superpower-your-note-taking-skills-with-nvalt-and-simplenote--cms-20816">Superpower Your Note Taking Skills With nvALT and Simplenote</a></li>\n<li><a href="https://hyungrok.com/2014/07/12/nvalt/">NVALT와 글쓰기 루틴 그리고 프로젝트 지식관리</a></li>\n</ul>',frontmatter:{date:"2016/08/04",path:"/posts/markdown-with-dropbox-workflow",title:"마크다운, nvALT, Dropbox를 활용한 노트관리 아이디어"}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-markdown-with-dropbox-workflow-31337b7fe72c8add5285.js.map