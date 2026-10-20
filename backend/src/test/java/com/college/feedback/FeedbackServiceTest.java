package com.college.feedback;

import com.college.feedback.dto.FeedbackRequest;
import com.college.feedback.entity.Feedback;
import com.college.feedback.repository.FeedbackRepository;
import com.college.feedback.service.FeedbackService;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class FeedbackServiceTest {
    @Test void createsFeedbackWithReference() {
        FeedbackRepository repo = mock(FeedbackRepository.class);
        FeedbackService service = new FeedbackService(repo);
        when(repo.save(any(Feedback.class))).thenAnswer(i -> i.getArgument(0));
        var result = service.create(new FeedbackRequest("Test Student","test@example.com","CS","Library",5,"Great"));
        assertTrue(result.getReferenceId().startsWith("CF-"));
        verify(repo).save(any(Feedback.class));
    }
}
