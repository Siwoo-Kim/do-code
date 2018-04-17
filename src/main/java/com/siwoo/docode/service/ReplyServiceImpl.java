package com.siwoo.docode.service;

import com.siwoo.docode.domain.Discussion;
import com.siwoo.docode.domain.Reply;
import com.siwoo.docode.repository.DiscussionRepository;
import com.siwoo.docode.repository.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ReplyServiceImpl implements ReplyService{
    @Autowired
    ReplyRepository replyRepository;
    @Autowired
    DiscussionRepository discussionRepository;
    @Autowired
    NotificationService notificationService;

    @Override
    public List<Reply> byDiscussionId(long discussionId) {
        List<Reply> replies = this.replyRepository.findByDiscussionId(discussionId);
        replies.sort(Comparator.comparing(Reply::getId));
        return replies;
    }

    @Override
    public void save(Reply reply) {
        Discussion discussion = this.discussionRepository.byId(reply.getDiscussionId());
        if(reply.getId() == null) {
            discussion.getSubscribedUser().add(reply.getUser());
            reply.setCreated(Instant.now());
            this.replyRepository.save(reply);
        } else {
            this.replyRepository.update(reply);
        }

        Set<String> recipients = new HashSet<>(discussion.getSubscribedUser());
        recipients.remove(reply.getUser());
        notificationService
                .sendNotification("Your subscribed post get replied!",
                        "Somone replied to \"" + discussion.getSubject() +".\"",
                        recipients);
        System.out.println("This one is before than {Finished notifying recipients}");
        this.discussionRepository.save(discussion);
    }
}
