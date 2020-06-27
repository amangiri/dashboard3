package com.adep.repository;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.adep.entity.OrderEntity;

@Repository
public interface OrderRepository extends CrudRepository<OrderEntity, Long> {

	@Cacheable("findAll")
	Iterable<OrderEntity> findAll();

	@Cacheable("findByYear")
	@Query(value = "select * from usorders o where IFNULL(o.order_date, '') regexp?1", nativeQuery = true)
	List<OrderEntity> findByYear(String year);

	@Cacheable("findYear")
	@Query(value = "select distinct(year(order_date)) from usorders ", nativeQuery = true)
	List<String> findYear();

//
	@Cacheable("findDiscount")
	@Query(value = "select order_date, discount from usorders o where IFNULL(o.order_date, '') regexp?1 ", nativeQuery = true)
	List<Object[]> findDiscount(String orderDate);

	@Cacheable("findProfit")
	@Query(value = "select order_date, profit from usorders o where IFNULL(o.order_date, '') regexp?1 ", nativeQuery = true)
	List<Object[]> findProfit(String orderDate);

	@Cacheable("findQuantity")
	@Query(value = "select order_date, quantity from usorders o where IFNULL(o.order_date, '') regexp?1 ", nativeQuery = true)
	List<Object[]> findQuantity(String orderDate);

	@Cacheable("findSales")
	@Query(value = "select order_date, sales from usorders o where IFNULL(o.order_date, '') regexp?1 ", nativeQuery = true)
	List<Object[]> findSales(String orderDate);

	@Cacheable("findPrice")
	@Query(value = "select order_date, price from usorders o where IFNULL(o.order_date, '') regexp?1 ", nativeQuery = true)
	List<Object[]> findPrice(String orderDate);

	@Cacheable("findMargin")
	@Query(value = "select order_date, margin from usorders o where IFNULL(o.order_date, '') regexp?1 ", nativeQuery = true)
	List<Object[]> findMargin(String orderDate);

//
	@Cacheable("findDiscountSegment")
	@Query(value = "select segment ,avg(discount)*100 from usorders o group by o.segment", nativeQuery = true)
	List<Object[]> findDiscountSegment();

	@Cacheable("findProfitSegment")
	@Query(value = "select segment ,sum(profit) from usorders o group by o.segment", nativeQuery = true)
	List<Object[]> findProfitSegment();

	@Cacheable("findQuantitySegment")
	@Query(value = "select segment ,sum(quantity) from usorders o group by o.segment", nativeQuery = true)
	List<Object[]> findQuantitySegment();

	@Cacheable("findSalesSegment")
	@Query(value = "select segment ,sum(sales) from usorders o group by o.segment", nativeQuery = true)
	List<Object[]> findSalesSegment();

	@Cacheable("findPriceSegment")
	@Query(value = "select segment ,sum(price) from usorders o group by o.segment", nativeQuery = true)
	List<Object[]> findPriceSegment();

	@Cacheable("findMarginSegment")
	@Query(value = "select segment ,sum(margin) from usorders o group by o.segment", nativeQuery = true)
	List<Object[]> findMarginSegment();

//
	@Cacheable("findDiscountRegion")
	@Query(value = "select region ,avg(discount)*100 from usorders o group by o.region", nativeQuery = true)
	List<Object[]> findDiscountRegion();

	@Cacheable("findProfitRegion")
	@Query(value = "select region ,sum(profit) from usorders o group by o.region", nativeQuery = true)
	List<Object[]> findProfitRegion();

	@Cacheable("findQuantityRegion")
	@Query(value = "select region ,sum(quantity) from usorders o group by o.region", nativeQuery = true)
	List<Object[]> findQuantityRegion();

	@Cacheable("findSalesRegion")
	@Query(value = "select region ,sum(sales) from usorders o group by o.region", nativeQuery = true)
	List<Object[]> findSalesRegion();

	@Cacheable("findPriceRegion")
	@Query(value = "select region ,sum(price) from usorders o group by o.region", nativeQuery = true)
	List<Object[]> findPriceRegion();

	@Cacheable("findMarginRegion")
	@Query(value = "select region ,sum(margin) from usorders o group by o.region", nativeQuery = true)
	List<Object[]> findMarginRegion();

//
	@Cacheable("findDiscountState")
	@Query(value = "select state_code ,avg(discount)*100 from usorders o group by o.state_code", nativeQuery = true)
	List<Object[]> findDiscountState();

	@Cacheable("findProfitState")
	@Query(value = "select state_code ,sum(profit) from usorders o group by o.state_code", nativeQuery = true)
	List<Object[]> findProfitState();

	@Cacheable("findQuantityState")
	@Query(value = "select state_code ,sum(quantity) from usorders o group by o.state_code", nativeQuery = true)
	List<Object[]> findQuantityState();

	@Cacheable("findSalesState")
	@Query(value = "select state_code ,sum(sales) from usorders o group by o.state_code", nativeQuery = true)
	List<Object[]> findSalesState();

	@Cacheable("findPriceState")
	@Query(value = "select state_code ,sum(price) from usorders o group by o.state_code", nativeQuery = true)
	List<Object[]> findPriceState();

	@Cacheable("findMarginState")
	@Query(value = "select state_code ,sum(margin) from usorders o group by o.state_code", nativeQuery = true)
	List<Object[]> findMarginState();

//
	@Cacheable("findDiscountSubCategory")
	@Query(value = "select category, sub_category ,avg(discount)*100 from usorders o group by o.sub_category", nativeQuery = true)
	List<Object[]> findDiscountSubCategory();

	@Cacheable("findProfitSubCategory")
	@Query(value = "select category, sub_category ,sum(profit) from usorders o group by o.sub_category", nativeQuery = true)
	List<Object[]> findProfitSubCategory();

	@Cacheable("findQuantitySubCategory")
	@Query(value = "select category, sub_category ,sum(quantity) from usorders o group by o.sub_category", nativeQuery = true)
	List<Object[]> findQuantitySubCategory();

	@Cacheable("findSalesSubCategory")
	@Query(value = "select category, sub_category ,sum(sales) from usorders o group by o.sub_category", nativeQuery = true)
	List<Object[]> findSalesSubCategory();

	@Cacheable("findPriceSubCategory")
	@Query(value = "select category, sub_category ,sum(price) from usorders o group by o.sub_category", nativeQuery = true)
	List<Object[]> findPriceSubCategory();

	@Cacheable("findMarginSubCategory")
	@Query(value = "select category, sub_category ,sum(margin) from usorders o group by o.sub_category", nativeQuery = true)
	List<Object[]> findMarginSubCategory();
//

	@Cacheable("findDiscountCity")
	@Query(value = "select city ,avg(discount)*100 from usorders o group by o.city", nativeQuery = true)
	List<Object[]> findDiscountCity();

	@Cacheable("findProfitCity")
	@Query(value = "select city ,sum(profit) from usorders o group by o.city", nativeQuery = true)
	List<Object[]> findProfitCity();

	@Cacheable("findQuantityCity")
	@Query(value = "select city ,sum(quantity) from usorders o group by o.city", nativeQuery = true)
	List<Object[]> findQuantityCity();

	@Cacheable("findSalesCity")
	@Query(value = "select city ,sum(sales) from usorders o group by o.city", nativeQuery = true)
	List<Object[]> findSalesCity();

	@Cacheable("findPriceCity")
	@Query(value = "select city ,sum(price) from usorders o group by o.city", nativeQuery = true)
	List<Object[]> findPriceCity();

	@Cacheable("findMarginCity")
	@Query(value = "select city ,sum(margin) from usorders o group by o.city", nativeQuery = true)
	List<Object[]> findMarginCity();

}
