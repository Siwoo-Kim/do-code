package com.siwoo.docode.repository;

import com.siwoo.docode.domain.Discussion;

import java.util.List;

public interface DiscussionRepository {

    List<Discussion> findAll();
    Discussion byId(long id);
    void save(Discussion discussion);
    void update(Discussion discussion);
}
