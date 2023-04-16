package com.ltw.shorten_link.seeders;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ltw.shorten_link.entities.Role;
import com.ltw.shorten_link.repositories.RoleRepository;

@Component
public class RoleSeeder {
    @Autowired
    RoleRepository repository;

    public void seedData() {
        Role admin = Role.builder().name("admin").id(1L).build();
        Role enterprise = Role.builder().name("enterprise").id(2L).build();
        Role user = Role.builder().name("user").id(3L).build();
        repository.saveAll(Arrays.asList(new Role[] { admin, user, enterprise }));
    }
}
