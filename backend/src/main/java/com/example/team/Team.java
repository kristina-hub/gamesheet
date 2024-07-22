package com.example.team;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.envers.Audited;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@SequenceGenerator(name = "team_generator", sequenceName = "team_seq")
@Audited
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "team_generator")
    private Long id;
    private String content;

    public Team(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return String.format("Team [id=%d, content='%s']", id, content);
    }
}
