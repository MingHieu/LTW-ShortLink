package com.ltw.shorten_link.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ltw.shorten_link.Utils;
import com.ltw.shorten_link.interfaces.ModelAndViewObject;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class UserController {
    @GetMapping("/")
    public ModelAndView home() {
        ModelAndView mv = new ModelAndView("layouts/other");
        ModelAndViewObject mvo = new ModelAndViewObject("home", "Shorten Link", "home.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/dashboard")
    public ModelAndView dashboard() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/dashboard", "Shorten Link", "dashboard.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/my-urls")
    public ModelAndView myUrls() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/my-urls", "My Urls", "my-urls.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        ;
        return mv;
    }

    @GetMapping("/statistics")
    public ModelAndView Statistics() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/statistics", "Statistics", "statistics.css");
        mvo.setJsLibrary(new String[] { "https://cdn.jsdelivr.net/npm/chart.js" });
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;

    }

    @GetMapping("/affiliate")
    public ModelAndView linkAffiliate() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/link-affiliate", "Link Affiliate", "link-affiliate.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/amount")
    public ModelAndView amount() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/amount", "Amount", "amount.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/request")
    public ModelAndView request() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/request", "Request", "request.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }
}
