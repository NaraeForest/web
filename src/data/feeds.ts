export const feedData = [
  {
    id: 1,
    userName: "Alice",
    category: "Study",
    time: "1 hour ago",
    content: "다음 주부터 영어 회화 공부를 시작하려고 해요! 매일 30분씩 대화 연습을 할 계획인데, 좋은 팁 있으면 공유해주세요!",
    likes: 25,
    comments: 8,
    replies: [
      {
        id: 101,
        userName: "Bob",
        time: "30 minutes ago",
        content: "영어 회화는 꾸준함이 가장 중요해요! 매일 반복해서 자주 말해보세요.",
        likes: 8,
        comments: 0,
      },
      {
        id: 102,
        userName: "Charlie",
        time: "20 minutes ago",
        content: "팟캐스트를 활용해보세요. 자연스러운 표현을 익히는 데 도움이 많이 됐어요.",
        likes: 6,
        comments: 0,
      },
      {
        id: 103,
        userName: "Dave",
        time: "15 minutes ago",
        content: "외국인 친구랑 채팅하는 것도 좋아요. 실제 상황에서 써보는 게 최고예요.",
        likes: 7,
        comments: 0,
      },
      {
        id: 104,
        userName: "Eve",
        time: "10 minutes ago",
        content: "영화나 드라마를 영어 자막으로 보세요. 듣기 실력이 확 늘어요!",
        likes: 9,
        comments: 0,
      },
      {
        id: 105,
        userName: "Grace",
        time: "5 minutes ago",
        content: "영어 일기를 써보세요. 새로운 단어를 쓰며 익히는 데 좋아요.",
        likes: 5,
        comments: 0,
      },
      {
        id: 106,
        userName: "Frank",
        time: "3 minutes ago",
        content: "문법보다는 표현을 익히세요. 회화에서는 자연스러움이 중요해요.",
        likes: 4,
        comments: 0,
      },
      {
        id: 107,
        userName: "Ivy",
        time: "Just now",
        content: "매일 정해진 시간을 꼭 지키세요. 루틴이 생기면 더 쉽게 습관화됩니다.",
        likes: 6,
        comments: 0,
      },
    ],
  },
  {
    id: 2,
    userName: "Bob",
    category: "Fitness",
    time: "2 hours ago",
    content: `
      매일 아침 6시에 러닝을 시작했습니다. 첫날은 2km, 다음날은 3km, 조금씩 거리를 늘리고 있어요. 
      목표는 한 달 안에 10km 러닝을 완주하는 겁니다! 아침 공기 속에서 달리는 기분은 정말 상쾌하네요.
    `,
    likes: 20,
    comments: 2,
    replies: [
      {
        id: 201,
        userName: "Alice",
        time: "1 hour ago",
        content: "10km 도전이라니 멋지네요! 꾸준히 하시면 꼭 성공하실 거예요!",
        likes: 12,
        comments: 0,
      },
      {
        id: 202,
        userName: "Charlie",
        time: "45 minutes ago",
        content: "스트레칭 꼭 하세요! 부상 방지가 중요하답니다.",
        likes: 9,
        comments: 0,
      },
    ],
  },
  {
    id: 3,
    userName: "Charlie",
    category: "Diet",
    time: "3 hours ago",
    content: "이번 달 목표는 하루 한 끼는 채식으로 먹기입니다. 간단한 샐러드나 비건 음식 레시피를 활용하려고요. 추천 메뉴가 있을까요?",
    likes: 30,
    comments: 4,
    replies: [
      {
        id: 301,
        userName: "Bob",
        time: "2 hours ago",
        content: "비건 샌드위치 한 번 만들어보세요. 아보카도와 구운 채소를 넣으면 맛있답니다!",
        likes: 15,
        comments: 0,
      },
      {
        id: 302,
        userName: "Eve",
        time: "1 hour ago",
        content: "스무디볼도 추천드려요. 다양한 과일과 견과류를 곁들이면 든든해요.",
        likes: 10,
        comments: 0,
      },
    ],
  },
  {
    id: 4,
    userName: "Dave",
    category: "Travel",
    time: "4 hours ago",
    content: `
      다음 달에 일본 여행을 가기로 했습니다! 계획 중인 일정은 도쿄와 교토 관광이에요.
      추천할만한 숨겨진 명소나 맛집이 있다면 알려주세요. 특히 도쿄의 야경을 꼭 보고 싶어요!
    `,
    likes: 50,
    comments: 7,
    replies: [
      {
        id: 401,
        userName: "Alice",
        time: "3 hours ago",
        content: "도쿄 스카이트리 추천드려요! 밤에 가면 야경이 정말 멋있어요.",
        likes: 20,
        comments: 0,
      },
      {
        id: 402,
        userName: "Grace",
        time: "2 hours ago",
        content: "교토에서는 후시미이나리 신사 꼭 가보세요. 아름다운 도리이가 끝도 없이 이어져 있답니다.",
        likes: 15,
        comments: 0,
      },
    ],
  },
  {
    id: 5,
    userName: "Eve",
    category: "Study",
    time: "5 hours ago",
    content: "다음 달에 자격증 시험 준비를 시작하려고 합니다. 하루 2시간씩 공부 계획을 세웠는데, 과연 잘 할 수 있을까요?",
    likes: 18,
    comments: 4,
    replies: [
      {
        id: 501,
        userName: "Charlie",
        time: "4 hours ago",
        content: "계획만 잘 지키면 충분히 가능하실 거예요. 응원합니다!",
        likes: 9,
        comments: 0,
      },
      {
        id: 502,
        userName: "Bob",
        time: "3 hours ago",
        content: "시간을 나눠서 효율적으로 공부해보세요. 중요한 과목부터 먼저 하시면 좋아요.",
        likes: 8,
        comments: 0,
      },
    ],
  },
  {
    id: 6,
    userName: "Frank",
    category: "Hobby",
    time: "6 hours ago",
    content: "취미로 기타를 배우기 시작했어요! 하루 30분씩 연습하면서 간단한 곡들을 연주해보려 합니다. 추천 연습 곡 있나요?",
    likes: 12,
    comments: 1,
    replies: [
      {
        id: 601,
        userName: "Grace",
        time: "5 hours ago",
        content: "Beatles의 'Let it Be' 추천드립니다. 초보자도 쉽게 배울 수 있어요!",
        likes: 6,
        comments: 0,
      },
    ],
  },
  {
    id: 7,
    userName: "백종원",
    category: "Marketing",
    time: "3 hours ago",
    content: `
      요즘 소상공인을 위한 마케팅 강의를 준비 중입니다. 
      SNS 마케팅에서 가장 중요한 건 꾸준함과 진정성입니다. 
      여러분의 가게를 돋보이게 할 방법은 무엇인가요? 함께 고민해봅시다!
    `,
    likes: 35,
    comments: 5,
    replies: [
      {
        id: 701,
        userName: "Alice",
        time: "2 hours ago",
        content: "SNS에서 고객과 소통하는 모습을 보여주는 게 중요한 것 같아요!",
        likes: 12,
        comments: 0,
      },
      {
        id: 702,
        userName: "Bob",
        time: "1 hour ago",
        content: "가게의 스토리를 진솔하게 풀어내면 사람들이 공감할 거예요.",
        likes: 10,
        comments: 0,
      },
    ],
  },
  {
    id: 8,
    userName: "백종원",
    category: "Marketing",
    time: "4 hours ago",
    content: `
      고객에게 신뢰를 주는 가게 운영 방법에 대해 이야기해보고 싶습니다.
      특히 초기 창업자들에게 꼭 필요한 노하우를 나눌 계획이에요.
    `,
    likes: 40,
    comments: 6,
    replies: [
      {
        id: 801,
        userName: "Charlie",
        time: "3 hours ago",
        content: "신뢰는 맛과 서비스에서 나오는 것 같아요! 정성이 중요합니다.",
        likes: 15,
        comments: 0,
      },
    ],
  },
  {
    id: 9,
    userName: "백종원",
    category: "Marketing",
    time: "5 hours ago",
    content: `
      여러분, 매출 증대를 위한 이벤트를 진행할 때 가장 효과적이었던 방법은 무엇인가요? 
      할인 이벤트 외에도 새로운 아이디어를 공유해주세요!
    `,
    likes: 28,
    comments: 3,
    replies: [
      {
        id: 901,
        userName: "Eve",
        time: "4 hours ago",
        content: "쿠폰 적립을 통해 단골 고객을 유치하는 방법이 좋았어요!",
        likes: 8,
        comments: 0,
      },
    ],
  },
  {
    id: 10,
    userName: "백종원",
    category: "Marketing",
    time: "6 hours ago",
    content: `
      창업 초기에 꼭 해야 할 기본적인 것들에 대해 이야기하려고 합니다. 
      손님들에게 사랑받는 가게를 만드는 첫걸음은 무엇일까요?
    `,
    likes: 33,
    comments: 4,
    replies: [
      {
        id: 1001,
        userName: "Frank",
        time: "5 hours ago",
        content: "청결과 손님 응대가 가장 중요한 것 같아요. 기본에 충실합시다!",
        likes: 12,
        comments: 0,
      },
    ],
  },
  {
    id: 11,
    userName: "백종원",
    category: "Marketing",
    time: "7 hours ago",
    content: `
      가게를 위한 브랜딩 로고와 슬로건을 제작하는 방법에 대해 고민해보았습니다.
      여러분의 가게를 돋보이게 할 브랜딩 아이디어를 나눠주세요!
    `,
    likes: 42,
    comments: 5,
    replies: [
      {
        id: 1101,
        userName: "Grace",
        time: "6 hours ago",
        content: "슬로건은 고객에게 직관적으로 다가가야 한다고 생각해요!",
        likes: 14,
        comments: 0,
      },
    ],
  },
];
