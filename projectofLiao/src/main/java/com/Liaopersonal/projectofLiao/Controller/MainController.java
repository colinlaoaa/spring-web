package com.Liaopersonal.projectofLiao.Controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;




	@EnableAutoConfiguration
	@ComponentScan
	@Controller
	public class MainController {

	    @GetMapping("/")
	    public String index() {
	        
	        return "default.html";
	    }
}
