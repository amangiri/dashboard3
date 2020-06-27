package com.adep.shared;

import java.io.Serializable;

public class Supplier implements Serializable {

	private static final long serialVersionUID = -4834630965349821704L;

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
