package com.atoz.atoz.service;

import com.atoz.atoz.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.atoz.atoz.entity.user;
import java.util.List;

@Service
public class userService {
    @Autowired
    private userRepository repository;

    public user saveUser(user user) {
        return repository.save(user);
    }

    public List<user> saveUsers(List<user> users) {
        return repository.saveAll(users);
    }

    // get all
    public List<user> getUsers() {
        return repository.findAll();
    }

    // get by id
    public user getUserById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deleteUser(int id) {
        repository.deleteById(id);
        return "User removed !! " + id;
    }

    public user updateUser(user user) {
        user existingUser = repository.findById(user.getId()).orElse(null);
        existingUser.setFname(user.getFname());
        existingUser.setLname(user.getLname());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());
        existingUser.setPassword(user.getPassword());
        return repository.save(existingUser);
    }
}