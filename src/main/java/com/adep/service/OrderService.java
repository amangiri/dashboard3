package com.adep.service;

import java.util.List;

import com.adep.shared.City;
import com.adep.shared.CustomerSegment;
import com.adep.shared.DepartmentCategory;
import com.adep.shared.Region;
import com.adep.shared.SegmentStateRegion;
import com.adep.shared.State;
import com.adep.shared.Supplier;
import com.adep.shared.Year;

public interface OrderService {

	List<CustomerSegment> findSegment(String selection);

	SegmentStateRegion findSegmentStateRegion(String selection);

	List<Region> findRegion(String selection);

	List<State> findState(String selection);

	DepartmentCategory findDepartmentCategory(String selection);

	List<Supplier> findSupplier(String selection);

	List<City> findCity(String selection);

	Year findYear(String selection);

}
