export default function SubGoal({ name, progress }) {
  return (
    <div className="subGoalCard bg-white p-4 rounded-lg shadow-md mb-4">
      <h4 className="text-base font-semibold mb-2">{name}</h4>
      <div className="progressBar w-full bg-gray-300 rounded-full h-2 mb-2">
        <div
          className="progress bg-black h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">{progress}% complete</p>
    </div>
  );
}
