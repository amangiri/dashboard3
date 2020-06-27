package com.adep.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adep.dto.DemoDto;
import com.adep.rest.request.DemoModelRequest;
import com.adep.rest.response.DemoModelResponse;
import com.adep.service.DemoService;

@RestController
@RequestMapping("/demo")
public class DemoController {

	@Autowired
	private DemoService demoService;

	@PostMapping
	public ResponseEntity<DemoModelResponse> save(@RequestBody DemoModelRequest demoModelRequest) {

		DemoDto demoDto = new DemoDto();

		BeanUtils.copyProperties(demoModelRequest, demoDto);

		DemoDto storedDemoDto = demoService.save(demoDto);

		DemoModelResponse responseBody = new DemoModelResponse();

		BeanUtils.copyProperties(storedDemoDto, responseBody);

		return new ResponseEntity<DemoModelResponse>(responseBody, HttpStatus.CREATED);

	}

	@GetMapping("/all")
	public List<DemoModelResponse> getAll() {

		List<DemoDto> storedDemoDto = demoService.getAllDemoes();
		List<DemoModelResponse> demoModel = new ArrayList<>();

		for (DemoDto demoDto : storedDemoDto) {
			DemoModelResponse responseBody = new DemoModelResponse();
			BeanUtils.copyProperties(demoDto, responseBody);
			demoModel.add(responseBody);
		}
		return demoModel;
	}
}
