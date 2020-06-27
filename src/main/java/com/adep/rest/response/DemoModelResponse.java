package com.adep.rest.response;

import java.io.Serializable;

public class DemoModelResponse implements Serializable{

	private static final long serialVersionUID = 2125173442969249284L;
	
	private String firstName;
	private String lastName;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
