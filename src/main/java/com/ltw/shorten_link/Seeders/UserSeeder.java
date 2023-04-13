package com.ltw.shorten_link.Seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.ltw.shorten_link.entities.User;
import com.ltw.shorten_link.repositories.RoleRepository;
import com.ltw.shorten_link.repositories.UserRepository;

@Component
public class UserSeeder {
    @Autowired
    UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    RoleRepository roleRepository;

    public void seedData() {
        if (repository.count() == 0) {
            User admin = User.builder().username("admin")
                    .password(this.passwordEncoder.encode("abcd1234"))
                    .name("admin")
                    .money((long) 0)
                    .role(roleRepository.findById(1L).get()).build();
            repository.save(admin);
        }
    }
}
