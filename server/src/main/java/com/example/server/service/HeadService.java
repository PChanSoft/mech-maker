package com.example.server.service;

import com.example.server.model.MechHead;
import org.springframework.http.HttpStatus;

public interface HeadService {
    Iterable<MechHead> getMechHeads();
    MechHead getMechHeadById(Long id);
    MechHead createMechHead(MechHead mechHead);
    MechHead updateMechHead(MechHead mechHead);
    HttpStatus deleteMechHead(Long id);
}
