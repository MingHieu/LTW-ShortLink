package com.ltw.shorten_link.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ltw.shorten_link.Utils;
import com.ltw.shorten_link.model.ModelAndViewObject;
import com.ltw.shorten_link.services.UserService;

@Controller
public class AuthController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ModelAndView renderLogin() {
        ModelAndView mv = new ModelAndView();
        ModelAndViewObject mvo = new ModelAndViewObject("Đăng nhập", "login.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        mv.setViewName("login");
        return mv;
    }

    @GetMapping("/signup")
    public ModelAndView renderSignup() {
        ModelAndView mv = new ModelAndView();
        return mv;
    }
}
