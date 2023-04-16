package com.ltw.shorten_link.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ltw.shorten_link.Utils;
import com.ltw.shorten_link.interfaces.ModelAndViewObject;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("admin")
public class AdminController {

  @GetMapping("/users")
  public ModelAndView Statistics() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/users", "Users", "users.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

}
