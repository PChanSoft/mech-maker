package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name="mechs")
public class Mech {
    @Id
    @Column
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column
    private String modelName;

    @Column
    private String headName;

    @Column
    private String torsoName;

    @Column
    private String armsName;

    @Column
    private String legsName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public String getHeadName() {
        return headName;
    }

    public void setHeadName(String headName) {
        this.headName = headName;
    }

    public String getTorsoName() {
        return torsoName;
    }

    public void setTorsoName(String torsoName) {
        this.torsoName = torsoName;
    }

    public String getArmsName() {
        return armsName;
    }

    public void setArmsName(String armsName) {
        this.armsName = armsName;
    }

    public String getLegsName() {
        return legsName;
    }

    public void setLegsName(String legsName) {
        this.legsName = legsName;
    }
}
