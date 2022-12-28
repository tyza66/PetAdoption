package com.tyza66.cwly.mapper;

import com.tyza66.cwly.entity.Admin;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface AdminMapper {
    @Select("select * from admins")
    List<Admin> findAll();
}
