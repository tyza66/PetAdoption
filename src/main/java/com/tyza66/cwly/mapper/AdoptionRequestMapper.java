package com.tyza66.cwly.mapper;

import com.tyza66.cwly.entity.AdoptionRequest;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AdoptionRequestMapper {
    @Select("select * from adoptionrequest")
    List<AdoptionRequest> findAll();

    @Select("select * from adoptionrequest where statu = 0")
    List<AdoptionRequest> findNotPass();

    @Select("select * from adoptionrequest where statu = 1")
    List<AdoptionRequest> findNoPass();

    @Select("select * from adoptionrequest where statu = 2")
    List<AdoptionRequest> findPass();

    @Insert("INSERT INTO adoptionrequest(aid, name, phone, home, tiaojian, other, statu) VALUES (#{aid}, #{name}, #{phone}, #{home}, #{tiaojian}, #{other}, 0)")
    @Transactional
    int update(AdoptionRequest adoptionRequest);

    @Update("UPDATE adoptionrequest SET statu = 1 WHERE id = #{id}")
    @Transactional
    int noPass(int id);

    @Update("UPDATE adoptionrequest SET statu = 2 WHERE id = #{id}")
    @Transactional
    int pass(int id);
}
