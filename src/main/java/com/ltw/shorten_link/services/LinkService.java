package com.ltw.shorten_link.services;

import java.util.Base64;
import java.util.Base64.Encoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ltw.shorten_link.entities.Link;
import com.ltw.shorten_link.repositories.LinkRepository;
import com.ltw.shorten_link.repositories.UserRepository;

@Service
public class LinkService extends BaseService<Link> {
    @Autowired
    private LinkRepository linkRepository;
    
    @Autowired
    private UserRepository userRepository;

    public LinkService() {
        this.repository = linkRepository;
    }

    public void create(String url) {
        Encoder encoder = Base64.getUrlEncoder();
        System.out.println("encodedBytes " + new String(encoder.encode("Test".getBytes())));
        // Link link = new Link();
        // super.create(t);
    }
}
