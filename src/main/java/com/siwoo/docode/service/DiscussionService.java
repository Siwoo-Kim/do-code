package com.siwoo.docode.service;

import com.siwoo.docode.domain.Discussion;

import java.util.List;

public interface DiscussionService {

    List<Discussion> all();
    Discussion byId(long id);
    void save(Discussion discussion);

}
