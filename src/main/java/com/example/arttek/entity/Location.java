package com.example.arttek.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Расположение фирмы.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private Long city_id;
    private Long region_id;
    private Long country_id;
    private String full_name;
    private String short_name;
    private Boolean is_regional_center;
    private Long city_size;
    private String fias_id;
    private Long attributes;
    private String city_name;
    private String region_name;
    private String country_name;
    private String country_code_name;
}