package com.ltw.shorten_link.link;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ltw.shorten_link.user.User;

public interface LinkRepository extends JpaRepository<Link, Long> {
    List<Link> findAllByUser(User user, PageRequest PageRequest);
}
