package com.fsd.taskManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.taskManager.service.TaskService;
import com.fsd.taskManager.vo.TaskDetails;

@RestController
public class TaskController {

	@Autowired
	private TaskService taskService;

	@RequestMapping(value = "/addTask", method = RequestMethod.POST)
	public String addTask(@RequestBody TaskDetails taskDetails) {

		return taskService.addTask(taskDetails) ? "Success" : "failure";

	}
	
	@RequestMapping(value = "/viewTask", method = RequestMethod.POST)
	public List<TaskDetails> viewTask(@RequestBody TaskDetails taskDetails) {
		return null;

		

	}
}
