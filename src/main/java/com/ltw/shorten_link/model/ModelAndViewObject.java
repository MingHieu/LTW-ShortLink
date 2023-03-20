package com.ltw.shorten_link.model;

import io.micrometer.common.lang.Nullable;
import lombok.Data;
import lombok.NonNull;

@Data
public class ModelAndViewObject {
    @NonNull
    public String title;

    @NonNull
    public String css;

    @Nullable
    public String js;

    @Nullable
    public String[] cssLibrary;

    @Nullable
    public String[] jsLibrary;

    @Nullable
    public Object data;
}
