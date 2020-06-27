package com.adep.shared;

import java.io.Serializable;

public class Region implements Serializable {

	private static final long serialVersionUID = 5521551563782323027L;

	private String name;
	private Double data;
	private String color;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getData() {
		return data;
	}
	public void setData(Double data) {
		this.data = data;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}

}
