package com.ltw.shorten_link.Configuration.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ltw.shorten_link.entities.User;
import com.ltw.shorten_link.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserDetailServiceImplement implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return UserDetailsImplement.build(user);
    }
}
