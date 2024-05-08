package com.atoz.atoz.service;
import com.atoz.atoz.entity.mClothing;
import com.atoz.atoz.entity.wClothing;
import com.atoz.atoz.entity.jewelery;
import com.atoz.atoz.entity.electronics;
import com.atoz.atoz.repository.mClothingRepository;
import com.atoz.atoz.repository.wClothingRepository;
import com.atoz.atoz.repository.jeweleryRepository;
import com.atoz.atoz.repository.electronicsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class itemService {

    @Autowired
    private mClothingRepository mClothingRepo;

    @Autowired private wClothingRepository wClothingRepo;

    @Autowired
    private jeweleryRepository jeweleryRepo;

    @Autowired
    private electronicsRepository electronicsRepo;

    // CRUD operations for mClothing

    public mClothing savemClothing(mClothing mClothing) {
        return mClothingRepo.save(mClothing);
    }

    public List<mClothing> getAllmClothing() {
        return mClothingRepo.findAll();
    }

    public mClothing getmClothingById(int id) {
        return mClothingRepo.findById(id).orElse(null);
    }

    public mClothing updatemClothing(mClothing mClothing) {
        return mClothingRepo.save(mClothing);
    }

    public String deletemClothing(int id) {
        mClothingRepo.deleteById(id);
        return "mClothing removed !! " + id;
    }

    // CRUD operations for wClothing

    public wClothing saveWClothing(wClothing wClothing) {
        return wClothingRepo.save(wClothing);
    }

    public List<wClothing> getAllWClothing() {
        return wClothingRepo.findAll();
    }

    public wClothing getWClothingById(int id) {
        return wClothingRepo.findById(id).orElse(null);
    }

    public wClothing updateWClothing(wClothing wClothing) {
        return wClothingRepo.save(wClothing);
    }

    public String deleteWClothing(int id) {
        wClothingRepo.deleteById(id);
        return "wClothing removed !! " + id;
    }

    // CRUD operations for jewelery

    public jewelery savejewelery(jewelery jewelery) {
        return jeweleryRepo.save(jewelery);
    }

    public List<jewelery> getAlljewelery() {
        return jeweleryRepo.findAll();
    }

    public jewelery getjeweleryById(int id) {
        return jeweleryRepo.findById(id).orElse(null);
    }

    public jewelery updatejewelery(jewelery jewelery) {
        return jeweleryRepo.save(jewelery);
    }

    public String deletejewelery(int id) {
        jeweleryRepo.deleteById(id);
        return "jewelery removed !! " + id;
    }

    // CRUD operations for electronics

    public electronics saveElectronics(electronics electronics) {
        return electronicsRepo.save(electronics);
    }

    public List<electronics> getAllElectronics() {
        return electronicsRepo.findAll();
    }

    public electronics getElectronicsById(int id) {
        return electronicsRepo.findById(id).orElse(null);
    }

    public electronics updateElectronics(electronics electronics) {
        return electronicsRepo.save(electronics);
    }

    public String deleteElectronics(int id) {
        electronicsRepo.deleteById(id);
        return "Electronics removed !! " + id;
    }
}
