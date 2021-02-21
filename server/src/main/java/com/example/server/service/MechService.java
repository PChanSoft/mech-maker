package com.example.server.service;
import com.example.server.model.Mech;
import org.springframework.http.HttpStatus;

public interface MechService {
    Iterable<Mech> getMechs();
    Mech getMechById(Long id);
    Mech createMech(Mech mech);
    Mech updateMech(Mech mech);
    HttpStatus deleteStudent(Long id);
}
