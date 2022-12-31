package com.tyza66.cwly.controller;

import com.tyza66.cwly.common.Result;
import com.tyza66.cwly.entity.Admin;
import com.tyza66.cwly.entity.AdoptionRequest;
import com.tyza66.cwly.mapper.AdoptionRequestMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@Api(tags = "领养申请模块")
@RestController
@SessionAttributes("currentAdmin")
@RequestMapping("/adoption")
public class AdoptionRequestController {
    @Resource
    AdoptionRequestMapper adoptionRequestMapper;

    @ApiOperation(value = "查询所有请求记录")
    @GetMapping("/findAll")
    public Result<?> getAdoptionRequest() {
        Result<?> a = new Result(adoptionRequestMapper.findAll());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "查询未被受理的请求记录")
    @GetMapping("/findNotPass")
    public Result<?> getNotPassAdoptionRequest() {
        Result<?> a = new Result(adoptionRequestMapper.findNotPass());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "上传一条请求")
    @PostMapping("/update")
    public Result<?> updateAdoptionRequest(@RequestBody AdoptionRequest adoptionRequest) {
        int ok = adoptionRequestMapper.update(adoptionRequest);
        if (ok >= 1) {
            return Result.success();
        }
        return Result.error("1", "上传失败");
    }

    @ApiOperation(value = "查询已驳回的请求记录")
    @GetMapping("/findNoPass")
    public Result<?> getNoPassAdoptionRequest() {
        Result<?> a = new Result(adoptionRequestMapper.findNoPass());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "查询已受理的请求记录")
    @GetMapping("/findPass")
    public Result<?> getPassAdoptionRequest() {
        Result<?> a = new Result(adoptionRequestMapper.findPass());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "驳回请求")
    @GetMapping("/NoPass")
    public Result<?> noPassAdoptionRequest(@RequestParam int id,Model model) {
        Admin who = (Admin) model.getAttribute("currentAdmin");
        if (who.getPerminssion() == 1) {
            int ok = adoptionRequestMapper.noPass(id);
            if (ok >= 1) {
                return Result.success();
            }
        }
        return Result.error("1", "驳回失败");
    }

    @ApiOperation(value = "受理请求")
    @GetMapping("/pass")
    public Result<?> passAdoptionRequest(@RequestParam int id,Model model) {
        Admin who = (Admin) model.getAttribute("currentAdmin");
        if (who.getPerminssion() == 1) {
            int ok = adoptionRequestMapper.pass(id);
            if (ok >= 1) {
                return Result.success();
            }
        }
        return Result.error("1", "受理失败");
    }
}
