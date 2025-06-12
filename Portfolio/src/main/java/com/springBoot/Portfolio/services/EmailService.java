package com.springBoot.Portfolio.services;

import com.springBoot.Portfolio.DTO.ContactMessageDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendContactEmail(ContactMessageDto contact) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("sbrata341@gmail.com");  // Your inbox
        message.setSubject("New Contact Request from Portfolio");
        message.setText(
                "Name: " + contact.getName() + "\n" +
                        "Email: " + contact.getEmail() + "\n" +
                        "Message: " + contact.getMessage()
        );

        mailSender.send(message);
    }

}
