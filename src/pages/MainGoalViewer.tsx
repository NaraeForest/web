import { useRouter } from "next/router";
import { goals } from "../data/Goals";

const MainGoalViewer = () => {
  const router = useRouter();

  const handleBoxClick = (position: string) => {
    router.push(`/SubGoal/${position}`); // 동적 경로로 이동
  };

  const handleEditClick = () => {
    router.push("/MainGoalEdit");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 p-4">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-lg" onClick={() => router.back()}>
          ✕
        </button>
        <h1 className="text-xl font-bold">{goals.mainGoal}</h1>
        <button className="text-lg" onClick={handleEditClick}>
          ✏️
        </button>
      </div>

      {/* 카테고리 */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">{goals.category}</p>
      </div>

      {/* 3x3 Mandalart Grid */}
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {Array.from({ length: 9 }, (_, index) => {
          const isCenter = index === 4;
          const position = isCenter
            ? "center"
            : goals.subGoals[index > 4 ? index - 1 : index]?.position;

          return (
            <div
              key={index}
              onClick={() => handleBoxClick(position!)}
              className={`flex items-center justify-center rounded-lg border p-4 cursor-pointer ${
                isCenter
                  ? "bg-gray-900 text-white font-bold"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {isCenter
                ? goals.mainGoal
                : goals.subGoals[index > 4 ? index - 1 : index]?.goal}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainGoalViewer;
