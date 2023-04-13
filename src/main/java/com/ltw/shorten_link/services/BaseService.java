package com.ltw.shorten_link.services;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ltw.shorten_link.model.Pagination;
import com.ltw.shorten_link.services.interfaces.BaseServiceInterface;

@Service
public class BaseService<T> implements BaseServiceInterface<T> {

    JpaRepository<T, Long> repository;

    @Override
    public void create(T t) {
        repository.save(t);
    }

    @Override
    public void update(T t) {
        repository.save(t);
    }

    @Override
    public T getOne(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public Pagination<T> getMany(int page, int per_page) {
        Pagination<T> pagination = new Pagination<T>(page, per_page);
        pagination.setData(repository.findAll(PageRequest.of(page - 1, per_page)).getContent());
        return pagination;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
