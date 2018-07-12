package com.taskManager.test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

import com.fsd.taskManager.TaskManagerApplication;
import com.fsd.taskManager.service.TaskService;
import com.fsd.taskManager.vo.TaskDetails;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT, classes = TaskManagerApplication.class)
public class TaskManagerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@LocalServerPort
	private int serverPort;
	
	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private TaskService taskService;
	@Test
	public void addTaskTest() {
		TaskDetails request = new TaskDetails();
		request.setParentTask("Sprint2");
		request.setTask("Test task");
		request.setPriority(12);
		request.setStartDate(new Date());
		request.setEndDate(new Date());
		ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:"+serverPort+"/addTask", request, String.class);
		assertEquals("Success", response.getBody());
	}
	
	@Test
	public void addTaskMockTest() throws Exception {
		TaskDetails request = new TaskDetails();
		request.setParentTask("Sprint2");
		request.setTask("Test task");
		request.setPriority(12);
		request.setStartDate(new Date());
		request.setEndDate(new Date());
		when(taskService.addTask(request)).thenReturn(true);
		this.mockMvc.perform(get("/addTask")).andExpect(status().isOk());
	}
	
}
