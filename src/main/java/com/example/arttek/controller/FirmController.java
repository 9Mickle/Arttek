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
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;

@Controller
@RequestMapping("api/v1/firm")
@AllArgsConstructor
public class FirmController {
    private final FirmService firmService;
    private static Firm entityFirm;

    @Operation(summary = "Домашняя страница с поиском фирмы по номеру ATI")
    @GetMapping("/")
    public String home() {
        return "index";
    }

    @Operation(summary = "Страница с информацией о фирме")
    @GetMapping("/info")
    public String getFullInfo(Model model, @RequestParam String id) {
        Contact[] entityContacts;
        final String TOKEN = "88e0d871c901484b99377e3c39744c66";
        String firmSummaryGET = "https://api.ati.su/v1.0/firms/summary/" + id;
        String firmContactGET = String.format("https://api.ati.su/v1.0/firms/%s/contacts/summary", id);

        RestTemplate template = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(TOKEN);

        HttpEntity<String> entity = new HttpEntity<>("auth", headers);
        ResponseEntity<Firm> firm = template.exchange(firmSummaryGET, HttpMethod.GET, entity, Firm.class);
        ResponseEntity<Contact[]> contacts = template.exchange(firmContactGET, HttpMethod.GET, entity, Contact[].class);

        entityFirm = firm.getBody();
        entityContacts = contacts.getBody();
        if (entityContacts != null) {
            entityFirm.setContacts(List.of(entityContacts));
        }

        model.addAttribute("firm", firm.getBody());
        model.addAttribute("contacts", contacts.getBody());
        model.addAttribute("documents", Objects.requireNonNull(firm.getBody()).getFirm_documents());

        return "firm_info";
    }

    @Operation(summary = "Сохранение всех данных о фирме")
    @PostMapping("/")
    public String saveFirm() {
        if (entityFirm != null) {
            firmService.save(entityFirm);
            return "successful_saving";
        }
        return "unsuccessful_saving";
    }
}
