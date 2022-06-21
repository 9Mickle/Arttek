package com.example.arttek.service;

import com.example.arttek.entity.Firm;
import com.example.arttek.repository.FirmRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class FirmService {

    private final FirmRepository firmRepository;

    public Firm save(Firm firm) {
        if (firmRepository.findByAtiId(firm.getAtiId()).isPresent()) {
            throw new RuntimeException("Firm already exist with ati_id: " + firm.getAtiId());
        } else
            return firmRepository.save(firm);
    }
}
