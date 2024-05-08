package com.atoz.atoz.repository;

import com.atoz.atoz.entity.mClothing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface mClothingRepository extends JpaRepository<mClothing, Integer> {
    // You can add custom query methods here if needed
}
