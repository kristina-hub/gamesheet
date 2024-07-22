package com.example.team;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.SpringVersion;

import java.util.Optional;

@SpringBootApplication
public class TeamApplication {

    private static final Logger log = LoggerFactory.getLogger(TeamApplication.class);

    public static void main(String[] args) {
        System.out.println("Spring version: " + SpringVersion.getVersion());
        SpringApplication.run(TeamApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(TeamRepository repository) {
        return (args) -> {
            // save a few teams
            log.info("Saving teams...");
            repository.save(new Team("Brampton Steelheads"));
            repository.save(new Team("Guelph Storm"));
            repository.save(new Team("Oshawa Generals"));
            repository.save(new Team("Kitchener Rangers"));
            repository.save(new Team("Erie Otters"));

            // fetch all teams
            log.info("Teams found with findAll():");
            log.info("-------------------------------");
            repository.findAll().forEach(team -> log.info(team.toString()));
            log.info("");

            // fetch an individual team by ID
            Optional<Team> team = repository.findById(1L);
            log.info("Team found with findById(1L):");
            log.info("--------------------------------");
            log.info(team.toString());
            log.info("");

            // fetch teams by content
            log.info("Team found with findByContent('Kitchener Rangers'):");
            log.info("--------------------------------------------");
            repository.findByContent("Kitchener Rangers").forEach(item -> log.info(item.toString()));
            log.info("");
        };
    }

}