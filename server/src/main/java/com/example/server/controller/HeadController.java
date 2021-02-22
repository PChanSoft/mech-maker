package com.example.server.controller;

import com.example.server.model.MechHead;
import com.example.server.service.HeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/heads")
public class HeadController {
    @Autowired
    HeadService headService;

    @GetMapping
    public Iterable<MechHead> getMechHeads(){
        return headService.getMechHeads();
    }
    @PostMapping
    public MechHead createMechHead(@RequestBody MechHead mechHead){
        return headService.createMechHead(mechHead);
    }
    @PatchMapping
    public MechHead updateMechHead(@RequestBody MechHead mechHead){
        return headService.updateMechHead(mechHead);
    }
    @DeleteMapping("/{id}")
    public HttpStatus deleteMechHead(@PathVariable Long id){
        return headService.deleteMechHead(id);
    }
}
