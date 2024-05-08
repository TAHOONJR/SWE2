package com.atoz.atoz.repository;

import com.atoz.atoz.entity.wClothing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface wClothingRepository extends JpaRepository<wClothing, Integer> {
    // You can add custom query methods here if needed
}
