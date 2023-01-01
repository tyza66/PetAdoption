package com.tyza66.cwly.mapper;

import com.tyza66.cwly.entity.Pets;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
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

    @Insert("INSERT INTO pets (name, jieshao, touxiang, statu) VALUES (#{name}, #{jieshao}, #{touxiang}, 0)")
    @Transactional
    int insert(Pets pets);

    @Select("select * from pets where statu = 1")
    List<Pets> findAllShow();

    @Select("select * from pets where statu = 0")
    List<Pets> findAllWait();

    @Select("select * from pets where statu = 1")
    List<Pets> findAllDelete();

    @Update("UPDATE pets SET statu = 1 WHERE id = #{id}")
    @Transactional
    int pass(int id);

    @Update("UPDATE pets SET statu = 2 WHERE id = #{id}")
    @Transactional
    int notPass(int id);
}
