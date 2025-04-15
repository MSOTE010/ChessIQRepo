package com.chessiq.services;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
    public void send(String to, String message) {
        System.out.println("Sending email to: " + to);
        System.out.println("Message: " + message);
    }
}
