package cinemasystem.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.proxy.HibernateProxy;

import java.util.Objects;

@Entity
@Table(name = "Customers")
@Getter
@Setter
@NoArgsConstructor
@ToString(exclude = "role")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phone;

    private String address;

    @ManyToOne
    @JoinColumn(name = "role_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Role role;

    // Custom equals() và hashCode() để tránh vấn đề proxy của Hibernate
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || HibernateProxy.class.isAssignableFrom(obj.getClass()) || getClass() != obj.getClass())
            return false;
        Customer customer = (Customer) obj;
        return id != null && id.equals(customer.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
