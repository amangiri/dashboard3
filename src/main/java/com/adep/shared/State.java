package com.adep.shared;

import java.io.Serializable;

public class State implements Serializable {

	private static final long serialVersionUID = 5297821280458537200L;

	private String id;
	private Double value;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}
