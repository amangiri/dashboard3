package com.adep.shared;

import java.io.Serializable;
import java.util.List;

public class Year implements Serializable{

	private static final long serialVersionUID = 7702265903580843797L;

	private List<String> year;
	private List<Double> allYearData;
	private List<YearData> yearDataList;

	public List<YearData> getYearDataList() {
		return yearDataList;
	}

	public void setYearDataList(List<YearData> yearDataList) {
		this.yearDataList = yearDataList;
	}

	public List<String> getYear() {
		return year;
	}

	public void setYear(List<String> year) {
		this.year = year;
	}

	public List<Double> getAllYearData() {
		return allYearData;
	}

	public void setAllYearData(List<Double> allYearData) {
		this.allYearData = allYearData;
	}

}
