package com.ltw.shorten_link.controller;

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
}
