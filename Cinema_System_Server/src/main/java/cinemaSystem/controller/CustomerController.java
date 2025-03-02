package cinemasystem.controller;

import cinemasystem.dto.customer.CustomerCreateDTO;
import cinemasystem.dto.customer.CustomerDTO;
import cinemasystem.dto.customer.CustomerResponseDTO;
import cinemasystem.service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    // Lấy danh sách khách hàng
    @GetMapping
    public ResponseEntity<List<CustomerDTO>> getAllCustomers() {
        return ResponseEntity.ok(customerService.getAllCustomers());
    }

    // Lấy khách hàng theo ID
    @GetMapping("/{id}")
    public ResponseEntity<CustomerResponseDTO> getCustomerById(@PathVariable Long id) {
        CustomerResponseDTO customer = customerService.getCustomerById(id);
        return customer != null ? ResponseEntity.ok(customer) : ResponseEntity.notFound().build();
    }

    // Tạo khách hàng mới
    @PostMapping("/create")
    public ResponseEntity<CustomerResponseDTO> createCustomer(@Valid @RequestBody CustomerCreateDTO dto) {
        return ResponseEntity.ok(customerService.createCustomer(dto));
    }

    // Cập nhật khách hàng
    @PutMapping("/{id}")
    public ResponseEntity<CustomerResponseDTO> updateCustomer(@PathVariable Long id, @Valid @RequestBody CustomerCreateDTO dto) {
        CustomerResponseDTO updatedCustomer = customerService.updateCustomer(id, dto);
        return updatedCustomer != null ? ResponseEntity.ok(updatedCustomer) : ResponseEntity.notFound().build();
    }

    // Xóa khách hàng
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}
