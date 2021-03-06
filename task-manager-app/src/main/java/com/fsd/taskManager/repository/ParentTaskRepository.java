package com.fsd.taskManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsd.taskManager.entity.ParentTask;

public interface ParentTaskRepository extends JpaRepository<ParentTask, Long>{

	public ParentTask findByParentTask(String parentTask);
}
