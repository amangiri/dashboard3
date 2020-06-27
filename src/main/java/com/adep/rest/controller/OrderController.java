package com.adep.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.adep.service.OrderService;
import com.adep.shared.City;
import com.adep.shared.CustomerSegment;
import com.adep.shared.DepartmentCategory;
import com.adep.shared.Region;
import com.adep.shared.SegmentStateRegion;
import com.adep.shared.State;
import com.adep.shared.Supplier;
import com.adep.shared.Year;

@RestController("/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@GetMapping("/segmentStateRegion")
	public SegmentStateRegion findSegmentStateRegion(
			@RequestParam(value = "selection", defaultValue = "discount", required = false) String selection) {

		SegmentStateRegion segmentStateRegion = orderService.findSegmentStateRegion(selection);

		return segmentStateRegion;

	}

	@GetMapping("/segments")
	public List<CustomerSegment> findSegment(
			@RequestParam(value = "selection", defaultValue = "discount", required = false) String selection) {

		List<CustomerSegment> segments = orderService.findSegment(selection);

		return segments;

	}

	@GetMapping("/states")
	public List<State> findState(
			@RequestParam(value = "selection", defaultValue = "discount", required = false) String selection) {

		List<State> states = orderService.findState(selection);

		return states;

	}

	@GetMapping("/departmentCategory")
	public DepartmentCategory findDepartmentCategory(

			@RequestParam(value = "selection", defaultValue = "discount", required = false) String selection) {

		DepartmentCategory departmentCategory = orderService.findDepartmentCategory(selection);

		return departmentCategory;

	}

	@GetMapping("/regions")
	public List<Region> findRegion(
			@RequestParam(value = "selection", defaultValue = "discount", required = false) String selection) {

		List<Region> region = orderService.findRegion(selection);

		return region;

	}

	@GetMapping("/suppliers")
	public List<Supplier> findSupplier(
			@RequestParam(value = "selection", defaultValue = "discount", required = false) String selection) {

		List<Supplier> suppliers = orderService.findSupplier(selection);

		return suppliers;

	}

	@GetMapping("/cities")
	public List<City> findCity(
			@RequestParam(value = "selection", defaultValue = "discount", required = false) String selection) {

		List<City> cities = orderService.findCity(selection);

		return cities;

	}

	@GetMapping("/matric1")
	public Year findMatric1(
			@RequestParam(value = "selection1", defaultValue = "quantity", required = false) String selection) {

		Year year = orderService.findYear(selection);

		return year;

	}

	@GetMapping("/matric2")
	public Year findMatric2(
			@RequestParam(value = "selection2", defaultValue = "discount", required = false) String selection) {

		Year year = orderService.findYear(selection);

		return year;

	}

}
