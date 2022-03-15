package org.generation.Heptagon.controller.dto;

public class ProductDTO {


    private String name;
    private String description;
    private String type;
    private Integer length;
    private Integer width;
    private Integer height;
    private double price;
    private String imageUrl;


    public ProductDTO(String name, String description, String type, Integer length, Integer width, Integer height, double price, String imageUrl)
    {
        this.name = name;
        this.description = description;
        this.type = type;
        this.length = length;
        this.width = width;
        this.height = height;
        this.price = price;
        this.imageUrl = imageUrl;
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
}
