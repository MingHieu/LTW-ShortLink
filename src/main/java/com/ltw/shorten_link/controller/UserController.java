package com.ltw.shorten_link.controller;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ltw.shorten_link.Utils;
import com.ltw.shorten_link.entities.Link;
import com.ltw.shorten_link.interfaces.ModelAndViewObject;
import com.ltw.shorten_link.services.LinkService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final LinkService linkService;

    @GetMapping("/")
    public ModelAndView home() {
        ModelAndView mv = new ModelAndView("layouts/other");
        ModelAndViewObject mvo = new ModelAndViewObject("home", "Shorten Link", "home.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @PostMapping("/")
    public void homePost(Link link) {
        System.out.println(link);
        // shortLink(null);
    }

    @GetMapping("/dashboard")
    public ModelAndView dashboard() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/dashboard", "Shorten Link", "user/dashboard.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @PostMapping("/dashboard")
    public ModelAndView dashboardPost(@Valid Link link, Errors errors) {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/dashboard", "Shorten Link", "user/dashboard.css");
        if (errors.hasErrors()) {
            mv.addObject(Utils.ModalAndViewObjectName, mvo);
            return mv;
        }
        String shortLink = linkService.createAndGetShortLink(link);
        mvo.setData(shortLink);
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/s/{code}")
    public String getShortLink(@PathVariable String code) {
        Link link = linkService.getOne(linkService.decode(code));
        return "redirect:" + link.getUrl();
    }

    @GetMapping("/my-urls")
    public ModelAndView myUrls() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/my-urls", "My Urls", "user/my-urls.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/statistics")
    public ModelAndView Statistics() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/statistics", "Statistics", "user/statistics.css");
        mvo.setJsLibrary(new String[] { "https://cdn.jsdelivr.net/npm/chart.js" });
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;

    }

    @GetMapping("/affiliate")
    public ModelAndView linkAffiliate() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/link-affiliate", "Link Affiliate",
                "user/link-affiliate.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/amount")
    public ModelAndView amount() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/amount", "Amount", "user/amount.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }

    @GetMapping("/request")
    public ModelAndView request() {
        ModelAndView mv = new ModelAndView("layouts/main");
        ModelAndViewObject mvo = new ModelAndViewObject("user/request", "Request", "user/request.css");
        mv.addObject(Utils.ModalAndViewObjectName, mvo);
        return mv;
    }
}
