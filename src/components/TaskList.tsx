import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
    onProgressChange: (progress: number) => void;
  }

const TaskList: React.FC<TaskListProps> = ({ onProgressChange }) => {
  // Task 타입을 사용하여 tasks의 타입을 명확히 정의합니다.
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Create playbook file', completed: false },
    { id: 2, text: 'Modify playbook file', completed: false },
    { id: 3, text: 'Delete playbook file', completed: false },
    { id: 4, text: 'Recreate playbook file', completed: false },
  ]);


  // 진행률을 계산하고 부모 컴포넌트에 전달하는 함수
  const updateProgress = (updatedTasks: Task[]) => {
    const completedTasks = updatedTasks.filter((task) => task.completed).length;
    const progress = Math.round((completedTasks / updatedTasks.length) * 100);
    onProgressChange(progress);
  };

  const handleAddTask = (text: string) => {
    const newTask: Task = { id: tasks.length + 1, text, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    updateProgress(updatedTasks);
  };

  const handleToggleTask = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    updateProgress(updatedTasks);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    updateProgress(updatedTasks);
  };

  return (
    <div className="taskList bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className="mr-2"
            />
            <span className="flex-1">{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-black hover:text-gray-700 ml-4"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Add a new task"
          className="border border-gray-300 p-2 rounded flex-grow mr-2" // flex-grow 추가로 입력창이 버튼 제외 공간 채움
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
              handleAddTask((e.target as HTMLInputElement).value.trim());
              (e.target as HTMLInputElement).value = '';
            }
          }}
        />
        <button
          onClick={() => {
            const inputElement = document.querySelector("input[type='text']") as HTMLInputElement;
            const taskText = inputElement?.value.trim();
            if (taskText) {
              handleAddTask(taskText);
              inputElement.value = '';
            }
          }}
          className="bg-black text-white p-2 rounded hover:bg-gray-800" // 버튼 색상 검정으로 변경
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskList;