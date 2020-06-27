package com.adep.shared;

import java.io.Serializable;

public class CustomerSegment implements Serializable {

	private static final long serialVersionUID = 2738991313624564786L;

	private String segmentName;
	private Double matric;

	public String getSegmentName() {
		return segmentName;
	}

	public void setSegmentName(String segmentName) {
		this.segmentName = segmentName;
	}

	public Double getMatric() {
		return matric;
	}

	public void setMatric(Double matric) {
		this.matric = matric;
	}

}
