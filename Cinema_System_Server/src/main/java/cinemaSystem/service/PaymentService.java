package cinemaSystem.service;

import cinemaSystem.model.Payment;
import cinemaSystem.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments() {
        List<Payment> payments = paymentRepository.findAll();
        return payments;
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    public Payment updatePayment(Long id, Payment updatedPayment) {
        Optional<Payment> existingPaymentOpt = paymentRepository.findById(id);
        if (existingPaymentOpt.isPresent()) {
            Payment payment = existingPaymentOpt.get();
            payment.setAmount(updatedPayment.getAmount());
            payment.setPaymentMethod(updatedPayment.getPaymentMethod());
            payment.setStatus(updatedPayment.getStatus());
            return paymentRepository.save(payment);
        }
        return null;
    }

}
