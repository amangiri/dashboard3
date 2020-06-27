package com.adep.shared;

import java.io.Serializable;
import java.util.List;

public class SegmentStateRegion implements Serializable {

	private static final long serialVersionUID = 2237976542635666559L;

	private List<CustomerSegment> customerSegments;
	private List<Region> regions;
	private List<State> states;

	public List<CustomerSegment> getCustomerSegments() {
		return customerSegments;
	}

	public void setCustomerSegments(List<CustomerSegment> customerSegments) {
		this.customerSegments = customerSegments;
	}

	public List<Region> getRegions() {
		return regions;
	}

	public void setRegions(List<Region> regions) {
		this.regions = regions;
	}

	public List<State> getStates() {
		return states;
	}

	public void setStates(List<State> states) {
		this.states = states;
	}

}
