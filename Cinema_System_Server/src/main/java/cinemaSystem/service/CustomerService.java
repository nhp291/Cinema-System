package cinemasystem.service;

import cinemasystem.dto.customer.CustomerCreateDTO;
import cinemasystem.dto.customer.CustomerDTO;
import cinemasystem.dto.customer.CustomerResponseDTO;
import cinemasystem.dto.role.RoleDTO;
import cinemasystem.model.Customer;
import cinemasystem.model.Role;
import cinemasystem.repository.CustomerRepository;
import cinemasystem.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private RoleRepository roleRepository;

    // Lấy danh sách tất cả khách hàng
    public List<CustomerDTO> getAllCustomers() {
        return customerRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // Lấy khách hàng theo ID
    public CustomerResponseDTO getCustomerById(Long id) {
        return customerRepository.findById(id)
                .map(this::convertToResponseDTO)
                .orElse(null);
    }

    // Tạo khách hàng
    public CustomerResponseDTO createCustomer(CustomerCreateDTO dto) {
        Customer customer = new Customer();
        customer.setName(dto.getName());
        customer.setEmail(dto.getEmail());
        customer.setPhone(dto.getPhone());
        customer.setAddress(dto.getAddress());

        Role role = roleRepository.findById(dto.getRoleId()).orElse(null);
        customer.setRole(role);

        Customer savedCustomer = customerRepository.save(customer);
        return convertToResponseDTO(savedCustomer);
    }

    // Cập nhật khách hàng
    public CustomerResponseDTO updateCustomer(Long id, CustomerCreateDTO dto) {
        return customerRepository.findById(id).map(customer -> {
            customer.setName(dto.getName());
            customer.setEmail(dto.getEmail());
            customer.setPhone(dto.getPhone());
            customer.setAddress(dto.getAddress());

            Role role = roleRepository.findById(dto.getRoleId()).orElse(null);
            customer.setRole(role);

            Customer updatedCustomer = customerRepository.save(customer);
            return convertToResponseDTO(updatedCustomer);
        }).orElse(null);
    }

    // Xóa khách hàng
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    // Chuyển đổi từ Entity → DTO
    private CustomerDTO convertToDTO(Customer customer) {
        CustomerDTO dto = new CustomerDTO();
        dto.setId(customer.getId());
        dto.setName(customer.getName());
        dto.setEmail(customer.getEmail());
        dto.setPhone(customer.getPhone());
        dto.setAddress(customer.getAddress());
        return dto;
    }

    private CustomerResponseDTO convertToResponseDTO(Customer customer) {
        CustomerResponseDTO dto = new CustomerResponseDTO();
        dto.setId(customer.getId());
        dto.setName(customer.getName());
        dto.setEmail(customer.getEmail());
        dto.setPhone(customer.getPhone());
        dto.setAddress(customer.getAddress());

        if (customer.getRole() != null) {
            RoleDTO roleDTO = new RoleDTO();
            roleDTO.setId(customer.getRole().getId());
            roleDTO.setName(customer.getRole().getName());
            dto.setRole(roleDTO);
        }

        return dto;
    }
}
