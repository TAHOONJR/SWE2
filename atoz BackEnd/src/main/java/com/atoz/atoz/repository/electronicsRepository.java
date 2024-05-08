package com.atoz.atoz.repository;

import com.atoz.atoz.entity.electronics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface electronicsRepository extends JpaRepository<electronics, Integer> {
    // You can add custom query methods here if needed
}
