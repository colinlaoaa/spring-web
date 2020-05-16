package com.Liaopersonal.projectofLiao.Controller;

import com.Liaopersonal.projectofLiao.domain.Recruiter;
import com.Liaopersonal.projectofLiao.service.recruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@EnableAutoConfiguration
@ComponentScan
@Controller
public class FindRecruit {

    @Autowired
    private recruiterService recruiterService;



    @PostMapping("/emp")
    public String save(Recruiter emp){
        recruiterService.saveimp(emp);

        return "welcome.html";

    }

    @ResponseBody
    @PutMapping("/emp")
    public Recruiter update(Recruiter emp){
        return recruiterService.saveimp(emp);
    }

    @GetMapping("/emp/findByName")
    public Recruiter findByNameAndPassword(String name){
    System.out.println(name);
        return recruiterService.findByName(name);
    }



    /**
     * 调用jpa封装好的 查询所有方法
     * @return
     */
    @ResponseBody
    @GetMapping("/emp/all")
    public List<Recruiter>  findJpaAll(){
        return recruiterService.findAll();
    }


}
