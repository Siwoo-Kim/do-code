package com.siwoo.docode.repository;

import com.siwoo.docode.domain.Reply;

import java.util.List;

public interface ReplyRepository {
    List<Reply> findByDiscussionId(long discussionId);
    void save(Reply reply);
    void update(Reply reply);

}
