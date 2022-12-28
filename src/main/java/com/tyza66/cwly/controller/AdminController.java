package com.tyza66.cwly.controller;

import com.tyza66.cwly.entity.Admin;
import com.tyza66.cwly.mapper.AdminMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Resource
    AdminMapper adminMapper;

    @GetMapping("/findAll")
    public List<Admin> getAdmin(){
        return adminMapper.findAll();
    }
}
