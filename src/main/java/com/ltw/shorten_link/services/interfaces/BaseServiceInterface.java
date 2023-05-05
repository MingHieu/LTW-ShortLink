package com.ltw.shorten_link.services.interfaces;

import com.ltw.shorten_link.interfaces.Pagination;

public interface BaseServiceInterface<T> {

    T create(T t);

    T update(T t);

    T getOne(Long id);

    Pagination<T> getMany(int page, int per_page);

    void delete(Long id);
}
