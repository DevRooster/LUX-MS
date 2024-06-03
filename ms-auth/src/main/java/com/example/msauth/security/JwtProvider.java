package com.example.msauth.security;

import com.example.msauth.entity.AuthUser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtProvider {
    @Value("${jwt.secret}")
    private String secret;

    @PostConstruct
    protected void init() {
        // Codificar el secreto en Base64 para uso con JWT
        secret = Base64.getEncoder().encodeToString(secret.getBytes());
    }

    public String createToken(AuthUser authUser) {
        // Construir los claims personalizados del token JWT
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", authUser.getId());
        // Establecer la fecha de emisión y expiración del token
        Date now = new Date();
        Date exp = new Date(now.getTime() + 3600_000); // 1 hora
        // Construir y firmar el token JWT
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(authUser.getUserName())
                .setIssuedAt(now)
                .setExpiration(exp)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public boolean validate(String token) {
        // Validar la firma del token JWT
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String getUserNameFromToken(String token) {
        // Extraer el nombre de usuario del token JWT
        try {
            return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
        } catch (Exception e) {
            return null; // o manejar de otra forma según los requerimientos
        }
    }
}
