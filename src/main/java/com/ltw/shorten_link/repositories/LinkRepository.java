package com.ltw.shorten_link.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ltw.shorten_link.entities.Link;

public interface LinkRepository extends JpaRepository<Link, Long> {

}
