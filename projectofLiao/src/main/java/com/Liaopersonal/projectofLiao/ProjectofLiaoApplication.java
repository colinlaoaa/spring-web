package com.Liaopersonal.projectofLiao;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@ServletComponentScan
@EnableScheduling
@SpringBootApplication

public class ProjectofLiaoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectofLiaoApplication.class, args);
	}

}
