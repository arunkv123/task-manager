package com.fsd.taskManager.service;

import java.util.List;

import com.fsd.taskManager.vo.TaskDetails;

public interface TaskService {

	public boolean addTask(TaskDetails taskDetails);

	public List viewTasks();

	public boolean updateTask(TaskDetails taskDetails);
}
