package com.ltw.shorten_link.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ltw.shorten_link.Utils;
import com.ltw.shorten_link.interfaces.ModelAndViewObject;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class AuthController {

    @GetMapping("/login")
    public ModelAndView renderLogin() {
        ModelAndView mv = new ModelAndView("layouts/other");
        ModelAndViewObject mvo = new ModelAndViewObject("login", "Đăng nhập", "login.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/role")
    public String checkRole() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String role = authentication.getAuthorities().toArray()[0].toString();
        return "redirect:/" + role;
    }
}
