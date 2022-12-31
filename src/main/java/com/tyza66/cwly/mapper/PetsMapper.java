package com.tyza66.cwly.mapper;

import com.tyza66.cwly.entity.Pets;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PetsMapper {
    @Select("select * from pets")
    List<Pets> findAll();

    @Delete("DELETE FROM pets WHERE id = #{id}")
    @Transactional
    int delete(int id);

    @Update("UPDATE pets SET name = #{name}, jieshao = #{jieshao}, touxiang = #{touxiang} WHERE id = #{id}")
    @Transactional
    int update(Pets pets);
}
