package com.tyza66.cwly;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.tyza66.cwly.mapper")
public class CwlyApplication {

	public static void main(String[] args) {
		SpringApplication.run(CwlyApplication.class, args);
	}

}
