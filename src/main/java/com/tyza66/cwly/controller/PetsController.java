package com.tyza66.cwly.controller;

import com.tyza66.cwly.common.Result;
import com.tyza66.cwly.entity.Admin;
import com.tyza66.cwly.entity.Pets;
import com.tyza66.cwly.mapper.PetsMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@Api(tags = "领养宠物信息模块")
@RestController
@SessionAttributes("currentAdmin")
@RequestMapping("/pets")
public class PetsController {
    @Resource
    PetsMapper petsMapper;

    @ApiOperation(value = "查询所有待领养宠物")
    @GetMapping("/findAll")
    public Result<?> getAnimal() {
        Result<?> a = new Result(petsMapper.findAll());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "删除待领养宠物")
    @GetMapping("/delete")
    public Result<?> deleteAnimal(@RequestParam int id, Model model) {
        Admin who = (Admin) model.getAttribute("currentAdmin");
        if (who.getPerminssion() == 1) {
            int ok = petsMapper.delete(id);
            if (ok >= 1) {
                return Result.success();
            }
        }
        return Result.error("1", "删除失败");
    }

    @ApiOperation(value = "修改待领养宠物")
    @PostMapping("/update")
    public Result<?> updateAnimal(@RequestBody Pets pets, Model model) {
        Admin who = (Admin) model.getAttribute("currentAdmin");
        if (who.getPerminssion() == 1) {
            int ok = petsMapper.update(pets);
            if (ok >= 1) {
                return Result.success();
            }
        }
        return Result.error("1", "上传失败");
    }

    @ApiOperation(value = "申请添加展示宠物")
    @PostMapping("/insert")
    public Result<?> insertNewAnimal(@RequestBody Pets pets) {
            int ok = petsMapper.insert(pets);
            if (ok >= 1) {
                return Result.success();
        }
        return Result.error("1", "提交失败");
    }

    @ApiOperation(value = "查询所有可见待领养宠物")
    @GetMapping("/findAllShow")
    public Result<?> getAnimalShow() {
        Result<?> a = new Result(petsMapper.findAllShow());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "查询所有申请展示领养宠物")
    @GetMapping("/findAllWait")
    public Result<?> getAnimalWait() {
        Result<?> a = new Result(petsMapper.findAllWait());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "查询所有删除待领养宠物")
    @GetMapping("/findAllDelete")
    public Result<?> getAnimalDelete() {
        Result<?> a = new Result(petsMapper.findAllDelete());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "通过待领养宠物申请")
    @GetMapping("/passAnimal")
    public Result<?> passAnimal(int id,Model model) {
        Admin who = (Admin) model.getAttribute("currentAdmin");
        if (who.getPerminssion() == 1) {
            int ok = petsMapper.pass(id);
            if (ok >= 1) {
                return Result.success();
            }
        }
        return Result.error("1", "上传失败");
    }

    @ApiOperation(value = "不通过待领养宠物申请")
    @GetMapping("/notPassAnimal")
    public Result<?> notPassAnimal(int id,Model model) {
        Admin who = (Admin) model.getAttribute("currentAdmin");
        if (who.getPerminssion() == 1) {
            int ok = petsMapper.notPass(id);
            if (ok >= 1) {
                return Result.success();
            }
        }
        return Result.error("1", "上传失败");
    }
}
