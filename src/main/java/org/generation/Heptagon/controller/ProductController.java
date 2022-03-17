package org.generation.Heptagon.controller;

import org.generation.Heptagon.component.FileUploadUtil;
import org.generation.Heptagon.controller.dto.ProductDTO;
import org.generation.Heptagon.repository.entity.*;
import org.generation.Heptagon.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.io.*;

import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Value("${image.folder}")
    private String imageFolder;

    private final ItemService itemService;

    public ProductController(@Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Furniture> getItems()
    {
        return itemService.all();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Furniture findItemById(@PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(  @RequestParam(name="name", required = true) String name,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="type", required = true) String type,
                       @RequestParam(name="length", required = true) Integer length,
                       @RequestParam(name="width", required = true) Integer width,
                       @RequestParam(name="height", required = true) Integer height,
                       @RequestParam(name="price", required = true) double price,
                       @RequestParam(name="imageUrl", required = true) String imageUrl,
                       @RequestParam("imagefile") MultipartFile multipartFile) throws IOException {

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(imageFolder, fileName, multipartFile);

        String fullPath = imageFolder + '/' + imageUrl;

        ProductDTO productDto = new ProductDTO(name, description, type, length, width, height, price, fullPath);
        itemService.save(new Furniture(productDto));
    }




}
