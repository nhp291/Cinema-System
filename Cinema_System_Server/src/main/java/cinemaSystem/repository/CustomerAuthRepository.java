package cinemasystem.repository;

import cinemasystem.model.CustomerAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerAuthRepository extends JpaRepository<CustomerAuth, Integer> {
}
