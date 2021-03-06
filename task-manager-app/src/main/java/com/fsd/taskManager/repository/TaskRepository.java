package com.fsd.taskManager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fsd.taskManager.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

	@Query(value = "Select t From Task t where t.task=?1 or t.parentTask=?2 or (t.priority>=?3 or t.priority<=?4)")
	public List<Task> search(String task, String parentTask, int priorityFrom, int priorityTo);
}
