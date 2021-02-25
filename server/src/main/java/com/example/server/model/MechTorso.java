package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name="torso")
public class MechTorso {
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private int defense;

    @Column
    private int cooling;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDefense() {
        return defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public int getCooling() {
        return cooling;
    }

    public void setCooling(int cooling) {
        this.cooling = cooling;
    }
}
