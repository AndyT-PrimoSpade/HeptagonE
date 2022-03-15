package org.generation.Heptagon.repository.entity;

import org.generation.Heptagon.controller.dto.ProductDTO;
import javax.persistence.*;

@Entity
public class Furniture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String type;
    private Integer length;
    private Integer width;
    private Integer height;
    private double price;
    private String imageUrl;

    public Furniture() {}

    public Furniture(ProductDTO productDTO) {
        // Transfer the object (with the data) to Entity Class for mapping with the database, table columns and to be able to save the data in the columns
        this.name = productDTO.getName();
        this.description = productDTO.getDescription();
        this.type = productDTO.getType();
        this.length = productDTO.getLength();
        this.width = productDTO.getWidth();
        this.height = productDTO.getHeight();
        this.price = productDTO.getPrice();
        this.imageUrl = productDTO.getImageUrl();
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getType() {
        return type;
    }

    public Integer getLength() {
        return length;
    }

    public Integer getWidth() {
        return width;
    }

    public Integer getHeight() {
        return height;
    }

    public double getPrice() {
        return price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    @Override
    public String toString()
    {
        return "Item{" + "id=" + id + ", name='" + name + '\'' + ", description='" + description + '\'' + ", type='" + type + '\'' + ", length='" + length + '\'' +  ", width='" + width + '\'' + ", height='" + height + '\'' + ", imageUrl='"
                + imageUrl + '\'' + ", price='" + price + '}';
    }
}
