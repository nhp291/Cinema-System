package cinemaSystem.service;

import cinemaSystem.model.Customer;
import cinemaSystem.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();
        return customers;
    }

    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

//    public Customer saveCustomer(Customer customer) {
//        if (customer.getEmail() == null || customer.getEmail().isEmpty()) {
//            throw new IllegalArgumentException("Email must not be null or empty");
//        }
//        return customerRepository.save(customer);
//    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

//    public Customer updateCustomer(Long id, Customer updatedCustomer) {
//        Customer customer = customerRepository.findById(id).orElse(null);
//        if (customer != null) {
//            customer.setName(updatedCustomer.getName());
//            customer.setEmail(updatedCustomer.getEmail());
//            customer.setPhone(updatedCustomer.getPhone());
//            customer.setAddress(updatedCustomer.getAddress());
//            return customerRepository.save(customer);
//        }
//        return null;
//    }



}
