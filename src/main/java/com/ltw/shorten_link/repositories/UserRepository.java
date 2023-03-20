package com.ltw.shorten_link.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ltw.shorten_link.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
