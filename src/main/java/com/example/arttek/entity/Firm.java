package com.example.arttek.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

/**
 * Фирма.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Firm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @Column(unique = true)
    @JsonProperty("ati_id")
    private String atiId;

    private String firm_name;
    private String ownership;
    private String full_name;
    private String firm_type;
    private Long firm_type_id;
    private Long position_in_city;
    private Long position_in_country;
    private String web_site;
    private String address;
    private String info_reference;
    private String passport_reference;
    private String city;
    private Long score;
    private Long bad_partner_mentions_count;
    private Long claims_count;
    private String language;
    private Long recommendations_count;
    private String inn;
    private String ogrn;
    private String okpo;
    private Long negative_points_sum;
    private LocalDate registration_date;
    private LocalDate contact_info_changed;
    private LocalDate deletion_date;
    private Integer last_month_active_days;
    private Integer verified_trucks;

    @ManyToOne(cascade = CascadeType.ALL)
    private Location location;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FirmDocument> firm_documents;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Contact> contacts;
}
