package com.ltw.shorten_link.click;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ltw.shorten_link.link.Link;
import com.ltw.shorten_link.link.LinkRepository;

@Service
public class ClickService {
    @Autowired
    private ClickRepository clickRepository;

    @Autowired
    private LinkRepository linkRepository;

    public Click create(long linkId) {
        Link link = linkRepository.findById(linkId).get();
        Click click = new Click();
        click.setLink(link);
        return clickRepository.save(click);
    }
}
