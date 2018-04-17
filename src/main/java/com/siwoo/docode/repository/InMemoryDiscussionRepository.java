package com.siwoo.docode.repository;

import com.siwoo.docode.domain.Discussion;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class InMemoryDiscussionRepository implements DiscussionRepository {
    private final Map<Long,Discussion> database = new HashMap<>();
    private volatile long discussionIdSequence = 1L;

    @Override
    public List<Discussion> findAll() {
        return new ArrayList<>(this.database.values());
    }

    @Override
    public Discussion byId(long id) {
        return this.database.get(id);
    }

    @Override
    public void save(Discussion discussion) {
        discussion.setId(this.getNextDiscussionId());
        System.out.println(discussion + "");
        this.database.put(discussion.getId(), discussion);
    }

    private synchronized Long getNextDiscussionId() {
        return this.discussionIdSequence++;
    }

    @Override
    public void update(Discussion discussion) {
        this.database.put(discussion.getId(), discussion);
    }
}
