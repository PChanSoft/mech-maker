package com.example.server.service;
import com.example.server.model.MechHead;
import com.example.server.repository.HeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class HeadServiceImpl implements HeadService{
    @Autowired
    HeadRepository headRepository;

    @Override
    public Iterable<MechHead> getMechHeads(){
        return headRepository.findAll();
    }
    @Override
    public MechHead getMechHeadById(Long id){
        return headRepository.findById(id).get();
    }
    @Override
    public MechHead createMechHead(MechHead mechHead){
        return headRepository.save(mechHead);
    }
    @Override
    public MechHead updateMechHead(MechHead mechHead){
        return headRepository.save(mechHead);
    }
    @Override
    public HttpStatus deleteMechHead(Long id){
        headRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
