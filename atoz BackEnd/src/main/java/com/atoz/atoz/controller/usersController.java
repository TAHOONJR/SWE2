package com.atoz.atoz.controller;

import com.atoz.atoz.entity.user;
import com.atoz.atoz.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class usersController {

    @Autowired
    private userService userService;

    @PostMapping("/addUser")
    public user addUser(@RequestBody user user){
        return userService.saveUser(user);
    }
    @GetMapping("/addUsers")
    public List<user> addUsers(@RequestBody List<user> users){
        return userService.saveUsers(users);
    }

    @GetMapping("/users")
    public List<user> findAllUsers(){
        return userService.getUsers();
    }

    @GetMapping("/userById/{id}")
    public user findUserById(@PathVariable int id){
        return userService.getUserById(id);
    }

    @PutMapping("/update")
    public user updateUser(@RequestBody user user){
        return userService.updateUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id){
        return userService.deleteUser(id);
    }

}
