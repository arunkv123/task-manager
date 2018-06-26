package com.fsd.taskManager.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.fsd.taskManager.entity.ParentTask;
import com.fsd.taskManager.entity.Task;
import com.fsd.taskManager.repository.ParentTaskRepository;
import com.fsd.taskManager.repository.TaskRepository;
import com.fsd.taskManager.service.TaskService;
import com.fsd.taskManager.vo.TaskDetails;

public class TaskServiceImpl implements TaskService {

	@Autowired
	private ParentTaskRepository parentTaskRepository;

	@Autowired
	private TaskRepository taskRepository;

	@Override
	public boolean addTask(TaskDetails taskDetails) {
		Task task = new Task();
		if (StringUtils.isEmpty(taskDetails.getParentTask())) {
			ParentTask parentTask = new ParentTask();
			parentTask.setParentTask(taskDetails.getTask());
			parentTaskRepository.save(parentTask);
		} else {
			ParentTask parentTask = parentTaskRepository.findByParentTask(taskDetails.getParentTask());
			task.setParentTask(parentTask);
		}
		task.setEndDate(taskDetails.getEndDate());
		task.setPriority(taskDetails.getPriority());
		task.setStartDate(taskDetails.getStartDate());
		task.setTask(taskDetails.getTask());
		taskRepository.save(task);
		return true;
	}

	@Override
	public List<TaskDetails> viewTasks() {
		List<TaskDetails> taskDetails = new ArrayList<>();
		parentTaskRepository.findAll().stream().forEach(new Consumer<ParentTask>() {

			@Override
			public void accept(ParentTask t) {
				TaskDetails details = new TaskDetails();
				details.setParentTask(t.getParentTask());
				// TODO Auto-generated method stub

			}
		});
		return null;
	}

	@Override
	public boolean updateTask(TaskDetails taskDetails) {
		// TODO Auto-generated method stub
		return false;
	}

}
