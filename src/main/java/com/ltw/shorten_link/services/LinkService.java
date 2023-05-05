package com.ltw.shorten_link.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.ltw.shorten_link.auth.UserDetailsImplement;
import com.ltw.shorten_link.entities.Link;
import com.ltw.shorten_link.entities.User;
import com.ltw.shorten_link.repositories.LinkRepository;
import com.ltw.shorten_link.repositories.UserRepository;

@Service
public class LinkService extends BaseService<Link> {
    @Autowired
    private UserRepository userRepository;

    final String MAP = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    public LinkService(LinkRepository linkRepository) {
        this.repository = linkRepository;
    }

    public String createAndGetShortLink(Link t) {
        UserDetailsImplement auth = (UserDetailsImplement) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        User user = userRepository.findByUsername(auth.getUsername());
        t.setUser(user);
        Link saved = super.create(t);
        return encode(saved.getId());
    }

    public String encode(Long id) {
        ArrayList<Long> digits = new ArrayList<Long>();
        while (id > 0) {
            digits.add(id % 62);
            id /= 62;
        }
        for (int i = digits.size() - 1; i < 6; ++i) {
            digits.add((long) 0);
        }
        StringBuilder s = new StringBuilder();
        for (long x : digits) {
            s.append(MAP.charAt((int) x));
        }
        return s.reverse().toString();
    }

    public Long decode(String url) {
        String s = new StringBuilder(url).reverse().toString();
        while (s.charAt(0) == '0') {
            s = s.substring(1);
        }
        ArrayList<Long> digits = new ArrayList<Long>();
        for (char x : s.toCharArray()) {
            digits.add((long) MAP.indexOf(x));
        }
        long id = 0;
        for (int i = 0; i < digits.size(); i++) {
            id += digits.get(i) * Math.pow(62, i);
        }
        return id;
    }
}
