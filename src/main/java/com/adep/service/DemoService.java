package com.adep.service;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;

import com.adep.dto.DemoDto;

public interface DemoService {

	DemoDto save(DemoDto demoDto);

	@Cacheable("getAllDemoes")
	List<DemoDto> getAllDemoes();
}
