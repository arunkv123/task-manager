package com.fsd.taskManager.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.fsd.taskManager.entity.ParentTask;
import com.fsd.taskManager.entity.Task;
import com.fsd.taskManager.repository.ParentTaskRepository;
import com.fsd.taskManager.repository.TaskRepository;
import com.fsd.taskManager.service.TaskService;
import com.fsd.taskManager.vo.SearchParam;
import com.fsd.taskManager.vo.TaskDetails;

@Service("taskService")
public class TaskServiceImpl implements TaskService {

	@Autowired
	private ParentTaskRepository parentTaskRepository;

	@Autowired
	private TaskRepository taskRepository;

	@Override
	public boolean addTask(TaskDetails taskDetails) {
		Task task = new Task();
		Date date = new Date();
		ParentTask parentTask = null;
		if (StringUtils.isEmpty(taskDetails.getParentTask())) {
			parentTask = new ParentTask();
			parentTask.setId(date.getTime());
			parentTask.setParentTask(taskDetails.getTask());
			parentTaskRepository.save(parentTask);
		} else {
			parentTask = parentTaskRepository.findByParentTask(taskDetails.getParentTask());
			if (null == parentTask) {
				parentTask = new ParentTask();
				parentTask.setId(date.getTime());
				parentTask.setParentTask(taskDetails.getParentTask());
				parentTaskRepository.save(parentTask);
			}
		}
		task.setTaskId(date.getTime());
		task.setParentTask(parentTask);
		task.setEndDate(taskDetails.getEndDate());
		task.setPriority(taskDetails.getPriority());
		task.setStartDate(taskDetails.getStartDate());
		task.setTask(taskDetails.getTask());
		task.setEndTask(0);
		taskRepository.save(task);
		return true;
	}

	@Override
	public List<TaskDetails> viewTasks(SearchParam searchParam) {
		List<TaskDetails> taskDetails = new ArrayList<>();
		taskRepository.search(searchParam.getTask(), searchParam.getParentTask(), searchParam.getPriorityFrom(),
				searchParam.getPriorityTo()).stream().forEach(new Consumer<Task>() {

					@Override
					public void accept(Task t) {
						TaskDetails details = new TaskDetails();
						details.setId(t.getTaskId());
						details.setTask(t.getTask());
						details.setParentTask(t.getParentTask().getParentTask());
						details.setPriority(t.getPriority());
						details.setEndDate(t.getEndDate());
						details.setStartDate(t.getStartDate());
						taskDetails.add(details);
					}
				});
		return taskDetails;
	}

	@Override
	public boolean updateTask(TaskDetails taskDetails) {

		Task task = taskRepository.findById(taskDetails.getId()).get();
		Date date = new Date();
		ParentTask parentTask = null;
		if (StringUtils.isEmpty(taskDetails.getParentTask())) {
			parentTask = new ParentTask();
			parentTask.setId(date.getTime());
			parentTask.setParentTask(taskDetails.getTask());
			parentTaskRepository.save(parentTask);
		} else {
			parentTask = parentTaskRepository.findByParentTask(taskDetails.getParentTask());
			if (null == parentTask) {
				parentTask = new ParentTask();
				parentTask.setId(date.getTime());
				parentTask.setParentTask(taskDetails.getParentTask());
				parentTaskRepository.save(parentTask);
			}
		}
		task.setParentTask(parentTask);
		task.setEndDate(taskDetails.getEndDate());
		task.setPriority(taskDetails.getPriority());
		task.setStartDate(taskDetails.getStartDate());
		task.setTask(taskDetails.getTask());
		taskRepository.save(task);

		return true;
	}

	@Override
	public boolean endTask(long taskId) {
		Task task = taskRepository.findById(taskId).get();
		task.setEndTask(1);
		task.setEndDate(new Date());
		taskRepository.save(task);
		return true;
	}

}
