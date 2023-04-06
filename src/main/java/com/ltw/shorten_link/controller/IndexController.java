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

    @GetMapping("/my-urls")
    public ModelAndView myUrls() {
        ModelAndView mv = new ModelAndView();
        ModelAndViewObject mvo = new ModelAndViewObject("My Urls", "my-urls.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        mv.setViewName("my-urls");
        return mv;
    }

    @GetMapping("/statistics")
    public ModelAndView Statistics() {
        ModelAndView mv = new ModelAndView();
        ModelAndViewObject mvo = new ModelAndViewObject("Statistics", "statistics.css");
        mvo.setJsLibrary(new String[] { "<script src='https://cdn.jsdelivr.net/npm/chart.js'></script>" });
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        mv.setViewName("statistics");
        return mv;

    }

    @GetMapping("/affiliate")
    public ModelAndView linkAffiliate() {
        ModelAndView mv = new ModelAndView();
        ModelAndViewObject mvo = new ModelAndViewObject("Link Affiliate", "link-affiliate.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        mv.setViewName("link-affiliate");

        return mv;
    }

    @GetMapping("/amount")
    public ModelAndView amount() {
        ModelAndView mv = new ModelAndView();
        ModelAndViewObject mvo = new ModelAndViewObject("Amount", "amount.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        mv.setViewName("amount");
        return mv;
    }

    @GetMapping("/request")
    public ModelAndView request() {
        ModelAndView mv = new ModelAndView();
        ModelAndViewObject mvo = new ModelAndViewObject("Request", "request.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        mv.setViewName("request");
        return mv;
    }

}
