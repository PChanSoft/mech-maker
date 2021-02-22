package com.example.server.repository;

import com.example.server.model.MechHead;
import org.springframework.data.repository.CrudRepository;

public interface HeadRepository extends CrudRepository<MechHead, Long> {
}
