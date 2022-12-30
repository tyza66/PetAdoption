package com.tyza66.cwly.controller;

import com.tyza66.cwly.common.Result;
import com.tyza66.cwly.mapper.PetsMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@Api(tags = "获取领养宠物信息")
@RestController
@RequestMapping("/pets")
public class PetsController {
    @Resource
    PetsMapper petsMapper;

    @ApiOperation(value = "查询所有待领养宠物")
    @GetMapping("/findAll")
    public Result<?> getImage() {
        Result<?> a = new Result(petsMapper.findAll());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }
}
