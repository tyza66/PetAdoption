package com.tyza66.cwly.mapper;

import com.tyza66.cwly.entity.Swiper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface SwiperMapper {
    @Select("select * from swiper")
    List<Swiper> findAll();
}
