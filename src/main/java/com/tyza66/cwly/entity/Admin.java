package com.tyza66.cwly.entity;

import lombok.Data;

@Data
public class Admin {
    int id;
    String username;
    String password;
    int perminssion;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
