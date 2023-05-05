package com.ltw.shorten_link.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ltw.shorten_link.entities.User;
import com.ltw.shorten_link.repositories.UserRepository;

@Service
public class UserService extends BaseService<User> {

    @Autowired
    UserRepository userRepository;

    public UserService() {
        this.repository = userRepository;
    }
}
