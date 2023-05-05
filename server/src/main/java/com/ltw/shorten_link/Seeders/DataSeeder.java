package com.ltw.shorten_link.seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    RoleSeeder roleSeeder;

    @Autowired
    UserSeeder userSeeder;

    @Override
    public void run(String... args) throws Exception {
        roleSeeder.seedData();
        userSeeder.seedData();
    }

}
