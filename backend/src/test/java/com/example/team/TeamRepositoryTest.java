package com.example.team;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.team.Team;
import com.example.team.TeamRepository;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeamRepositoryTest {

	private final TeamRepository teamRepository;

	@Autowired
	public TeamRepositoryTest(TeamRepository teamRepository) {
		this.teamRepository = teamRepository;
	}

	@Test
	public void findingCustomerById() {
		Team savedTeam = teamRepository.save(new Team("London Knights"));
		assertThat(teamRepository.findById(savedTeam.getId())).isInstanceOf(Optional.class);
	}

	@Test
	public void findingAllCustomers() {
		teamRepository.save(new Team("Kingston Frontenacs"));
		teamRepository.save(new Team("Erie Otters"));
		assertThat(teamRepository.findAll()).isInstanceOf(List.class);
	}

	@Test
	public void savingCustomer() {
		Team savedTeam = teamRepository.save(new Team("Sudbury Wolves"));
		Team team = teamRepository.findById(savedTeam.getId()).orElseGet(() -> new Team("Sarnia Sting"));
		assertThat(team.getContent()).isEqualTo("Sudbury Wolves");
	}

}
