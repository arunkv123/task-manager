package com.fsd.taskManager.vo;

public class SearchParam {

	private String task;
	
	private String parentTask;
	
	private int priority;

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getParentTask() {
		return parentTask;
	}

	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}
	
}
