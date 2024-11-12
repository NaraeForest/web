export default function SubGoal({ name, progress }) {
    return (
      <div className="subGoalCard">
        <h4>{name}</h4>
        <div className="progressBar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress}% complete</p>
  
        <style jsx>{`
          .subGoalCard {
            background-color: #fff;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 16px;
          }
  
          h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
          }
  
          .progressBar {
            width: 100%;
            background-color: #d1d5db;
            border-radius: 4px;
            height: 8px;
            margin-bottom: 8px;
          }
  
          .progress {
            height: 8px;
            background-color: #000;
            border-radius: 4px;
          }
  
          p {
            font-size: 14px;
            color: #6b7280;
          }
        `}</style>
      </div>
    );
  }