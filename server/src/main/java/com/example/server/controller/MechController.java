package com.example.server.controller;

import com.example.server.model.Mech;
import com.example.server.service.MechService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/mechs")
public class MechController {
    @Autowired
    MechService mechService;

    @GetMapping
    public Iterable<Mech> getMechs(){
        return mechService.getMechs();
    }
    @PostMapping
    public Mech createMech(@RequestBody Mech mech){
        return mechService.createMech(mech);
    }
    @PatchMapping
    public Mech updateMech(@RequestBody Mech mech){
        return mechService.updateMech(mech);
    }
    @DeleteMapping("/{id}")
    public HttpStatus deleteMech(@PathVariable Long id){
        return mechService.deleteMech(id);
    }
}
