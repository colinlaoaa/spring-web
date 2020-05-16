package com.Liaopersonal.projectofLiao.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Liaopersonal.projectofLiao.domain.Recruiter;

import java.util.List;

public interface RecruiterDao extends JpaRepository<Recruiter,Integer> {
    List<Recruiter> findAll();
    Recruiter findByName(String name);


}
