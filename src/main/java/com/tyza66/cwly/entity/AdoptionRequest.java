package com.tyza66.cwly.entity;

import lombok.Data;

@Data
public class AdoptionRequest {
    int id;
    String aid;
    String name;
    String phone;
    String home;
    String tiaojian;
    String other;
    int statu;
}
