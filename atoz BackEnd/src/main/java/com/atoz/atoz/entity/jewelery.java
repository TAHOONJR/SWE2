package com.atoz.atoz.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "jewelery")
public class jewelery {

    @Id
    @GeneratedValue
    private int id;

    private String image;

    private String category;

    private String name;
    
    private float price;

    private String description;
}