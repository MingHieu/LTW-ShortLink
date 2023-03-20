package com.ltw.shorten_link.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ltw.shorten_link.Utils;
import com.ltw.shorten_link.model.ModelAndViewObject;

@Controller
public class IndexController {

    @GetMapping("/")
    public ModelAndView home() {
        ModelAndView mv = new ModelAndView();
        ModelAndViewObject mvo = new ModelAndViewObject("Trang chủ", "home.css");
        mvo.setJs("home.js");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        mv.setViewName("home");
        return mv;
    }
}
