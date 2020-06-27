package com.adep.shared;

import java.io.Serializable;

public class City implements Serializable{

	private static final long serialVersionUID = 5207286277072810914L;

	private String name;
	
	private Double value;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}
