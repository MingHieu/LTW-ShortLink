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
@RequestMapping("enterprise")
public class EnterpriseController {

  @GetMapping("/payment")
  public ModelAndView Payment() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("enterprise/payment", "Payment", "enterprise/payment.css");
    mv.addObject("role", "enterprise");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

  @GetMapping("/urls")
  public ModelAndView Urls() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("enterprise/urls", "Urls", "enterprise/urls.css");
    mv.addObject("role", "enterprise");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

}
