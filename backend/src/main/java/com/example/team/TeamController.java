package com.example.team;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.envers.AuditReader;
import org.hibernate.envers.AuditReaderFactory;
import org.hibernate.envers.query.AuditEntity;
import org.hibernate.envers.query.AuditQuery;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@CrossOrigin(originPatterns = "*")
@RestController
public class TeamController {

    @PersistenceContext
    private EntityManager entityManager;

    private final TeamRepository teamRepository;
    private static final String template = "%s";

    public TeamController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @PostMapping("/team")
    public Team postTeam(@RequestParam(value = "name", defaultValue = "Team") String name) {
        Team team = new Team(String.format(template, name));
        return teamRepository.save(team);
    }

    // Add an additional endpoint to your controller to retrieve previous teams
    @GetMapping("/team")
    public List<Team> getAllTeams() {
        Iterable<Team> iterable = teamRepository.findAll();
        List<Team> teams = new ArrayList<>();
        iterable.forEach(teams::add);
        return teams;
    }

    @GetMapping("/team/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable(value = "id") Long teamId) {
        Optional<Team> team = teamRepository.findById(teamId);
        return team.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add an endpoint for editing teams
    @PutMapping("/team/{id}/edit")
    public ResponseEntity<?> editTeam(@PathVariable Long id, @RequestBody Team updatedTeam) {
        Optional<Team> optionalTeam = teamRepository.findById(id);
        if (optionalTeam.isPresent()) {
            Team existingTeam = optionalTeam.get();
            existingTeam.setContent(updatedTeam.getContent());
            teamRepository.save(existingTeam);
            return ResponseEntity.ok(existingTeam);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Add a history endpoint to retrieve the auditing history of a team
    @SuppressWarnings("unchecked")
    @GetMapping("/team/{id}/history")
    public List<Team> getTeamHistory(@PathVariable Long id) {
        AuditReader reader = AuditReaderFactory.get(entityManager);
        AuditQuery query = reader.createQuery()
                .forRevisionsOfEntity(Team.class, true, true)
                .add(AuditEntity.id().eq(id));
        return query.getResultList();
    }
}
