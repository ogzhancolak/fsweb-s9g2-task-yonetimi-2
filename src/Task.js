import React from "react";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const currentDate = new Date();
  const deadlineDate = new Date(taskObj.deadline);
  const daysRemaining = differenceInDays(deadlineDate, currentDate);

  const getDeadlineBackgroundColor = () => {
    if (daysRemaining <= 3) {
      return "bg-red-200";
    }
    return "";
  };

  return (
    <div className="task p-4 border rounded-lg shadow">
      <h3 className="text-lg font-semibold">{taskObj.title}</h3>
      <div className="deadline mt-2 py-1 px-2 rounded-md">
        <span
          className={`text-sm font-medium ${getDeadlineBackgroundColor()}`}
        >
          Son Teslim: {taskObj.deadline}
        </span>
      </div>
      <p className="text-gray-700 mt-2">{taskObj.description}</p>
      <div className="flex flex-wrap mt-2">
        {taskObj.people.map((p) => (
          <span
            className="pill bg-gray-200 py-1 px-2 mr-2 mb-2 rounded-full text-sm"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="btn-primary mt-4 px-4 py-2 rounded"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
