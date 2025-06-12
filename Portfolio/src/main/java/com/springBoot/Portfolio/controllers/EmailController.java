package com.springBoot.Portfolio.controllers;

import com.springBoot.Portfolio.DTO.ContactMessageDto;
import com.springBoot.Portfolio.services.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private EmailService service;

    @PostMapping
    public ResponseEntity<?> sendEmail(@Valid @RequestBody ContactMessageDto contactDto) {
        try {
            service.sendContactEmail(contactDto);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Message sent successfully!");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            Map<String, String> error = new HashMap<>();
            error.put("message", "Email sending failed. Please try again later.");
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
