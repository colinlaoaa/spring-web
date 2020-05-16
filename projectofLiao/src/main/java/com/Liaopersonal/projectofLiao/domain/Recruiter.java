package com.Liaopersonal.projectofLiao.domain;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="recruiter")
public class Recruiter implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String email;

    @Override
    public String toString() {
        return "Recruiter{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    @Column
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @Column
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Recruiter() {
    }
}
