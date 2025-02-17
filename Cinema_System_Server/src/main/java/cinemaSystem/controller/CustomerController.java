package cinemaSystem.controller;

import cinemaSystem.model.Customer;
import cinemaSystem.service.CustomerService;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);  // Đảm bảo trả về đúng dữ liệu
    }


    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id);
    }

    @GetMapping("/email")
    public Customer getCustomerByEmail(@RequestParam String email) {
        return customerService.getCustomerByEmail(email);
    }

//    @PostMapping("/")
//    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
//        Customer savedCustomer = customerService.saveCustomer(customer);
//        return ResponseEntity.ok(savedCustomer);
//    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
    }

//    @PutMapping("/{id}")
//    public Customer updateCustomer(@PathVariable Long id,@RequestBody Customer updatedCustomer) {
//        return customerService.updateCustomer(id, updatedCustomer);
//    }

}
