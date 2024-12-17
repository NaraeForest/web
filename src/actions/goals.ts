"use server";

import {
  getToken,
} from "./action";

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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/goals/${goalId}/sub-goals/${subGoalId}/tasks`, init);
  const json = await res.json();
  return json;
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
  const json = await res.json();
  return json;
};
