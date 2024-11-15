import { useRouter } from "next/router";
import { goals } from "../data/Goals";
import Footer from "../components/footer"; // Footer 컴포넌트 가져오기

const MainGoalViewer = () => {
  const router = useRouter();

  const handleBoxClick = (position: string, goalName: string) => {
    router.push({
      pathname: "/subgoalviewer",
      query: { position, subGoalName: goalName },
    });
  };

  const handleEditClick = () => {
    router.push("/maingoaledit");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* 헤더 */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="text-lg" onClick={() => router.back()}>
            ✕
          </button>
          <h1 className="text-xl font-bold text-gray-800">{goals.mainGoal}</h1>
          <button className="text-lg" onClick={handleEditClick}>
            <img src="/pencil.svg" alt="Edit" />
          </button>
        </div>

        {/* 카테고리 */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">{goals.category}</p>
        </div>
      </div>

      {/* 3x3 Mandalart Grid */}
      <div
        className="flex-grow flex justify-center items-center"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "8px",
          aspectRatio: "1 / 1",
          maxHeight: "65%", // 만다라트가 전체 화면의 약 2/3 차지
          margin: "0 auto",
        }}
      >
        {Array.from({ length: 9 }, (_, index) => {
          const isCenter = index === 4;
          const subGoal = goals.subGoals[index > 4 ? index - 1 : index];
          const position = isCenter ? "center" : subGoal?.position;

          return (
            <div
              key={index}
              onClick={() =>
                !isCenter &&
                handleBoxClick(position!, subGoal?.goal || "Undefined Goal")
              }
              className={`flex items-center justify-center rounded-md border-2 cursor-pointer transition-transform transform hover:scale-105 ${
                isCenter
                  ? "bg-black text-white font-bold"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
              style={{
                aspectRatio: "1 / 1",
              }}
            >
              {isCenter ? goals.mainGoal : subGoal?.goal}
            </div>
          );
        })}
      </div>

      {/* 추천 서비스 영역 */}
      <div
        className="flex items-center justify-center bg-gray-200 rounded-lg shadow-inner mt-4"
        style={{
          minHeight: "20%", // 추천 서비스 영역은 일정 높이 차지
          marginBottom: "56px", // Footer 높이를 고려해 여백 추가
        }}
      >
        <p className="text-gray-500">추천 서비스 및 트렌드 분석 영역</p>
      </div>

      {/* Footer 추가 */}
      <Footer />
    </div>
  );
};

export default MainGoalViewer;
