package com.atoz.atoz.repository;


import com.atoz.atoz.entity.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<user, Integer>{
    user findByEmail(String email);
}
