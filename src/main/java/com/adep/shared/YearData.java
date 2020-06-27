package com.adep.shared;

import java.io.Serializable;
import java.util.List;

public class YearData implements Serializable {

	private static final long serialVersionUID = 5218423082220807585L;

	private List<Double> value;

	public List<Double> getValue() {
		return value;
	}

	public void setValue(List<Double> value) {
		this.value = value;
	}

}
