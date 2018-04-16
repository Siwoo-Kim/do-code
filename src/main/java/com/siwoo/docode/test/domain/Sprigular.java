package com.siwoo.docode.test.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter @ToString
public class Sprigular {

    private String email;
    private String password;
    private String name;

    private LocalDateTime registered;
    private LocalDateTime updated;

    private Role role;

    @Getter @Setter @ToString
    public static class Role {
        public static enum PERMISSION {
            READ, WRITE, DELETE
        }

        private String role;
        private List<PERMISSION> permissions = new ArrayList<>();

        public void addPermission(PERMISSION permission){
            this.permissions.add(permission);
        }
    }
}
