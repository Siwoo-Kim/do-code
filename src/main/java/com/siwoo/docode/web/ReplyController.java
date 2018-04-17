package com.siwoo.docode.web;

import com.siwoo.docode.domain.Reply;
import com.siwoo.docode.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/reply")
public class ReplyController {

    @Autowired
    ReplyService replyService;

    @GetMapping(value = "{discussionId:\\d+}",params = "by=discussionId")
    List<Reply> byDiscussionId(@PathVariable long discussionId) {
        return replyService.byDiscussionId(discussionId);
    }

    @PostMapping(value ="{discussionId:\\d+}",params = "by=discussionId")
    Reply saveByDiscussionId(@PathVariable long discussionId,
                             @RequestBody Reply reply) {
        System.out.println(reply + "");
        if(reply.getDiscussionId() == null) {
            reply.setDiscussionId(discussionId);
        }
        replyService.save(reply);
        return reply;
    }
}
