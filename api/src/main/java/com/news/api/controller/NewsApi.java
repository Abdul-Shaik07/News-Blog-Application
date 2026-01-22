package com.news.api.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/news/api")
@CrossOrigin(origins = "*")
public class NewsApi {

    @Value("${news.api.key}")
    private String apiKey;

    @GetMapping("/search")
    public ResponseEntity<String> searchNews(@RequestParam String search) {

        String url =  UriComponentsBuilder
                .fromHttpUrl("https://newsapi.org/v2/everything")
                .queryParam("q", search)
                .queryParam("sortBy", "popularity")
                .queryParam("apiKey", apiKey)
                .toUriString();
        try {
            String response = new RestTemplate().getForObject(url, String.class);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching news");
        }
    }
}
