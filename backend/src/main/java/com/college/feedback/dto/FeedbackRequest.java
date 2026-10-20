package com.college.feedback.dto;

import jakarta.validation.constraints.*;

public record FeedbackRequest(
    @NotBlank @Size(max=100) String studentName,
    @NotBlank @Email @Size(max=200) String studentEmail,
    @NotBlank @Size(max=100) String department,
    @NotBlank @Size(max=80) String category,
    @NotNull @Min(1) @Max(5) Integer rating,
    @NotBlank @Size(max=3000) String comments
) {}
