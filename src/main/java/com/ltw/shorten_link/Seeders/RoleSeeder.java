package com.ltw.shorten_link.Seeders;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ltw.shorten_link.entities.Role;
import com.ltw.shorten_link.repositories.RoleRepository;

@Component
public class RoleSeeder implements CommandLineRunner {
    @Autowired
    RoleRepository repository;

    @Override
    public void run(String... args) throws Exception {
        seedData();
    }

    public void seedData() {
        if (repository.count() == 0) {
            List<Role> roles = new ArrayList<>();
            Role seeker = Role.builder().name("admin").build();
            Role enterprise = Role.builder().name("user").build();
            roles.add(seeker);
            roles.add(enterprise);
            repository.saveAll(roles);
        }
    }
}
