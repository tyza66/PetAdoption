package com.tyza66.cwly.controller;

import com.tyza66.cwly.common.Result;
import com.tyza66.cwly.entity.Admin;
import com.tyza66.cwly.mapper.AdminMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

@Api(tags = "管理员模块")
@RestController
@SessionAttributes("currentAdmin")
@RequestMapping("/admin")
public class AdminController {
    @Resource
    AdminMapper adminMapper;

    @ApiOperation(value = "查询所有管理员记录")
    @GetMapping("/findAll")
    public Result<?> getAdmin() {
        Result<?> a = new Result(adminMapper.findAll());
        a.setCode("200");
        a.setMsg("成功");
        return a;
    }

    @ApiOperation(value = "管理员登录")
    @PostMapping("/login")
    public Result loginAdmin(@RequestBody Admin admin, Model model, HttpSession session) {
        List<Admin> who = adminMapper.login(admin.getUsername());
        if (who.size() != 0 && who.get(0).getPassword().equals(admin.getPassword())) {
            model.addAttribute("currentAdmin", who.get(0));
            return Result.success();
        }
        return Result.error("1", "登陆失败");
    }

    @ApiOperation(value = "验证登录状态")
    @GetMapping("/logined")
    public Result logined(Model model) {
        Admin currentUser = (Admin) model.getAttribute("currentAdmin");
        return new Result(currentUser);
    }
}
