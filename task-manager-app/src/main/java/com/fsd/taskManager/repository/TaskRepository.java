package com.fsd.taskManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsd.taskManager.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}
