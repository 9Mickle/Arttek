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
 * Контакты фирмы.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private Long persistent_user_id;
    private String ati_id;
    private Long contact_id;
    private String name;
    private String phone;
    private String mobile_phone;
    private Long claims_count;
    private Long recommendations_count;
    private Long bad_partner_mentions_count;
    private String city;
    private String contact_city;
    private String firm_type;
    private Long firm_type_id;
    private String firm_name;
    private String ownership;
    private Long ownership_id;
    private Long score;
    private Long status;
    private String icq;
    private String fax;
    private String skype_name;
    private String email;
    private String language;
}
