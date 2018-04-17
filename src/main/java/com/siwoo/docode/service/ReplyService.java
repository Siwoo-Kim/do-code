package com.siwoo.docode.service;

import com.siwoo.docode.domain.Reply;

import java.util.List;

public interface ReplyService {

    List<Reply> byDiscussionId(long discussionId);
    void save(Reply reply);
}
