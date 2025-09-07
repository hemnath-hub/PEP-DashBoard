package com.pep.controller;

import com.pep.model.Stat;
import com.pep.repository.StatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin(origins = "*")
public class StatController {

    @Autowired
    private StatRepository repository;

    @PostMapping
    public Stat saveStat(@RequestBody Stat stat) {
        return repository.save(stat);
    }
}
