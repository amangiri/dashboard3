package com.adep.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.adep.dto.DemoDto;
import com.adep.entity.DemoEntity;
import com.adep.repository.DemoRepository;
import com.adep.service.DemoService;

@Service
public class DemoServiceImpl implements DemoService {

	@Autowired
	private DemoRepository demoRepository;

	/*
	 * @Caching(evict = {
	 * 
	 * @CacheEvict(value="getAllDemoes", allEntries=true),
	 * 
	 * @CacheEvict(value="deliveries", allEntries=true)})
	 */

	@CacheEvict(value = "getAllDemoes", allEntries = true)
	@Override
	public DemoDto save(DemoDto demoDto) {

		DemoEntity demoEntity = new DemoEntity();

		BeanUtils.copyProperties(demoDto, demoEntity);

		DemoEntity storedDemoEntity = demoRepository.save(demoEntity);

		DemoDto storedDemoDto = new DemoDto();

		BeanUtils.copyProperties(storedDemoEntity, storedDemoDto);

		return storedDemoDto;
	}

	@Cacheable("getAllDemoes")
	@Override
	public List<DemoDto> getAllDemoes() {
		Iterable<DemoEntity> demoEntities = demoRepository.findAll();
		List<DemoDto> demoDto = new ArrayList<DemoDto>();
		for (DemoEntity demoEntity : demoEntities) {
			DemoDto storedDemoDto = new DemoDto();
			BeanUtils.copyProperties(demoEntity, storedDemoDto);
			demoDto.add(storedDemoDto);
		}
		return demoDto;
	}

}
