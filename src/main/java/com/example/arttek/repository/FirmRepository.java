package com.example.arttek.repository;

import com.example.arttek.entity.Firm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FirmRepository extends JpaRepository<Firm, Long> {

    Optional<Firm> findByAtiId(String id);
}
