package org.generation.Heptagon.service;

import org.generation.Heptagon.repository.entity.Furniture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.generation.Heptagon.repository.FurnitureRepository;

import java.util.*;

@Service
public class ItemServiceMySQL implements ItemService {

    private final FurnitureRepository furnitureRepository;
    public ItemServiceMySQL(@Autowired FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }

    @Override
    public Furniture save (Furniture furniture){
        return furnitureRepository.save(furniture);
    }

    @Override
    public  void delete ( int itemId ){
        furnitureRepository.deleteById(itemId);
    }

    @Override
    public List<Furniture> all(){
        List<Furniture> result = new ArrayList<>();
        furnitureRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Furniture findById (int itemId ){
        Optional<Furniture> item = furnitureRepository.findById(itemId);
        Furniture furnitureResponse = item.get();
        return furnitureResponse;
    }
}
