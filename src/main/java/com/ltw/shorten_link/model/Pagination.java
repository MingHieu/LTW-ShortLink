package com.ltw.shorten_link.model;

import java.util.List;

import lombok.Data;
import lombok.NonNull;

@Data
public class Pagination<T> {
    @NonNull
    public int page;

    @NonNull
    public int per_page;

    public String query;

    public List<T> data;
}
