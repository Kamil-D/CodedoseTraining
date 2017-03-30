package org.codedose.controller;

import org.codedose.util.StaticResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by Kamil on 2017-03-28.
 */
@RestController
public class RestAjaxController {

    @Autowired
    StaticResources staticResources;

    @RequestMapping(value = "/getAjax", method = RequestMethod.GET)
    public String getAjax(Map<String, Object> model) {
        return staticResources.HughJackmanBiography;
    }

}
