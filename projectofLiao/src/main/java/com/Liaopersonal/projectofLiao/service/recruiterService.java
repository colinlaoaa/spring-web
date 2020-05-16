package com.Liaopersonal.projectofLiao.service;

import com.Liaopersonal.projectofLiao.domain.Recruiter;

import java.util.List;

public interface recruiterService {
    List<Recruiter> findAll();
    Recruiter findByName(String name);
    Recruiter saveimp(Recruiter Recruiter);
    Recruiter updateimp(Recruiter Recruiter);
}
