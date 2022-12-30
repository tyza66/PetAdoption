package com.tyza66.cwly.controller;

import com.tyza66.cwly.common.Result;
import com.tyza66.cwly.mapper.SwiperMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@Api(tags = "获取轮播图模块")
@RestController
@RequestMapping("/swiper")
public class SwiperController {
    @Resource
    SwiperMapper swiperMapper;
    @ApiOperation(value = "查询所有轮播图")
    @GetMapping("/findAll")
    public Result<?> getImage(){
        Result<?> a = new Result(swiperMapper.findAll());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }
}
