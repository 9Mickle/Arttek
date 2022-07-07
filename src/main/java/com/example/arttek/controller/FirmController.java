package com.example.arttek.controller;

import com.example.arttek.entity.Contact;
import com.example.arttek.entity.Firm;
import com.example.arttek.service.FirmService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("api/v1/firm")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class FirmController {
    private final FirmService firmService;

    @Operation(summary = "Страница с информацией о фирме")
    @GetMapping("/info")
    public ResponseEntity<Object> getFullInfo(@RequestParam String atiId) {
        final String TOKEN = "88e0d871c901484b99377e3c39744c66";
        String firmSummaryGET = "https://api.ati.su/v1.0/firms/summary/" + atiId;
        String firmContactGET = String.format("https://api.ati.su/v1.0/firms/%s/contacts/summary", atiId);

        RestTemplate template = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(TOKEN);

        HttpEntity<String> entity = new HttpEntity<>("auth", headers);
        Firm firm = template.exchange(firmSummaryGET, HttpMethod.GET, entity, Firm.class).getBody();
        Contact[] contacts = template.exchange(firmContactGET, HttpMethod.GET, entity, Contact[].class).getBody();

        if (contacts != null && firm != null) {
            firm.setContacts(List.of(contacts));
        }

        return ResponseEntity.ok(firm);
    }

    @Operation(summary = "Сохранение всех данных о фирме")
    @PostMapping("/")
    public ResponseEntity<Object> saveFirm(@RequestBody Firm firm) {
        return ResponseEntity.ok(firmService.save(firm));
    }
}
