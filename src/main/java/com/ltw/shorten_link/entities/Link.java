package com.ltw.shorten_link.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NonNull;

@Data
@Entity
@Table(name = "links")
public class Link {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @Column(name = "short_link", nullable = false)
    private String shortLink;

    @NonNull
    @Column(name = "default_link", nullable = false)
    private String defaultLink;

    
    @Column(name = "is_affiliate", nullable = false)
    private boolean isAffiliate;

    @Column(name = "title", nullable = true)
    private String title;

    @OneToMany(targetEntity = Click.class)
    private List<Click> clicks;
}
