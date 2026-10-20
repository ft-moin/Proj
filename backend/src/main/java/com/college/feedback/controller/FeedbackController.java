package com.college.feedback.controller;

import com.college.feedback.dto.FeedbackRequest;
import com.college.feedback.dto.ReceiptResponse;
import com.college.feedback.service.FeedbackService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    private final FeedbackService service;
    public FeedbackController(FeedbackService service){this.service=service;}
    @PostMapping
    public ReceiptResponse submit(@Valid @RequestBody FeedbackRequest request) {
        var saved = service.create(request);
        return new ReceiptResponse(saved.getReferenceId(), "Feedback submitted successfully");
    }
}
