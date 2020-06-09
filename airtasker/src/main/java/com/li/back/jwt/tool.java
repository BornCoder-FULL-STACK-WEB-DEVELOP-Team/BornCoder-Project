package com.li.back.jwt;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.UUID;
public class tool {
    private final static String SECRET_KEY = "0123456789_9876543210_0934582765";
    private final static long TOKEN_EXPIRE = 36000000;

    public static Key createKey() {
        return new SecretKeySpec(SECRET_KEY.getBytes(), SignatureAlgorithm.HS256.getJcaName());
    }


    public static String createToken(Map<String, Object> claimMap) {
        long currentTimeMillis = System.currentTimeMillis();
        return Jwts.builder()
                .setId(UUID.randomUUID().toString())
                .setIssuedAt(new Date(currentTimeMillis))
                .setExpiration(new Date(currentTimeMillis + TOKEN_EXPIRE))
                .addClaims(claimMap)
                .signWith(createKey())
                .compact();
    }


    public static int checkToken(String token) {
        try {
            Jwts.parser().setSigningKey(createKey()).parseClaimsJws(token);
            return 0;
        } catch (ExpiredJwtException e) {
            e.printStackTrace();
            return 1;
        } catch (UnsupportedJwtException e) {
            e.printStackTrace();
            return 2;
        } catch (MalformedJwtException e) {
            e.printStackTrace();
            return 3;
        } catch (SignatureException e) {
            e.printStackTrace();
            return 4;
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return 5;
        }
    }


    public static Map<String, Object> parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(createKey())
                .parseClaimsJws(token)
                .getBody();
    }



}



