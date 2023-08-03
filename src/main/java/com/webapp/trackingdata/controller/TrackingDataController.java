package com.webapp.trackingdata.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

@RestController
public class TrackingDataController {

	@PostMapping("/trackdata")
	public void trackData(@RequestBody JsonNode trackingInfo) {
		
		System.out.println(trackingInfo);
		
	}
	
}
