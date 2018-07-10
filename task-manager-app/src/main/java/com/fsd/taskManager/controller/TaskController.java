package com.fsd.taskManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.taskManager.service.TaskService;
import com.fsd.taskManager.vo.SearchParam;
import com.fsd.taskManager.vo.TaskDetails;

@RestController
@CrossOrigin(methods = { RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST })
public class TaskController {

	@Autowired
	private TaskService taskService;

	// @PreAuthorize(value = "ROLE_USER")
	@RequestMapping(value = "/addTask", method = RequestMethod.POST)
	public String addTask(@RequestBody TaskDetails taskDetails) {

		return taskService.addTask(taskDetails) ? "Success" : "failure";

	}

	// @PreAuthorize(value = "ROLE_USER")
	@RequestMapping(value = "/viewTask", method = RequestMethod.POST)
	public List<TaskDetails> viewTask(@RequestBody SearchParam searchParams) {
		return taskService.viewTasks(searchParams);
	}

	@RequestMapping(value = "/updateTask", method = RequestMethod.POST)
	public String updateTask(@RequestBody TaskDetails taskDetails) {
		return taskService.updateTask(taskDetails) ? "Success" : "failure";
	}
	
	@RequestMapping(value = "/endTask", method = RequestMethod.GET)
	public String endTask(@RequestParam("taskId") long taskId) {
		return taskService.endTask(taskId) ? "Success" : "failure";
	}
}
