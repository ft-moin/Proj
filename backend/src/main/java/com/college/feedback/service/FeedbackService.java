package com.college.feedback.service;

import com.college.feedback.dto.FeedbackRequest;
import com.college.feedback.entity.Feedback;
import com.college.feedback.repository.FeedbackRepository;
import org.springframework.stereotype.Service;
import java.util.UUID;
import java.util.List;

@Service
public class FeedbackService {
    private final FeedbackRepository repository;
    public FeedbackService(FeedbackRepository repository){this.repository=repository;}
    public Feedback create(FeedbackRequest request) {
        String ref = "CF-" + UUID.randomUUID().toString().substring(0,8).toUpperCase();
        Feedback feedback = new Feedback(request.studentName(), request.studentEmail(), request.department(),
            request.category(), request.rating(), request.comments(), ref);
        return repository.save(feedback);
    }
    public List<Feedback> all(){return repository.findAllByOrderByCreatedAtDesc();}
    public long count(){return repository.count();}
    public double averageRating(){return repository.findAll().stream().mapToInt(Feedback::getRating).average().orElse(0.0);}
}
