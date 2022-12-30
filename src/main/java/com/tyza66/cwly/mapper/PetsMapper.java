package com.tyza66.cwly.mapper;

import com.tyza66.cwly.entity.Pets;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface PetsMapper {
    @Select("select * from pets")
    List<Pets> findAll();
}
