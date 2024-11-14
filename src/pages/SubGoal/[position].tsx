import { useRouter } from "next/router";
import { goals } from "../../data/Goals";

const SubGoalViewer = () => {
  const router = useRouter();
  const { position } = router.query; // URL에서 서브 골 위치 추출

  // 현재 위치에 해당하는 서브 골 데이터 찾기
  const subGoal = goals.subGoals.find((goal) => goal.position === position);

  if (!subGoal) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">Sub Goal not found.</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100 p-4">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-lg" onClick={() => router.back()}>
          ←
        </button>
        <h1 className="text-xl font-bold">{subGoal.goal}</h1>
      </div>

      {/* 내용 */}
      <div className="flex-1">
        <p>Tasks related to {subGoal.goal}</p>
      </div>

      {/* 편집 버튼 */}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => router.push(`/SubGoal/edit/${position}`)}
      >
        Edit Sub Goal
      </button>
    </div>
  );
};

export default SubGoalViewer;
