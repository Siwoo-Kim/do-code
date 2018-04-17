package com.siwoo.docode.web;

import com.siwoo.docode.domain.Discussion;
import com.siwoo.docode.service.DiscussionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/discussion")
public class DiscussionController {

    @Autowired
    DiscussionService discussionService;

    @GetMapping
    public List<Discussion> all() {
        return discussionService.all();
    }

    @PostMapping
    public Discussion save(@RequestBody Discussion discussion) {
        discussionService.save(discussion);
        return discussion;
    }

    @GetMapping("{id:\\d+}")
    public Discussion byId(@PathVariable("id") long id){
        return discussionService.byId(id);
    }


}
