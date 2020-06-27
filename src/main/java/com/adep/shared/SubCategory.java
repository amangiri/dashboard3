package com.adep.shared;

import java.io.Serializable;

public class SubCategory implements Serializable {

	private static final long serialVersionUID = 2680578196508941386L;

	private String deparment;
	private String category;
	private Double matric;

	public String getDeparment() {
		return deparment;
	}

	public void setDeparment(String deparment) {
		this.deparment = deparment;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Double getMatric() {
		return matric;
	}

	public void setMatric(Double matric) {
		this.matric = matric;
	}

}
