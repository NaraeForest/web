"use server";

import {
  FetchData,
  getToken,
} from "./action";
import {
  User,
} from "./users";

export type Goal = {
  id: number,
  name: string,
  category: string,
  subGoals: SubGoal[],
  totals: number,
  complete: number,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type SubGoal = {
  id: number,
  name: string,
  goal: Goal,
  tasks: Task[],
  totals: number,
  complete: number,
  createdAt: string,
  updatedAt: string,
}

export type Task = {
  id: number,
  name: string,
  complete: boolean,
  subGoal: SubGoal,
  createdAt: string,
  updatedAt: string,
};

export const createGoal = async (name: string, category: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      name,
      category,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals`, init);
  const json: FetchData<Goal> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const readGoals = async () => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals`, init);
  const json: FetchData<Goal[]> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const readGoal = async (goalId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}`, init);
  const json: FetchData<Goal> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const updateGoal = async (goalId: number, name: string, category: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "PATCH",
    body: JSON.stringify({
      name,
      category,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}`, init);
  const json: FetchData<undefined> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.success;
};

export const deleteGoal = async (goalId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "DELETE",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}`, init);
  const json: FetchData<undefined> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.success;
};

export const createSubGoal = async (goalId: number, name: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      name,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals`, init);
  const json: FetchData<SubGoal> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const readSubGoal = async (goalId: number, subGoalId: number,) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "GET",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals/${subGoalId}`, init);
  const json: FetchData<SubGoal> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const updateSubGoal = async (goalId: number, subGoalId: number, name: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "PATCH",
    body: JSON.stringify({
      name,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals/${subGoalId}`, init);
  const json: FetchData<undefined> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.success;
};

export const deleteSubGoal = async (goalId: number, subGoalId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "DELETE",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals/${subGoalId}`, init);
  const json: FetchData<undefined> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.success;
};

export const createTask = async (goalId: number, subGoalId: number, name: string) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      name,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals/${subGoalId}/tasks`, init);
  const json: FetchData<Task> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.data;
};

export const updateTaskComplete = async (goalId: number, subGoalId: number, taskId: number, complete: boolean) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${token}`,
    },
    method: "PATCH",
    body: JSON.stringify({
      complete,
    }),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals/${subGoalId}/tasks/${taskId}`, init);
  const json: FetchData<undefined> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.success;
};

export const deleteTask = async (goalId: number, subGoalId: number, taskId: number) => {
  const token = await getToken();
  const init: RequestInit = {
    headers: {
      "Authorization": `bearer ${token}`,
    },
    method: "DELETE",
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals/${subGoalId}/tasks/${taskId}`, init);
  const json: FetchData<undefined> = await res.json();
  if (!json.success) {
    throw new Error("Internal server Error");
  }
  return json.success;
};
