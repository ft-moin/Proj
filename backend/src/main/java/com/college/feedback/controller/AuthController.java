package com.college.feedback.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @GetMapping("/csrf")
    public Map<String,String> csrf(){return Map.of("message","CSRF is disabled in the starter configuration.");}
    @GetMapping("/session")
    public Map<String,Object> session(){return Map.of("authenticated",false);}
    @PostMapping("/login")
    public Map<String,String> login(){return Map.of("message","Configure an administrator account before enabling login.");}
}
