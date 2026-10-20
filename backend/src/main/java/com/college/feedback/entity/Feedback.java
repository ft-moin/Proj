package com.college.feedback.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="feedback")
public class Feedback {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false) private String studentName;
    @Column(nullable=false) private String studentEmail;
    @Column(nullable=false) private String department;
    @Column(nullable=false) private String category;
    @Column(nullable=false) private Integer rating;
    @Column(nullable=false, length=3000) private String comments;
    @Column(nullable=false, unique=true) private String referenceId;
    @Column(nullable=false) private LocalDateTime createdAt = LocalDateTime.now();

    protected Feedback() {}
    public Feedback(String studentName, String studentEmail, String department, String category, Integer rating, String comments, String referenceId) {
        this.studentName=studentName; this.studentEmail=studentEmail; this.department=department;
        this.category=category; this.rating=rating; this.comments=comments; this.referenceId=referenceId;
        this.createdAt=LocalDateTime.now();
    }
    public Long getId(){return id;} public String getStudentName(){return studentName;}
    public String getStudentEmail(){return studentEmail;} public String getDepartment(){return department;}
    public String getCategory(){return category;} public Integer getRating(){return rating;}
    public String getComments(){return comments;} public String getReferenceId(){return referenceId;}
    public LocalDateTime getCreatedAt(){return createdAt;}
}
