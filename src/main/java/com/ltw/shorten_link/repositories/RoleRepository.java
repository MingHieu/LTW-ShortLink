package com.ltw.shorten_link.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ltw.shorten_link.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
