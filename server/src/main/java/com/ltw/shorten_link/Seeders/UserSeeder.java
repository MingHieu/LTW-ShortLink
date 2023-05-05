package com.ltw.shorten_link.seeders;

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
                User user = User.builder().id(1)
                                .username("user")
                                .password(this.passwordEncoder.encode("1234"))
                                .name("user")
                                .money(0L)
                                .role(roleRepository.findByName("user")).build();
                repository.save(user);

                User admin = User.builder().id(2)
                                .username("admin")
                                .password(this.passwordEncoder.encode("1234"))
                                .name("admin")
                                .money(0L)
                                .role(roleRepository.findByName("admin")).build();
                repository.save(admin);

                User enterprise = User.builder().id(3)
                                .username("enterprise")
                                .password(this.passwordEncoder.encode("1234"))
                                .name("enterprise")
                                .money(0L)
                                .role(roleRepository.findByName("enterprise")).build();
                repository.save(enterprise);
        }
}
