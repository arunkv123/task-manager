package com.fsd.taskManager.vo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class TaskDetails {

	private String task;

	private int priority;

	private int parentTaskId;
	
	private String parentTask;

	@JsonFormat(pattern="MM/dd/yyyy")
	private Date startDate;

	@JsonFormat(pattern="MM/dd/yyyy")
	private Date endDate;

	public int getParentTaskId() {
		return parentTaskId;
	}

	public void setParentTaskId(int parentTaskId) {
		this.parentTaskId = parentTaskId;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getParentTask() {
		return parentTask;
	}

	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

}
