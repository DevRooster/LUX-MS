package com.example.mspedido.feign;

import com.example.mspedido.dto.ClienteDto;
import com.example.mspedido.dto.ProductoDto;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-cliente-service",path = "/cliente")
public interface ClienteFeign {
    @GetMapping("/{id}")
    @CircuitBreaker(name = "clienteListarPorIdCB", fallbackMethod = "fallBackClienteListarPorIdCB")

    public ResponseEntity<ClienteDto> clienteBuscarPorId(@PathVariable(required = true) Integer id);
    default ResponseEntity<ClienteDto> fallBackClienteListarPorIdCB(@PathVariable(required = true) Integer id, RuntimeException e) {
        ClienteDto clienteDto = new ClienteDto();
        clienteDto.setId(90000);
        return ResponseEntity.ok().body(clienteDto);
    }
}
