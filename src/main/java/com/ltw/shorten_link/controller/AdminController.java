package com.ltw.shorten_link.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ltw.shorten_link.Utils;
import com.ltw.shorten_link.interfaces.ModelAndViewObject;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class AdminController {

  @GetMapping("/users")
  public ModelAndView Statistics() {
    // Authentication authentication =
    // SecurityContextHolder.getContext().getAuthentication();
    // String role =
    // authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).findFirst().get();
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/users", "Users", "users.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;

  }

}
