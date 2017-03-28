package org.codedose.controller;

import org.codedose.model.Talk;
import org.codedose.repository.TalkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by Kamil on 2017-03-28.
 */
//@RestController
//@RequestMapping("/talks")
@Controller
public class TalkController {

    @Autowired
    private TalkRepository talkRepository;


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String welcome(Map<String, Object> model) {
        return "index";
    }

//    @ResponseBody
//    @RequestMapping(value = "/getAjax", method = RequestMethod.GET)
//    public String getAjax(Map<String, Object> model) {
//        return "DUPA DUPA";
//    }
//
//
//    @RequestMapping("/")
//    public String start(Map<String, Object> model) {
//        return "index";
//    }
//
//    @RequestMapping(value = "/addTalk", method = RequestMethod.POST)
//    public void addTalk(@RequestBody Talk talk) {
//
//        talkRepository.save(talk);
//    }
//
//    @RequestMapping(value = "/addTalks", method = RequestMethod.GET)
//    public List<Talk> getTalks() {
//
//        return talkRepository.findAll();
//    }

}
