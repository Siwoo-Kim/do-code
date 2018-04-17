package com.siwoo.docode.service;

import com.siwoo.docode.domain.Discussion;
import com.siwoo.docode.repository.DiscussionRepository;
import com.siwoo.docode.service.DiscussionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.text.Normalizer;
import java.time.Instant;
import java.util.Comparator;
import java.util.List;

@Service
public class DiscussionServiceImpl implements DiscussionService {
    @Autowired
    DiscussionRepository discussionRepository;

    @Override
    public List<Discussion> all() {
        List<Discussion> discussions = this.discussionRepository.findAll();
        discussions.sort(Comparator.comparing(Discussion::getLastUpdated));
        return discussions;
    }

    @Override
    public Discussion byId(long id) {
        Discussion discussion = this.discussionRepository.byId(id);
        Assert.notNull(discussion, "Discussion[id:" + id+"] not found");
        return discussion;
    }

    @Override
    public void save(Discussion discussion) {
        String subject = discussion.getSubject();
        subject = Normalizer.normalize(subject.toLowerCase(), Normalizer.Form.NFD)
                .replaceAll("\\p{InCOMBINING_DIACRITICAL_MARKS}+", "")
                .replaceAll("[^\\p{Alnum}]+", "-")
                .replace("--","-")
                .replace("--", "-")
                .replaceAll("[^a-z0-9]+$","")
                .replaceAll("^[^a-z0-9]+","");
        discussion.setUriSafeSubject(subject);
        System.out.println(discussion.getUriSafeSubject());

        Instant now = Instant.now();
        discussion.setLastUpdated(now);

        if(discussion.getId() == null) {
            discussion.setCreated(now);
            discussion.getSubscribedUser().add(discussion.getUser());
            this.discussionRepository.save(discussion);
            System.out.println(this.discussionRepository.byId(discussion.getId()));
        }else {
            this.discussionRepository.update(discussion);
        }
    }
}
