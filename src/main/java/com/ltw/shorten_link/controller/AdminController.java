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

  @GetMapping(path = { "", "/" })
  public String root() {
    return "redirect:/admin/users";
  }

  @GetMapping("/users")
  public ModelAndView Users() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/users", "Users", "admin/users.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

  @GetMapping("/enterprise")
  public ModelAndView Enterprise() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/enterprise", "Enterprise", "admin/enterprise.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

  @GetMapping("/withdraw-money")
  public ModelAndView WithdrawMoney() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/withdraw-money", "Withdraw-money",
        "admin/withdraw-money.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

  @GetMapping("/payment")
  public ModelAndView Payment() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/payment", "Payment", "admin/payment.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

  @GetMapping("/urls")
  public ModelAndView Urls() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/urls", "Urls", "admin/urls.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

  @GetMapping("/detail")
  public ModelAndView UserDetail() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/user-detail", "User Detail", "admin/user-detail.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

  @GetMapping("/payment/detail")
  public ModelAndView PaymentDetail() {
    ModelAndView mv = new ModelAndView("layouts/main");
    ModelAndViewObject mvo = new ModelAndViewObject("admin/payment-detail", "Payment Detail",
        "admin/payment-detail.css");
    mv.addObject("role", "admin");
    mv.addObject(Utils.ModalAndViewObjectName, mvo);
    return mv;
  }

}
