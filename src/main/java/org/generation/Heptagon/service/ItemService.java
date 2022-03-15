package org.generation.Heptagon.service;

import org.generation.Heptagon.repository.entity.Furniture;

import java.util.List;
// To be change depending on what method we need
public interface ItemService {

    Furniture save(Furniture furniture);

    void delete(int itemId);

    List<Furniture> all();

    Furniture findById(int itemId);
}


