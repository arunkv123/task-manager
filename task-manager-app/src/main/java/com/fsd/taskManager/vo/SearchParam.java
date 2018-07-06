package com.fsd.taskManager.vo;

public class SearchParam {

	private String task;
	
	private String parentTask;
	
	private int priorityFrom;
	
	private int priorityTo;

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

	public int getPriorityFrom() {
		return priorityFrom;
	}

	public void setPriorityFrom(int priorityFrom) {
		this.priorityFrom = priorityFrom;
	}

	public int getPriorityTo() {
		return priorityTo;
	}

	public void setPriorityTo(int priorityTo) {
		this.priorityTo = priorityTo;
	}

}
