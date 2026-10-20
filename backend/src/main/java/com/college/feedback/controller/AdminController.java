package com.college.feedback.controller;

import com.college.feedback.dto.FeedbackResponse;
import com.college.feedback.service.FeedbackService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final FeedbackService service;
    public AdminController(FeedbackService service){this.service=service;}
    @GetMapping("/stats")
    public Object stats(){return java.util.Map.of("totalResponses",service.count(),"averageRating",service.averageRating());}
    @GetMapping("/feedback")
    public List<FeedbackResponse> feedback(){return service.all().stream().map(f -> new FeedbackResponse(
        f.getId(),f.getStudentName(),f.getStudentEmail(),f.getDepartment(),f.getCategory(),
        f.getRating(),f.getComments(),f.getReferenceId(),f.getCreatedAt())).toList();}
    @GetMapping("/export.csv")
    public String exportCsv(){
        StringBuilder b=new StringBuilder("id,name,email,department,category,rating,referenceId,createdAt\\n");
        service.all().forEach(f -> b.append(f.getId()).append(",\\\"").append(f.getStudentName().replace("\\\"","\\\"\\\""))
            .append("\\\",").append(f.getStudentEmail()).append(",").append(f.getDepartment()).append(",")
            .append(f.getCategory()).append(",").append(f.getRating()).append(",").append(f.getReferenceId())
            .append(",").append(f.getCreatedAt()).append("\\n"));
        return b.toString();
    }
}
