package atm1.mittelstufenprojekt.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Map;

@RestController
class HealthController {
	@GetMapping("/api/health")
	Map<String, Object> health() {
		return Map.of(
			"status", "ok",
			"timestamp", Instant.now().toString(),
			"service", "backend"
		);
	}
}