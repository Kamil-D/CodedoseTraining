package org.codedose;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@ComponentScan
@EnableAutoConfiguration
@EnableWebMvc
@SpringBootApplication
public class CodedoseTrainingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodedoseTrainingApplication.class, args);
	}

}
