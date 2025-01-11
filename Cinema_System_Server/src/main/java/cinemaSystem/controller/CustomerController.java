package cinemaSystem.controller;

import cinemaSystem.model.Customer;
import cinemaSystem.service.CustomerService;
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

//    @GetMapping("/")
//    public List<Customer> getAllCustomers() {
//        return customerService.getAllCustomers();
//    }
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
    public Customer getCustomerByEmail(String email) {
        return customerService.getCustomerByEmail(email);
    }

    @PostMapping("/")
    public Object createCustomer(@RequestBody Customer customer) {
        System.out.println(customer.getEmail());
        return ResponseEntity.ok(customer.getEmail());
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(Long id) {
        customerService.deleteCustomer(id);
    }

//    @PutMapping("/{id}")
//    public Customer updateCustomer(Long id, Customer updatedCustomer) {
//        return customerService.updateCustomer(id, updatedCustomer);
//    }

}
