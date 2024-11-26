import axios from "@/axios";

export const addGoal = async (name: string, category: string) => {
  const body = {
    name,
    category,
  };
  const { data } = await axios.post(`/api/v1/goals`, body);
  return data;
};

export const getGoals = async () => {
  const { data } = await axios.get(`/api/v1/goals`);
  return data;
};

export const getGoal = async (goalId: number) => {
  const { data } = await axios.get(`/api/v1/goals/${goalId}`);
  return data;
};

export const updateGoal = async (goalId: number, name: string, category: string) => {
  const body = {
    name,
    category,
  };
  const { data } = await axios.patch(`/api/v1/goals/${goalId}`, body);
  return data;
};

export const deleteGoal = async (goalId: number) => {
  const { data } = await axios.delete(`/api/v1/goals/${goalId}`);
  return data;
};

export const addSubGoal = async (goalId: number, name: string) => {
  const body = {
    name,
  };
  const { data } = await axios.post(`/api/v1/goals/${goalId}/sub-goals`, body);
  return data;
};

export const getSubGoal = async (goalId: number, subGoalId: number) => {
  const { data } = await axios.get(`/api/v1/goals/${goalId}/sub-goals/${subGoalId}`);
  return data;
};

export const updateSubGoal = async (goalId: number, subGoalId: number, name: string) => {
  const body = {
    name,
  };
  const { data } = await axios.patch(`/api/v1/goals/${goalId}/sub-goals/${subGoalId}`, body);
  return data;
};

export const deleteSubGoal = async (goalId: number, subGoalId: number) => {
  const { data } = await axios.delete(`/api/v1/goals/${goalId}/sub-goals/${subGoalId}`);
  return data;
};

export const addTask = async (goalId: number, subGoalId: number, name: string) => {
  const body = {
    name,
  };
  const { data } = await axios.post(`/api/v1/goals/${goalId}/sub-goals/${subGoalId}/tasks`, body);
  return data;
};

export const completeTask = async (goalId: number, subGoalId: number, taskId: number, complete: boolean) => {
  const body = {
    complete,
  };
  const { data } = await axios.patch(`/api/v1/goals/${goalId}/sub-goals/${subGoalId}/tasks/${taskId}`, body);
  return data;
};

export const deleteTask = async (goalId: number, subGoalId: number, taskId: number) => {
  const { data } = await axios.delete(`/api/v1/goals/${goalId}/sub-goals/${subGoalId}/tasks/${taskId}`);
  return data;
};

export const getUserGoals = async (userId: number) => {
  const { data } = await axios.get(`/api/v1/users/${userId}/goals`);
  return data;
};
