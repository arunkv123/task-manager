package com.fsd.taskManager.service;

import java.util.List;

import com.fsd.taskManager.entity.Task;
import com.fsd.taskManager.vo.SearchParam;
import com.fsd.taskManager.vo.TaskDetails;

public interface TaskService {

	public boolean addTask(TaskDetails taskDetails);

	public List<TaskDetails> viewTasks(SearchParam searchParam);

	public boolean updateTask(TaskDetails taskDetails);
	
	public boolean endTask(long taskId);
}
