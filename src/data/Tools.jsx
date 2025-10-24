const Tools = [
        {
            name: "Chat Gpt",
            price: "부분 유료",
            category: "대화형 인공지능",
            platform: "웹/앱",
            content: "Chat Gpt : OpenAI 플랫폼 회원가입 후 무료 혹은 유료 구독제로 이용할 수 있으며, 회원가입을 하고 채팅을 하듯이 챗봇에 질문을 입력하는 것만으로 AI를 이용할 수 있다. 어떤 유형의 글을 입력해도 이에 맞는 답변이 생성되는 시도가 이루어진다. 스마트폰으로도 OpenAI 플랫폼에 들어가면 이용할 수 있다.",
            link: "https://chatgpt.com/"
        },
        {
            name: "Figma",
            price: "부분 유료",
            category: "디자인, 협업",
            platform: "웹",
            content: "Figma : 웹 기반 UI/UX 디자인 및 프로토타이핑, 협업툴 플랫폼이다. 부분 유료 프로그램이지만, 개인으로 사용한다면 사실상 무료 프로그램이다. 피그마는 자체가 웹 기반이기 때문에 피그마 계정 소유자가 링크를 공유하여 여러 명이 아트 보드를 확인하며 동시에 온라인으로 실시간 작업을 진행할 수 있다. 디자이너와 개발자의 소통을 도와주는 기능이 많다. 개발자가 참조할 수 있는 정보를 주는 ‘개발 툴바’가 있으며, 마우스 툴바로도 수칫값을 확인할 수 있어 가이드라인이 없어도 빠른 작업이 가능하다.",
            link: "https://www.figma.com/ko-kr/ai/"
        },
        {
            name: "Cursor",
            price: "부분 유료",
            category: "코딩",
            platform: "통합개발환경(IDE)",
            content: "Cursor : Visual Studio Code를 포크해서 만들어진 통합 개발 환경으로, 코드 작성(코딩), 디버깅, 수정 등 다양한 개발 작업을 AI의 도움으로 효율화할 수 있는 툴이다. Cursor는 GPT-4o, Claude 4 Sonnet 등 다양한 AI 모델을 지원하며, 코드 작성(코딩) 및 디버깅 속도를 대폭 향상시키는 것을 목표로 하고 있다. 또한 자연어를 활용해 코드 작성(코딩), 수정, 명령어 변환 등 다양한 작업을 간단히 수행할 수 있다.",
            link: "https://cursor.com/"
        },
        {
            name: "Claude",
            price: "부분 유료",
            category: "대화형 인공지능",
            platform: "웹, iOS, Android",
            content: "Claude : Anthropic이 개발한 대형 언어 모델 기반 챗봇으로, 텍스트 생성, 코딩, 요약, 문서 분석, 이미지 이해 등을 지원한다. 자연어 이해 및 추론 능력이 우수하며, 장문 대화 및 복잡한 문서 작업에도 적합하다. 또한 보안과 프라이버시 중심의 설계로 팀 협업 환경에 최적화되어 있다.",
            link: "https://claude.ai"
            },
        {
            name: "Gemini",
            price: "부분 유료",
            category: "대화형 인공지능, 멀티모달 AI",
            platform: "웹, iOS, Android",
            content: "Gemini : Google이 개발한 생성형 AI로, 텍스트, 이미지, 코드 작성(코딩), 음성을 모두 처리할 수 있는 멀티모달 모델이다. 검색, 문서 작성, 프로그래밍 보조, 시각적 분석 기능을 제공하며 Gmail, Docs 등 Google Workspace와 통합되어 있다.",
            link: "https://gemini.google.com"
        },
        {
            name: "10Web",
            price: "부분 유료",
            category: "웹사이트 빌더",
            platform: "웹",
            content: "10Web : AI를 활용해 WordPress 기반 웹사이트를 자동 생성하고 관리하는 플랫폼이다. 업종 입력만으로 레이아웃과 콘텐츠를 자동 구성하며, SEO 최적화, 보안, 백업 기능을 포함해 노코드 환경에서 손쉽게 웹사이트를 제작할 수 있다.(코딩)",
            link: "https://10web.io"
        },
        {
            name: "Durable",
            price: "부분 유료",
            category: "웹사이트 빌더, 비즈니스 자동화",
            platform: "웹",
            content: "Durable : 비즈니스명만 입력하면 30초 안에 웹사이트를 완성하는 AI 빌더다. 디자인, 텍스트, 이미지, 도메인 구성을 자동화하며 CRM, 청구서 관리 등 비즈니스 운영 기능까지 통합되어 있다.",
            link: "https://durable.co"
        },
        {
            name: "Framer",
            price: "부분 유료",
            category: "웹디자인, 프로토타이핑",
            platform: "웹",
            content: "Framer : 웹사이트 및 앱 디자인을 위한 노코드 프로토타이핑 툴이다(코딩 툴). AI를 활용해 레이아웃 제안, 반응형 구조, 인터랙션 디자인을 자동 생성하며, 디자이너와 개발자가 실시간 협업할 수 있다.",
            link: "https://www.framer.com"
        },
        {
            name: "Copy.ai",
            price: "부분 유료",
            category: "카피라이팅, 마케팅 콘텐츠",
            platform: "웹",
            content: "Copy.ai : AI 기반 콘텐츠 생성 플랫폼으로, 광고 문구, 제품 설명, 이메일, SNS 캡션 등을 자동 작성한다. 브랜드 톤앤매너, 키워드 중심 문장 최적화, 팀 협업 기능을 제공한다.",
            link: "https://www.copy.ai"
        },
        {
            name: "Grammarly",
            price: "부분 유료",
            category: "문법 교정, 글쓰기 보조",
            platform: "웹, 브라우저 확장, 모바일",
            content: "Grammarly : 문법, 철자, 어투, 톤을 분석하고 교정 제안을 제공하는 글쓰기 보조 AI다. 이메일, 문서, 보고서 등 다양한 형식에서 작문 품질을 향상시킨다.",
            link: "https://www.grammarly.com"
        },
        {
            name: "Runway",
            price: "부분 유료",
            category: "영상·이미지 생성 및 편집",
            platform: "웹",
            content: "Runway : 텍스트 프롬프트로 영상과 이미지를 생성·편집할 수 있는 AI 플랫폼이다. 오브젝트 제거, 스타일 변환, 영상 합성 등 기능을 제공하며, 크리에이티브 콘텐츠 제작에 활용된다.",
            link: "https://www.runwayml.com"
        },
        {
            name: "Synthesia",
            price: "부분 유료",
            category: "영상 생성",
            platform: "웹",
            content: "Synthesia : 텍스트를 입력하면 AI 아바타가 해당 내용을 말하는 영상을 자동 생성한다. 교육용·홍보용 콘텐츠 제작에 적합하며 다국어 음성 및 커스터마이즈 기능을 지원한다.",
            link: "https://www.synthesia.io"
        },
        {
            name: "Canva AI",
            price: "부분 유료",
            category: "그래픽 디자인, 프레젠테이션",
            platform: "웹, 모바일, 데스크톱",
            content: "Canva AI : 그래픽 디자인과 프레젠테이션 제작을 지원하는 AI 도구로, 자동 레이아웃, 이미지 생성, 색상 추천, 팀 협업 기능을 제공한다.",
            link: "https://www.canva.com"
        },
        {
            name: "Flair AI",
            price: "부분 유료",
            category: "브랜딩, 패션 디자인",
            platform: "웹",
            content: "Flair AI : 브랜드 비주얼 제작에 특화된 AI 디자인 플랫폼으로, 제품 이미지 생성, 패션 촬영 보정, 스타일링 프롬프트를 지원한다. 크리에이티브 콘텐츠를 위한 고품질 아트워크 제작에 활용된다.",
            link: "https://flair.ai"
        },
        {
            name: "Booth AI",
            price: "부분 유료",
            category: "이미지 생성, 3D 시각화",
            platform: "웹",
            content: "Booth AI : 텍스트나 이미지를 기반으로 인물, 패션, 제품 이미지를 생성하는 비주얼 제작 도구이다. AI 기반 포토 리얼리스틱 렌더링 기능으로 상업용 콘텐츠 제작에 활용된다.",
            link: "https://booth.ai"
        },
        {
            name: "Midjourney",
            price: "부분 유료",
            category: "이미지 생성",
            platform: "웹, Discord",
            content: "Midjourney : 텍스트 프롬프트를 기반으로 예술적이고 세밀한 이미지를 생성하는 AI 아트 툴이다. 다양한 스타일 제어와 프롬프트 조합이 가능하며, 디지털 아트 및 디자인 작업에 널리 사용된다.",
            link: "https://www.midjourney.com"
        },
        {
            name: "DALL·E 3",
            price: "부분 유료",
            category: "이미지 생성",
            platform: "웹",
            content: "DALL·E 3 : OpenAI에서 개발한 이미지 생성 모델로, 자연어 프롬프트를 기반으로 고해상도 이미지를 생성한다. 세부 묘사와 문맥 이해가 뛰어나 광고, 포스터, 캐릭터 디자인 등에서 활용된다.",
            link: "https://openai.com/dall-e-3"
        },
        {
            name: "Leonardo AI",
            price: "부분 유료",
            category: "이미지·아트 생성",
            platform: "웹",
            content: "Leonardo AI : 텍스트 프롬프트로 고품질 아트워크를 생성하는 플랫폼으로, 게임 콘셉트 아트, 일러스트, 그래픽 디자인에 활용된다. 사용자 커뮤니티 기반의 스타일 공유 기능을 제공한다.",
            link: "https://leonardo.ai"
        },
        {
            name: "Gamma AI",
            price: "부분 유료",
            category: "프레젠테이션 제작",
            platform: "웹",
            content: "Gamma AI : 텍스트나 개요를 입력하면 자동으로 프레젠테이션 슬라이드를 구성하는 도구이다. 슬라이드 디자인, 요약, 시각 요소 배치까지 자동화해 자료 제작 시간을 단축시킨다.",
            link: "https://gamma.app"
        },
        {
            name: "Slide AI",
            price: "부분 유료",
            category: "프레젠테이션 생성",
            platform: "웹",
            content: "Slide AI : 텍스트 기반으로 슬라이드 자료를 자동 생성하며, 색상 테마, 폰트, 애니메이션 등을 AI가 자동 추천한다. 프레젠테이션 디자인 경험이 없는 사용자도 전문적인 결과물을 얻을 수 있다.",
            link: "https://www.slideai.io"
        },
        {
            name: "Beautiful AI",
            price: "부분 유료",
            category: "프레젠테이션 디자인",
            platform: "웹",
            content: "Beautiful AI : 텍스트 입력만으로 시각적으로 완성도 높은 슬라이드를 생성하는 디자인 도구이다. 자동 정렬, 그래프 시각화, 협업 기능을 제공하여 비즈니스용 발표 자료 제작에 활용된다.",
            link: "https://www.beautiful.ai"
        },
        {
            name: "Boomy",
            price: "부분 유료",
            category: "음악 생성",
            platform: "웹",
            content: "Boomy : 사용자가 장르와 분위기를 선택하면 AI가 자동으로 음악을 작곡하고 믹싱한다. 생성된 음악은 스트리밍 플랫폼 배포가 가능하며, 콘텐츠 제작용 사운드 트랙으로 활용된다.",
            link: "https://www.boomy.com"
        },
        {
            name: "Amper AI",
            price: "부분 유료",
            category: "음악 생성, 사운드 디자인",
            platform: "웹",
            content: "Amper AI : 영상, 게임, 광고용 맞춤형 배경음악을 자동 생성하는 AI 플랫폼이다. 사용자는 분위기, 악기, 길이 등을 선택해 손쉽게 사운드를 제작할 수 있다.",
            link: "https://www.ampermusic.com"
        },
        {
            name: "Soundful",
            price: "부분 유료",
            category: "음악 생성",
            platform: "웹",
            content: "Soundful : 장르, 템포, 분위기 등을 선택하면 AI가 음악을 생성한다. 상업적 사용이 가능한 라이선스를 제공하며, 영상·게임·광고 등에 맞춤형 사운드를 제작할 수 있다.",
            link: "https://soundful.com"
        },
        {
            name: "ElevenLabs",
            price: "부분 유료",
            category: "음성 합성",
            platform: "웹",
            content: "ElevenLabs : 딥러닝 기반 음성 합성 AI로, 텍스트를 자연스러운 음성으로 변환한다. 다국어 지원과 감정 표현이 가능하며, 내레이션, 오디오북, 더빙 제작에 활용된다.",
            link: "https://elevenlabs.io"
        },
        {
            name: "Typecast",
            price: "부분 유료",
            category: "음성·영상 내레이션",
            platform: "웹",
            content: "Typecast : AI로 캐릭터 음성과 영상 내레이션(더빙)을 제작하는 플랫폼이다. 다양한 목소리, 억양, 감정 조절 기능이 포함되어 있으며, 교육 및 홍보 영상 제작에 활용된다.",
            link: "https://typecast.ai"
        },
        {
            name: "클로바더빙",
            price: "부분 유료",
            category: "음성 더빙",
            platform: "웹",
            content: "클로바더빙 : 네이버 클라우드 기반 AI 음성 합성 서비스로, 영상에 자연스러운 음성을 입힌다. 감정 조절, 다국어 지원, 음색 선택 기능을 제공한다.",
            link: "https://clovadubbing.naver.com"
        },
        {
            name: "클로바노트",
            price: "부분 유료",
            category: "음성 인식, 회의록 자동화",
            platform: "웹, iOS, Android",
            content: "클로바노트 : 음성을 실시간으로 텍스트로 변환하고 요약하는 AI 기반 회의 기록 도구이다. 발화자 구분, 키워드 추출 기능을 제공하며, 회의나 수업 기록에 유용하다.",
            link: "https://clovanote.naver.com"
        },
        {
            name: "다글로",
            price: "부분 유료",
            category: "자막 생성, 번역",
            platform: "웹",
            content: "다글로 : 영상 음성을 자동 인식해 자막을 생성하고 번역까지 처리하는 AI 플랫폼이다. 유튜브 제작자와 강의 영상 편집자에게 유용하다.",
            link: "https://www.daglo.ai"
        },
        {
            name: "셀비노트",
            price: "부분 유료",
            category: "음성 인식, 회의 기록",
            platform: "웹, 모바일",
            content: "셀비노트 : 음성 인식 기술로 회의 내용을 자동 기록하고 요약하는 AI 플랫폼이다. 발화자 인식과 실시간 전사 기능을 제공한다.",
            link: "https://selvynote.selvasai.com"
        },
        {
            name: "Copilot",
            price: "부분 유료",
            category: "업무 자동화, 문서 어시스턴트",
            platform: "Windows, Office 앱",
            content: "Copilot : 마이크로소프트의 생성형 AI 어시스턴트로, Word, Excel, PowerPoint, Outlook에 통합되어 문서 작성, 데이터 분석, 요약 등을 자동화한다.",
            link: "https://copilot.microsoft.com"
        },
        {
            name: "Gemini Image",
            price: "부분 유료",
            category: "이미지 생성",
            platform: "웹",
            content: "Gemini Image : Google Gemini의 이미지 생성 기능으로, 텍스트 입력을 기반으로 시각적 콘텐츠를 생성한다. 실사 합성, 디자인, 콘셉트 아트 제작이 가능하다.",
            link: "https://gemini.google.com"
        },
        {
            name: "Perplexity AI",
            price: "부분 유료",
            category: "AI 검색, 지식엔진",
            platform: "웹, iOS, Android",
            content: "Perplexity AI : 실시간 웹 검색 결과를 기반으로 요약된 답변을 제공하는 AI 검색 엔진이다. 신뢰 가능한 출처와 인용 정보를 함께 표시한다.",
            link: "https://www.perplexity.ai"
        },
        {
            name: "NotebookLM",
            price: "부분 유료",
            category: "문서 연구, 요약",
            platform: "웹",
            content: "NotebookLM : Google Labs에서 개발한 AI 노트북으로, 문서 업로드 후 요약, 인사이트 추출, 인용 자동화를 지원한다.",
            link: "https://notebooklm.google.com"
        },
        {
            name: "Lilys AI",
            price: "부분 유료",
            category: "패션 추천",
            platform: "웹, 모바일",
            content: "Lilys AI : 사용자의 취향과 신체 데이터를 기반으로 의류를 추천하는 AI 스타일링 플랫폼이다. 전자상거래와 연동되어 가상 피팅 기능을 제공한다.",
            link: "https://www.lilys.ai"
        },
        {
            name: "Veo 3",
            price: "부분 유료",
            category: "영상 생성",
            platform: "웹",
            content: "Veo 3 : Google DeepMind의 텍스트-to-비디오 생성 모델로, 사용자의 문장을 기반으로 사실적인 영상을 생성한다.",
            link: "https://deepmind.google"
        },
        {
            name: "미리캔버스",
            price: "부분 유료",
            category: "디자인, 프레젠테이션",
            platform: "웹, 모바일",
            content: "미리캔버스 : 국내 개발 그래픽 디자인 플랫폼으로, 템플릿 기반 드래그&드롭 편집과 AI 자동 디자인 추천 기능을 제공한다.",
            link: "https://www.miricanvas.com"
        },
        {
            name: "Napkin AI",
            price: "부분 유료",
            category: "아이디어 정리, 요약",
            platform: "웹",
            content: "Napkin AI : 텍스트나 아이디어를 자동 요약하고 구조화해 시각적으로 정리하는 AI 노트 툴이다. 생각 정리와 기획 단계에 유용하다.",
            link: "https://www.napkin.ai"
        },
        {
            name: "Suno AI",
            price: "부분 유료",
            category: "음악 생성",
            platform: "웹",
            content: "Suno AI : 텍스트 프롬프트를 입력하면 완성된 음악을 자동으로 생성하는 플랫폼이다. 장르, 가사, 보컬 등을 지정할 수 있다.",
            link: "https://www.suno.ai"
        },
        {
            name: "Sora",
            price: "부분 유료",
            category: "영상 생성",
            platform: "웹",
            content: "Sora : OpenAI가 개발한 텍스트-to-비디오 생성 AI로, 사실적이고 영화 같은 장면을 생성할 수 있다.",
            link: "https://openai.com/sora"
        },
        {
            name: "Wolfram Alpha",
            price: "부분 유료",
            category: "지식 엔진, 계산 분석",
            platform: "웹, 모바일",
            content: "Wolfram Alpha : 수학, 과학, 통계 등 다양한 분야의 데이터를 계산·분석해 즉시 결과를 제공하는 AI 지식 엔진이다.",
            link: "https://www.wolframalpha.com"
        },
        {
            name: "DeepL",
            price: "부분 유료",
            category: "번역, 문서 변환",
            platform: "웹, 데스크톱, 모바일",
            content: "DeepL : 자연어 문맥 이해에 강점을 가진 AI 번역기다. 텍스트와 문서 전체를 높은 정확도로 번역하며, 기업용 보안 번역 기능을 제공한다.",
            link: "https://www.deepl.com"
        },
        {
            name: "Poe",
            price: "부분 유료",
            category: "AI 통합 플랫폼",
            platform: "웹, 모바일",
            content: "Poe : Quora가 개발한 멀티 AI 실행 플랫폼으로, ChatGPT, Claude, Gemini 등 다양한 모델을 한 곳에서 사용할 수 있다.",
            link: "https://poe.com"
        },
        {
            name: "Consensus",
            price: "부분 유료",
            category: "논문 검색, 연구 요약",
            platform: "웹",
            content: "Consensus : 학술 논문을 기반으로 신뢰성 있는 과학적 답변을 제공하는 AI 검색 엔진이다. 관련 연구의 결론을 자동 요약해 보여준다.",
            link: "https://consensus.app"
        },
        {
            name: "Genspark",
            price: "부분 유료",
            category: "AI 기사 요약, 정보 검색",
            platform: "웹",
            content: "Genspark : 사용자의 질문을 기사 형식으로 요약해 제공하는 AI 정보 플랫폼이다. 출처 기반의 핵심 요약을 제공한다.",
            link: "https://www.genspark.ai"
        },
        {
            name: "Adobe Firefly",
            price: "부분 유료",
            category: "이미지 생성, 그래픽 디자인",
            platform: "웹, Adobe CC",
            content: "Adobe Firefly : 텍스트 프롬프트를 기반으로 이미지, 배경, 텍스처를 생성하는 Adobe의 생성형 AI다. Photoshop 및 Illustrator와 통합되어 있다.",
            link: "https://www.adobe.com/products/firefly.html"
        },
        {
            name: "Photoshop",
            price: "부분 유료",
            category: "이미지 편집, 생성형 디자인",
            platform: "데스크톱, 웹",
            content: "Photoshop : Adobe의 대표 그래픽 편집 소프트웨어로, Firefly 기반의 생성형 AI 기능이 통합되어 있다. 객체 제거, 확장, 스타일 변경이 가능하다.",
            link: "https://www.adobe.com/products/photoshop.html"
        },
        {
            name: "Luma AI",
            price: "부분 유료",
            category: "3D 모델링, 비디오 생성",
            platform: "웹, 모바일",
            content: "Luma AI : 이미지나 영상을 기반으로 3D 모델과 비디오를 생성하는 도구다. 현실적인 렌더링과 공간 재현 기술을 제공한다.",
            link: "https://lumalabs.ai"
        },
        {
            name: "CapCut",
            price: "부분 유료",
            category: "영상 편집",
            platform: "웹, 데스크톱, 모바일",
            content: "CapCut : ByteDance가 개발한 영상 편집 툴로, AI 자막, 얼굴 보정, 자동 편집 기능을 제공한다. TikTok 콘텐츠 제작에 적합하다.",
            link: "https://www.capcut.com"
        },
        {
            name: "Vrew",
            price: "부분 유료",
            category: "영상 자막 생성",
            platform: "데스크톱, 모바일",
            content: "Vrew : 영상의 음성을 자동으로 텍스트로 변환해 자막을 생성하는 AI 툴이다. 번역, 싱크 조정, 요약 기능을 제공한다.",
            link: "https://vrew.voyagerx.com"
        },
        {
            name: "MS 365 Copilot",
            price: "부분 유료",
            category: "생산성, 오피스 자동화",
            platform: "Windows, Office",
            content: "MS 365 Copilot : OpenAI GPT-4 모델을 기반으로 Word, Excel, PowerPoint 등에서 문서 작성, 데이터 분석, 요약을 자동화한다.",
            link: "https://www.microsoft.com/copilot"
        },
        {
            name: "뤼튼",
            price: "부분 유료",
            category: "글쓰기, 마케팅 콘텐츠",
            platform: "웹",
            content: "뤼튼 : 한국어 기반 생성형 AI로, 블로그, SNS, 뉴스레터 콘텐츠를 자동 작성한다. 키워드 삽입, 톤 조절, SEO 최적화를 지원한다.",
            link: "https://wrtn.ai"
        },
        {
            name: "Khroma",
            price: "부분 유료",
            category: "컬러 팔레트 생성",
            platform: "웹",
            content: "Khroma : 사용자의 색상 취향을 학습해 맞춤형 색상 조합과 팔레트를 생성하는 AI 디자인 도구다.",
            link: "https://www.khroma.co"
        },
        {
            name: "SciSpace",
            price: "부분 유료",
            category: "논문 요약, 연구 보조",
            platform: "웹",
            content: "SciSpace : 논문 PDF를 업로드하면 AI가 내용을 분석, 요약, 개념 해석을 제공한다. 연구자용 논문 탐색 보조 도구이다.",
            link: "https://typeset.io"
        },
        {
            name: "Research Rabbit",
            price: "부분 유료",
            category: "논문 시각화, 추천",
            platform: "웹",
            content: "Research Rabbit : 논문 인용 관계를 그래프로 시각화하여 관련 연구를 탐색할 수 있는 연구 지원 플랫폼이다.",
            link: "https://www.researchrabbitapp.com"
        },
        {
            name: "Ideogram",
            price: "부분 유료",
            category: "이미지 생성",
            platform: "웹",
            content: "Ideogram : 텍스트 프롬프트로 고품질 이미지를 생성하며, 특히 로고나 텍스트 삽입 이미지 표현에 특화되어 있다.",
            link: "https://ideogram.ai"
        },
        {
            name: "Notion AI",
            price: "부분 유료",
            category: "문서 작성, 정리",
            platform: "웹, 데스크톱, 모바일",
            content: "Notion AI : 메모, 노트, 프로젝트 관리에 AI를 결합해 문서 작성, 요약, 개선을 자동화한다. 협업 문서 관리에 적합하다.",
            link: "https://www.notion.so/product/ai"
        },
        {
            name: "Slack AI",
            price: "부분 유료",
            category: "팀 커뮤니케이션, 업무 자동화",
            platform: "웹, 데스크톱, 모바일",
            content: "Slack AI : 메시지 요약, 회의 메모 생성, 자동 응답 등을 지원하는 팀 협업용 AI 어시스턴트다.",
            link: "https://slack.com/ai"
        },
        {
            name: "DeepSeek",
            price: "부분 유료",
            category: "오픈소스 대화형 AI",
            platform: "웹, API",
            content: "DeepSeek : 중국에서 개발된 오픈소스 대형 언어 모델로, 영어와 중국어에 최적화되어 있으며 코드 생성(코딩)과 데이터 분석 기능을 지원한다.",
            link: "https://www.deepseek.com"
        },
        {
            name: "Qwen 3",
            price: "부분 유료",
            category: "대형 언어 모델",
            platform: "웹, API",
            content: "Qwen 3 : Alibaba Cloud의 다국어 LLM으로, 영어·중국어·한국어를 지원하며 코드 생성(코딩)과 이미지 이해 기능을 포함한다.",
            link: "https://qwenlm.ai"
        },
        {
            name: "Codestral",
            price: "부분 유료",
            category: "코드 생성, 개발 보조",
            platform: "웹, IDE",
            content: "Codestral : Mistral AI가 개발한 코드 전용 오픈소스 모델로, Python·C·JavaScript 등 주요 언어를 지원하며 코드 자동 완성과 디버깅을 제공한다.",
            link: "https://mistral.ai"
        },
        {
            name: "Mercury Coder",
            price: "부분 유료",
            category: "코드 분석, 디버깅",
            platform: "웹",
            content: "Mercury Coder : 소스 코드를 분석하고 오류를 자동 탐지·수정하는 AI 도구로, 코드 품질 향상과 교육용 예시 제공에 적합하다.",
            link: "https://www.mercurycoder.com"
        },
        {
            name: "Krea AI",
            price: "부분 유료",
            category: "이미지 생성, 비주얼 디자인",
            platform: "웹",
            content: "Krea AI : 실시간 이미지 스타일 편집과 조명, 질감 제어 기능을 제공하는 생성형 디자인 도구로, 패션 및 광고 디자인에 활용된다.",
            link: "https://www.krea.ai"
        }

    ]

export default Tools