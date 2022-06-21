package com.example.arttek.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

/**
 * Документы фирмы.
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FirmDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private String link;
    private String description;
    private LocalDate creation_date;
    private String name;
    private Long type_id;
}
