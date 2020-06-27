package com.adep.service.impl;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adep.entity.OrderEntity;
import com.adep.repository.OrderRepository;
import com.adep.service.OrderService;
import com.adep.shared.City;
import com.adep.shared.CustomerSegment;
import com.adep.shared.DepartmentCategory;
import com.adep.shared.Region;
import com.adep.shared.SegmentStateRegion;
import com.adep.shared.State;
import com.adep.shared.SubCategory;
import com.adep.shared.Supplier;
import com.adep.shared.Year;
import com.adep.shared.YearData;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public List<CustomerSegment> findSegment(String selection) {

		List<CustomerSegment> customerSegments = new ArrayList<CustomerSegment>();

		if (selection.equalsIgnoreCase("discount")) {
//			List<Object[]> orderSegment = orderRepository.findDiscountSegment();
			customerSegments = segmentSelection(orderRepository.findDiscountSegment());
		} else if (selection.equalsIgnoreCase("profit")) {
			customerSegments = segmentSelection(orderRepository.findProfitSegment());
		} else if (selection.equalsIgnoreCase("quantity")) {
			customerSegments = segmentSelection(orderRepository.findQuantitySegment());
		} else if (selection.equalsIgnoreCase("sales")) {
			customerSegments = segmentSelection(orderRepository.findSalesSegment());
		} else if (selection.equalsIgnoreCase("price")) {
			customerSegments = segmentSelection(orderRepository.findPriceSegment());
		} else if (selection.equalsIgnoreCase("margin")) {
			customerSegments = segmentSelection(orderRepository.findMarginSegment());
		}

		return customerSegments;
	}

	@Transactional
	@Override
	public SegmentStateRegion findSegmentStateRegion(String selection) {

		SegmentStateRegion segmentStateRegion = new SegmentStateRegion();

		List<CustomerSegment> customerSegments = new ArrayList<CustomerSegment>();

		List<Region> regions = new ArrayList<Region>();

		List<State> states = new ArrayList<State>();

		if (selection.equalsIgnoreCase("discount")) {
//			List<Object[]> orderSegment = orderRepository.findDiscountSegment();
			customerSegments = segmentSelection(orderRepository.findDiscountSegment());
			regions = regionSelection(orderRepository.findDiscountRegion());
			states = stateSelection(orderRepository.findDiscountState());
		} else if (selection.equalsIgnoreCase("profit")) {
			customerSegments = segmentSelection(orderRepository.findProfitSegment());
			regions = regionSelection(orderRepository.findProfitRegion());
			states = stateSelection(orderRepository.findProfitState());
		} else if (selection.equalsIgnoreCase("quantity")) {
			customerSegments = segmentSelection(orderRepository.findQuantitySegment());
			regions = regionSelection(orderRepository.findQuantityRegion());
			states = stateSelection(orderRepository.findQuantityState());
		} else if (selection.equalsIgnoreCase("sales")) {
			customerSegments = segmentSelection(orderRepository.findSalesSegment());
			regions = regionSelection(orderRepository.findSalesRegion());
			states = stateSelection(orderRepository.findSalesState());
		} else if (selection.equalsIgnoreCase("price")) {
			customerSegments = segmentSelection(orderRepository.findPriceSegment());
			regions = regionSelection(orderRepository.findPriceRegion());
			states = stateSelection(orderRepository.findPriceState());
		} else if (selection.equalsIgnoreCase("margin")) {
			customerSegments = segmentSelection(orderRepository.findMarginSegment());
			regions = regionSelection(orderRepository.findMarginRegion());
			states = stateSelection(orderRepository.findMarginState());
		}
		segmentStateRegion.setCustomerSegments(customerSegments);
		Collections.sort(regions, Comparator.comparing(Region::getData));
		segmentStateRegion.setRegions(regions);
		Collections.sort(states, Comparator.comparing(State::getId));
		segmentStateRegion.setStates(states);

		return segmentStateRegion;
	}

	@Override
	public List<Region> findRegion(String selection) {

		List<Region> regions = new ArrayList<Region>();
		if (selection.equalsIgnoreCase("discount")) {
//			List<Object[]> orderRegion = orderRepository.findDiscountRegion();
			regions = regionSelection(orderRepository.findDiscountRegion());
		} else if (selection.equalsIgnoreCase("profit")) {
			regions = regionSelection(orderRepository.findProfitRegion());
		} else if (selection.equalsIgnoreCase("quantity")) {
			regions = regionSelection(orderRepository.findQuantityRegion());
		} else if (selection.equalsIgnoreCase("sales")) {
			regions = regionSelection(orderRepository.findSalesRegion());
		} else if (selection.equalsIgnoreCase("price")) {
			regions = regionSelection(orderRepository.findPriceRegion());
		} else if (selection.equalsIgnoreCase("margin")) {
			regions = regionSelection(orderRepository.findMarginRegion());
		}

		Collections.sort(regions, Comparator.comparing(Region::getData));

		return regions;
	}

	@Override
	public List<State> findState(String selection) {
		List<State> states = new ArrayList<State>();

		if (selection.equalsIgnoreCase("discount")) {
//			List<Object[]> orderState = orderRepository.findDiscountState();
			states = stateSelection(orderRepository.findDiscountState());
		} else if (selection.equalsIgnoreCase("profit")) {
			states = stateSelection(orderRepository.findProfitState());
		} else if (selection.equalsIgnoreCase("quantity")) {
			states = stateSelection(orderRepository.findQuantityState());
		} else if (selection.equalsIgnoreCase("sales")) {
			states = stateSelection(orderRepository.findSalesState());
		} else if (selection.equalsIgnoreCase("price")) {
			states = stateSelection(orderRepository.findPriceState());
		} else if (selection.equalsIgnoreCase("margin")) {
			states = stateSelection(orderRepository.findMarginState());
		}
		Collections.sort(states, Comparator.comparing(State::getId));
		return states;

	}

	@Override
	public DepartmentCategory findDepartmentCategory(String selection) {
		List<SubCategory> subCategories = new ArrayList<SubCategory>();

		if (selection.equalsIgnoreCase("discount")) {
			subCategories = subCategorySelection(orderRepository.findDiscountSubCategory());
		} else if (selection.equalsIgnoreCase("profit")) {
			subCategories = subCategorySelection(orderRepository.findProfitSubCategory());
		} else if (selection.equalsIgnoreCase("quantity")) {
			subCategories = subCategorySelection(orderRepository.findQuantitySubCategory());
		} else if (selection.equalsIgnoreCase("sales")) {
			subCategories = subCategorySelection(orderRepository.findSalesSubCategory());
		} else if (selection.equalsIgnoreCase("price")) {
			subCategories = subCategorySelection(orderRepository.findPriceSubCategory());
		} else if (selection.equalsIgnoreCase("margin")) {
			subCategories = subCategorySelection(orderRepository.findMarginSubCategory());
		}
		Collections.sort(subCategories, Comparator.comparing(SubCategory::getDeparment));
		List<SubCategory> furniture = new ArrayList<SubCategory>();
		List<SubCategory> office = new ArrayList<SubCategory>();
		List<SubCategory> technology = new ArrayList<SubCategory>();
		for (SubCategory subCategory : subCategories) {
			if (subCategory.getDeparment().equalsIgnoreCase("Furniture")) {
				furniture.add(subCategory);
			} else if (subCategory.getDeparment().equalsIgnoreCase("Office Supplies")) {
				office.add(subCategory);
			} else if (subCategory.getDeparment().equalsIgnoreCase("Technology")) {
				technology.add(subCategory);
			}
		}
		Collections.sort(furniture, Comparator.comparing(SubCategory::getMatric));
		Collections.sort(office, Comparator.comparing(SubCategory::getMatric));
		Collections.sort(technology, Comparator.comparing(SubCategory::getMatric));

		Collections.sort(subCategories, Comparator.comparing(SubCategory::getMatric));

		DepartmentCategory departmentCategory = new DepartmentCategory();

		departmentCategory.setFurniture(furniture);
		departmentCategory.setOffice(office);
		departmentCategory.setTechnology(technology);
		departmentCategory.setSubCategories(subCategories);

		return departmentCategory;
	}

	@Override
	public List<City> findCity(String selection) {

		List<City> cities = new ArrayList<City>();

		if (selection.equalsIgnoreCase("discount")) {
			cities = citySelection(orderRepository.findDiscountCity());
		} else if (selection.equalsIgnoreCase("profit")) {
			cities = citySelection(orderRepository.findProfitCity());
		} else if (selection.equalsIgnoreCase("quantity")) {
			cities = citySelection(orderRepository.findQuantityCity());
		} else if (selection.equalsIgnoreCase("sales")) {
			cities = citySelection(orderRepository.findSalesCity());
		} else if (selection.equalsIgnoreCase("price")) {
			cities = citySelection(orderRepository.findPriceCity());
		} else if (selection.equalsIgnoreCase("margin")) {
			cities = citySelection(orderRepository.findMarginCity());
		}
		Collections.sort(cities, Comparator.comparing(City::getValue).reversed());

		List<City> topCities = new ArrayList<City>();
		for (int i = 0; i < 10; i++) {
			topCities.add(cities.get(i));
		}

		return topCities;

	}

	@Override
	public List<Supplier> findSupplier(String selection) {

		Iterable<OrderEntity> orders = orderRepository.findAll();

		List<OrderEntity> result = StreamSupport.stream(orders.spliterator(), false).collect(Collectors.toList());

		List<Supplier> suppliers = new ArrayList<Supplier>();

		for (OrderEntity orderEntity : result) {
			Supplier supplier = new Supplier();
			if (selection.equalsIgnoreCase("discount")) {
				supplier.setName(orderEntity.getProductName());
				supplier.setValue(orderEntity.getDiscount());
			} else if (selection.equalsIgnoreCase("profit")) {
				supplier.setName(orderEntity.getProductName());
				supplier.setValue(orderEntity.getProfit());
			} else if (selection.equalsIgnoreCase("quantity")) {
				supplier.setName(orderEntity.getProductName());
				supplier.setValue(orderEntity.getQuantity());
			} else if (selection.equalsIgnoreCase("sales")) {
				supplier.setName(orderEntity.getProductName());
				supplier.setValue(orderEntity.getSales());
			} else if (selection.equalsIgnoreCase("price")) {
				supplier.setName(orderEntity.getProductName());
				supplier.setValue(orderEntity.getPrice());
			} else if (selection.equalsIgnoreCase("margin")) {
				supplier.setName(orderEntity.getProductName());
				supplier.setValue(orderEntity.getMargin());
			}
			suppliers.add(supplier);
		}

		Map<String, List<Supplier>> orderMap = new HashMap<>();
		for (Supplier s : suppliers) {
			if (s.getName().matches("^([0-9]|#|\")(.*)")) {
				s.setName("others");
			}
			if (!orderMap.containsKey(s.getName().replaceAll("( | )(.*)", ""))) {
				orderMap.put(s.getName().replaceAll("( | )(.*)", ""), new ArrayList<>());
			}
			orderMap.get(s.getName().replaceAll("( | )(.*)", "")).add(s);
		}
		List<Supplier> listSupplier = new ArrayList<Supplier>();
		for (Map.Entry<String, List<Supplier>> pair : orderMap.entrySet()) {
			Supplier supplier = new Supplier();
			supplier.setName(pair.getKey());
			Double value = (double) 0;
			for (int i = 0; i < pair.getValue().size(); i++) {
				value = value + pair.getValue().get(i).getValue();
			}
			supplier.setValue(value);
			listSupplier.add(supplier);
		}
		Collections.sort(listSupplier, Comparator.comparing(Supplier::getName));
		return listSupplier;
	}

	private List<SubCategory> subCategorySelection(List<Object[]> orderSegment) {

		List<SubCategory> subCategories = new ArrayList<SubCategory>();

		for (int i = 0; i < orderSegment.size(); i++) {
			Object[] segmantValue = orderSegment.get(i);
			SubCategory subCategory = new SubCategory();
			subCategory.setDeparment(String.valueOf(segmantValue[0]));
			subCategory.setCategory(String.valueOf(segmantValue[1]));
			Double matric = Double.parseDouble(String.valueOf(segmantValue[2]));
			subCategory.setMatric(matric);
			subCategories.add(subCategory);
		}
		return subCategories;
	}

	private List<CustomerSegment> segmentSelection(List<Object[]> orderSegment) {

		List<CustomerSegment> customerSegments = new ArrayList<CustomerSegment>();

		for (int i = 0; i < orderSegment.size(); i++) {
			Object[] segmantValue = orderSegment.get(i);
			CustomerSegment customerSegment = new CustomerSegment();
			customerSegment.setSegmentName(String.valueOf(segmantValue[0]));
			Double matric = Double.parseDouble(String.valueOf(segmantValue[1]));
			customerSegment.setMatric(matric);
			customerSegments.add(customerSegment);
		}
		return customerSegments;
	}

	private List<Region> regionSelection(List<Object[]> orderSegment) {

		List<Region> regions = new ArrayList<Region>();

		for (int i = 0; i < orderSegment.size(); i++) {
			Object[] segmantValue = orderSegment.get(i);
			Region region = new Region();
			region.setName(String.valueOf(segmantValue[0]));
			Double matric = Double.parseDouble(String.valueOf(segmantValue[1]));
			region.setData(matric);
			if (i == 0) {
				region.setColor("blue");
			} else if (i == 1) {
				region.setColor("orange");
			} else if (i == 2) {
				region.setColor("red");
			} else if (i == 3) {
				region.setColor("#c01fed");
			} else {
				region.setColor("green");
			}
			regions.add(region);
		}

		return regions;
	}

	private List<State> stateSelection(List<Object[]> orderSegment) {

		List<State> states = new ArrayList<State>();

		for (int i = 0; i < orderSegment.size(); i++) {
			Object[] segmantValue = orderSegment.get(i);
			State state = new State();
			state.setId(String.valueOf(segmantValue[0]).toUpperCase());
			Double value = Double.parseDouble(String.valueOf(segmantValue[1]));
			state.setValue(value);
			states.add(state);
		}
		return states;
	}

	private List<City> citySelection(List<Object[]> orderSegment) {

		List<City> cities = new ArrayList<City>();

		for (int i = 0; i < orderSegment.size(); i++) {
			Object[] segmantValue = orderSegment.get(i);
			City city = new City();
			city.setName(String.valueOf(segmantValue[0]).toUpperCase());
			Double value = Double.parseDouble(String.valueOf(segmantValue[1]));
			city.setValue(value);
			cities.add(city);
		}
		return cities;
	}

	@Transactional
	@Override
	public Year findYear(String selection) {

		List<String> data = orderRepository.findYear();

		List<String> years = data.stream().sorted().collect(Collectors.toList());

		List<YearData> yearList = new ArrayList<YearData>();
		List<Double> allYearData = new ArrayList<Double>();
		for (int i = 0; i < years.size(); i++) {
			if (selection.equalsIgnoreCase("discount")) {
				yearList.add(getYearData(orderRepository.findDiscount(years.get(i)), selection));
			} else if (selection.equalsIgnoreCase("profit")) {
				yearList.add(getYearData(orderRepository.findProfit(years.get(i)), selection));
			} else if (selection.equalsIgnoreCase("quantity")) {
				yearList.add(getYearData(orderRepository.findQuantity(years.get(i)), selection));
			} else if (selection.equalsIgnoreCase("sales")) {
				yearList.add(getYearData(orderRepository.findSales(years.get(i)), selection));
			} else if (selection.equalsIgnoreCase("price")) {
				yearList.add(getYearData(orderRepository.findPrice(years.get(i)), selection));
			} else if (selection.equalsIgnoreCase("margin")) {
				yearList.add(getYearData(orderRepository.findMargin(years.get(i)), selection));
			}
			allYearData.addAll(yearList.get(i).getValue());
		}
		Year year = new Year();
		year.setYear(years);
		year.setYearDataList(yearList);
		year.setAllYearData(allYearData);
		return year;

	}

	private YearData getYearData(List<Object[]> list, String discount) {
		Double zero = (double) 0;
		Double dataJan = zero;
		Double dataFeb = zero;
		Double dataMar = zero;
		Double dataApr = zero;
		Double dataMay = zero;
		Double dataJun = zero;
		Double dataJul = zero;
		Double dataAug = zero;
		Double dataSep = zero;
		Double dataOct = zero;
		Double dataNov = zero;
		Double dataDec = zero;
		Double countJan = zero;
		Double countFeb = zero;
		Double countMar = zero;
		Double countApr = zero;
		Double countMay = zero;
		Double countJun = zero;
		Double countJul = zero;
		Double countAug = zero;
		Double countSep = zero;
		Double countOct = zero;
		Double countNov = zero;
		Double countDec = zero;
		boolean isDiscount = discount.equals("discount");
		for (int j = 0; j < list.size(); j++) {
			Object[] orderEntity = list.get(j);
			Date orderDate = (Date) orderEntity[0];
			LocalDate localDate = orderDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
			if (1 == localDate.getMonthValue()) {
				dataJan = dataJan + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countJan++;
				}
			} else if (2 == localDate.getMonthValue()) {
				dataFeb = dataFeb + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countFeb++;
				}
			} else if (3 == localDate.getMonthValue()) {
				dataMar = dataMar + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countMar++;
				}
			} else if (4 == localDate.getMonthValue()) {
				dataApr = dataApr + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countApr++;
				}
			} else if (5 == localDate.getMonthValue()) {
				dataMay = dataMay + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countMay++;
				}
			} else if (6 == localDate.getMonthValue()) {
				dataJun = dataJun + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countJun++;
				}
			} else if (7 == localDate.getMonthValue()) {
				dataJul = dataJul + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countJul++;
				}
			} else if (8 == localDate.getMonthValue()) {
				dataAug = dataAug + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countAug++;
				}
			} else if (9 == localDate.getMonthValue()) {
				dataSep = dataSep + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countSep++;
				}
			} else if (10 == localDate.getMonthValue()) {
				dataOct = dataOct + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countOct++;
				}
			} else if (11 == localDate.getMonthValue()) {
				dataNov = dataNov + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countNov++;
				}
			} else if (12 == localDate.getMonthValue()) {
				dataDec = dataDec + Double.parseDouble(String.valueOf(orderEntity[1]));
				if (isDiscount) {
					countDec++;
				}
			}
		}

		List<Double> yearData = new ArrayList<Double>();
		if (isDiscount) {
			yearData.add(dataJan / countJan * 100);
			yearData.add(dataFeb / countFeb * 100);
			yearData.add(dataMar / countMar * 100);
			yearData.add(dataApr / countApr * 100);
			yearData.add(dataMay / countMay * 100);
			yearData.add(dataJun / countJun * 100);
			yearData.add(dataJul / countJul * 100);
			yearData.add(dataAug / countAug * 100);
			yearData.add(dataSep / countSep * 100);
			yearData.add(dataOct / countOct * 100);
			yearData.add(dataNov / countNov * 100);
			yearData.add(dataDec / countDec * 100);

		} else {
			yearData.add(dataJan);
			yearData.add(dataFeb);
			yearData.add(dataMar);
			yearData.add(dataApr);
			yearData.add(dataMay);
			yearData.add(dataJun);
			yearData.add(dataJul);
			yearData.add(dataAug);
			yearData.add(dataSep);
			yearData.add(dataOct);
			yearData.add(dataNov);
			yearData.add(dataDec);
		}
		YearData yearDataList = new YearData();
		yearDataList.setValue(yearData);
		return yearDataList;
	}

}
