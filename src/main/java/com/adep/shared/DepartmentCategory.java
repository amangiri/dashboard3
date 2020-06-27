package com.adep.shared;

import java.io.Serializable;
import java.util.List;

public class DepartmentCategory implements Serializable {

	private static final long serialVersionUID = 3742052329063207259L;

	private List<SubCategory> furniture;
	private List<SubCategory> office;
	private List<SubCategory> technology;
	private List<SubCategory> subCategories;

	public List<SubCategory> getFurniture() {
		return furniture;
	}

	public void setFurniture(List<SubCategory> furniture) {
		this.furniture = furniture;
	}

	public List<SubCategory> getOffice() {
		return office;
	}

	public void setOffice(List<SubCategory> office) {
		this.office = office;
	}

	public List<SubCategory> getTechnology() {
		return technology;
	}

	public void setTechnology(List<SubCategory> technology) {
		this.technology = technology;
	}

	public List<SubCategory> getSubCategories() {
		return subCategories;
	}

	public void setSubCategories(List<SubCategory> subCategories) {
		this.subCategories = subCategories;
	}

}
