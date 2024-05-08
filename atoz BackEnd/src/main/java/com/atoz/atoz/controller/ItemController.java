package com.atoz.atoz.controller;

import com.atoz.atoz.entity.mClothing;

import com.atoz.atoz.entity.wClothing;
import com.atoz.atoz.entity.jewelery;
import com.atoz.atoz.entity.electronics;
import com.atoz.atoz.service.itemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "*") // Enable CORS for all endpoints in this controller
public class ItemController {

    @Autowired
    private itemService itemService;

    // mClothing operations

    @PostMapping("/mClothing")
    public mClothing addmClothing(@RequestBody mClothing mClothing) {
        return itemService.savemClothing(mClothing);
    }

    @GetMapping("/mClothing")
    public List<mClothing> getAllmClothing() {
        return itemService.getAllmClothing();
    }

    @GetMapping("/mClothing/{id}")
    public mClothing getmClothingById(@PathVariable int id) {
        return itemService.getmClothingById(id);
    }

    @PutMapping("/mClothing")
    public mClothing updatemClothing(@RequestBody mClothing mClothing) {
        return itemService.updatemClothing(mClothing);
    }

    @DeleteMapping("/mClothing/{id}")
    public String deletemClothing(@PathVariable int id) {
        return itemService.deletemClothing(id);
    }

    // wClothing operations

    @PostMapping("/wClothing")
    public wClothing addWClothing(@RequestBody wClothing wClothing) {
        return itemService.saveWClothing(wClothing);
    }

    @GetMapping("/wClothing")
    public List<wClothing> getAllWClothing() {
        return itemService.getAllWClothing();
    }

    @GetMapping("/wClothing/{id}")
    public wClothing getWClothingById(@PathVariable int id) {
        return itemService.getWClothingById(id);
    }

    @PutMapping("/wClothing")
    public wClothing updateWClothing(@RequestBody wClothing wClothing) {
        return itemService.updateWClothing(wClothing);
    }

    @DeleteMapping("/wClothing/{id}")
    public String deleteWClothing(@PathVariable int id) {
        return itemService.deleteWClothing(id);
    }

    // jewelery operations

    @PostMapping("/jewelery")
    public jewelery addjewelery(@RequestBody jewelery jewelery) {
        return itemService.savejewelery(jewelery);
    }

    @GetMapping("/jewelery")
    public List<jewelery> getAlljewelery() {
        return itemService.getAlljewelery();
    }

    @GetMapping("/jewelery/{id}")
    public jewelery getjeweleryById(@PathVariable int id) {
        return itemService.getjeweleryById(id);
    }

    @PutMapping("/jewelery")
    public jewelery updatejewelery(@RequestBody jewelery jewelery) {
        return itemService.updatejewelery(jewelery);
    }

    @DeleteMapping("/jewelery/{id}")
    public String deletejewelery(@PathVariable int id) {
        return itemService.deletejewelery(id);
    }

    // Electronics operations

    @PostMapping("/electronics")
    public electronics addElectronics(@RequestBody electronics electronics) {
        return itemService.saveElectronics(electronics);
    }

    @GetMapping("/electronics")
    public List<electronics> getAllElectronics() {
        return itemService.getAllElectronics();
    }

    @GetMapping("/electronics/{id}")
    public electronics getElectronicsById(@PathVariable int id) {
        return itemService.getElectronicsById(id);
    }

    @PutMapping("/electronics")
    public electronics updateElectronics(@RequestBody electronics electronics) {
        return itemService.updateElectronics(electronics);
    }

    @DeleteMapping("/electronics/{id}")
    public String deleteElectronics(@PathVariable int id) {
        return itemService.deleteElectronics(id);
    }
}
