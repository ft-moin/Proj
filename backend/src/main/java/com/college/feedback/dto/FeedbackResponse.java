package com.college.feedback.dto;

import java.time.LocalDateTime;
public record FeedbackResponse(Long id, String studentName, String studentEmail, String department,
    String category, Integer rating, String comments, String referenceId, LocalDateTime createdAt) {}
