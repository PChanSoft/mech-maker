package com.example.server.service;

import com.example.server.model.Mech;
import com.example.server.repository.MechRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class MechServiceImpl implements MechService{
    @Autowired
    MechRepository mechRepository;

    @Override
    public Iterable<Mech> getMechs() {
        return mechRepository.findAll();
    }

    @Override
    public Mech getMechById(Long id) {
        return mechRepository.findById(id).get();
    }

    @Override
    public Mech createMech(Mech mech) {
        return mechRepository.save(mech);
    }

    @Override
    public Mech updateMech(Mech mech) {
        return mechRepository.save(mech);
    }

    @Override
    public HttpStatus deleteMech(Long id) {
        mechRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
