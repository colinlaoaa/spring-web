package com.Liaopersonal.projectofLiao.service;

import com.Liaopersonal.projectofLiao.Dao.RecruiterDao;
import com.Liaopersonal.projectofLiao.domain.Recruiter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class recruiterServiceImp implements recruiterService {

    @Autowired
    private RecruiterDao RecruiterDao;



    @Override
    public List<Recruiter> findAll() {
        return RecruiterDao.findAll();
    }

    @Override
    public Recruiter findByName(String name) {
        return RecruiterDao.findByName(name);
    }



    @Override
    public Recruiter saveimp(Recruiter Recruiter) {
        return RecruiterDao.save(Recruiter);
    }

    @Override
    public Recruiter updateimp(Recruiter Recruiter) {
        return RecruiterDao.save(Recruiter);
    }
}
