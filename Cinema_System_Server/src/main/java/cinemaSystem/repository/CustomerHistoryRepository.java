package cinemaSystem.repository;

import cinemaSystem.model.CustomerHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerHistoryRepository extends JpaRepository<CustomerHistory, Long> {
}
