package cinemasystem.service;

import cinemasystem.model.Discount;
import cinemasystem.repository.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountService {

    @Autowired
    private DiscountRepository discountRepository;

    public List<Discount> getAllDiscounts() {
        return discountRepository.findAll();
    }

    public Discount getDiscountById(Long id) {
        return discountRepository.findById(id).orElse(null);
    }

    public Discount saveDiscount(Discount discount) {
        return discountRepository.save(discount);
    }

    public void deleteDiscount(Long id) {
        discountRepository.deleteById(id);
    }

    public Discount updateDiscount(Long id, Discount updatedDiscount) {
        Discount discount = discountRepository.findById(id).orElse(null);
        if (discount != null) {
            discount.setDescription(updatedDiscount.getDescription());
            discount.setMovie(updatedDiscount.getMovie());
            discount.setDiscountAmount(updatedDiscount.getDiscountAmount());
            discount.setStartDate(updatedDiscount.getStartDate());
            discount.setEndDate(updatedDiscount.getEndDate());
            return discountRepository.save(discount);
        }
        return null;
    }
}
