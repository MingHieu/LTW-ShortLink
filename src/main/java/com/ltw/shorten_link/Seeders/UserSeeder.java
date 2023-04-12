package com.ltw.shorten_link.Seeders;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ltw.shorten_link.entities.User;
import com.ltw.shorten_link.repositories.RoleRepository;
import com.ltw.shorten_link.repositories.UserRepository;

public class UserSeeder implements CommandLineRunner {
    @Autowired
    UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    RoleRepository roleRepository;

    public void run(String... args) throws Exception {
        seedData();
    }

    public void seedData() {
        if (repository.count() == 0) {
            List<User> users = new ArrayList<>();
            User admin = User.builder().username("admin")
                    .password(this.passwordEncoder.encode("abcd1234"))
                    .name("admin")
                    .money((long) 0)
                    .role(roleRepository.findById(1L).get()).build();
            users.add(admin);
            repository.saveAll(users);
        }
    }
}
