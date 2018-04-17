package com.siwoo.docode.repository;

import com.siwoo.docode.domain.Reply;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class InMemoryReplyRepository implements ReplyRepository{
    private final Map<Long, Reply> database = new HashMap<>();
    private volatile long replyIdSuquence = 1L;

    @Override
    public List<Reply> findByDiscussionId(long discussionId) {
        ArrayList<Reply> replies = new ArrayList<>(database.values());
        replies.removeIf(reply -> reply.getDiscussionId() != discussionId);
        return replies;
    }

    @Override
    public void save(Reply reply) {
        reply.setId(this.getNextReplyId());
        database.put(reply.getId(), reply);
    }

    private synchronized Long getNextReplyId() {
        return replyIdSuquence++;
    }

    @Override
    public void update(Reply reply) {
        database.put(reply.getId(), reply);
    }
}
