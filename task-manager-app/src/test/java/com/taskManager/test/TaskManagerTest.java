package com.taskManager.test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.Future;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import com.fsd.taskManager.TaskManagerApplication;
import com.fsd.taskManager.service.TaskService;
import com.fsd.taskManager.vo.SearchParam;
import com.fsd.taskManager.vo.TaskDetails;

@RunWith(SpringJUnit4ClassRunner.class)
//@WebMvcTest
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT, classes = TaskManagerApplication.class)
public class TaskManagerTest {

	@Autowired
	private WebApplicationContext context;
	
	private MockMvc mockMvc;
	
	@LocalServerPort
	private int serverPort;
	
	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private TaskService taskService;
	
	@Before
	public void setUp() {
		mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
	}
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
	
	/**
	 * 
	 */
	@Test
	public void performanceTest() {
		SearchParam request = new SearchParam();
		request.setPriorityFrom(0);
		request.setPriorityTo(30);
		ResponseEntity<List> initalList = restTemplate.postForEntity("http://localhost:"+serverPort+"/viewTask", request, List.class);
		int initialRows =initalList.getBody().size();
		try {
			Map<Integer,Future<ResponseEntity<String>>> result = new HashMap<>(); 
			for(int i=0;i<1000;i++) {
				System.out.println("thread "+i+" started");
				result.put(i, post());
			}
			for (Integer pos : result.keySet()) {
				System.out.println("the result for data in position "+pos+" is "+result.get(pos).get().getBody());
			}
			ResponseEntity<List> newList = restTemplate.postForEntity("http://localhost:"+serverPort+"/viewTask", request, List.class);
			int newRows =newList.getBody().size();
			assertEquals(998 , newRows-initialRows);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
	@Async
	private Future<ResponseEntity<String>> post(){
		Random rand = new Random();
		TaskDetails request = new TaskDetails();
		request.setParentTask("Sprint2");
		request.setTask("Test task"+rand.nextInt());
		request.setPriority(12);
		request.setStartDate(new Date());
		request.setEndDate(new Date());
		ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:"+serverPort+"/addTask", request, String.class);
		//assertEquals("Success", response.getBody());
		return new AsyncResult<>(response);
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
	
	@Test
	public void viewTaskMockTest() throws Exception {
		SearchParam request = new SearchParam();
		request.setPriorityFrom(0);
		request.setPriorityTo(30);
		ResponseEntity<List> response = restTemplate.postForEntity("http://localhost:"+serverPort+"/viewTask", request, List.class);
		System.out.println(response.getBody().size());
	}
	
}
