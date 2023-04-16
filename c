[1mdiff --git a/src/main/java/com/ltw/shorten_link/Seeders/DataSeeder.java b/src/main/java/com/ltw/shorten_link/Seeders/DataSeeder.java[m
[1mindex 8d2f7ac..9b1e142 100644[m
[1m--- a/src/main/java/com/ltw/shorten_link/Seeders/DataSeeder.java[m
[1m+++ b/src/main/java/com/ltw/shorten_link/Seeders/DataSeeder.java[m
[36m@@ -1,4 +1,4 @@[m
[31m-package com.ltw.shorten_link.Seeders;[m
[32m+[m[32mpackage com.ltw.shorten_link.seeders;[m
 [m
 import org.springframework.beans.factory.annotation.Autowired;[m
 import org.springframework.boot.CommandLineRunner;[m
[1mdiff --git a/src/main/java/com/ltw/shorten_link/Seeders/RoleSeeder.java b/src/main/java/com/ltw/shorten_link/Seeders/RoleSeeder.java[m
[1mindex 07325dc..e4bbbcd 100644[m
[1m--- a/src/main/java/com/ltw/shorten_link/Seeders/RoleSeeder.java[m
[1m+++ b/src/main/java/com/ltw/shorten_link/Seeders/RoleSeeder.java[m
[36m@@ -1,4 +1,4 @@[m
[31m-package com.ltw.shorten_link.Seeders;[m
[32m+[m[32mpackage com.ltw.shorten_link.seeders;[m
 [m
 import java.util.ArrayList;[m
 import java.util.List;[m
[1mdiff --git a/src/main/java/com/ltw/shorten_link/Seeders/UserSeeder.java b/src/main/java/com/ltw/shorten_link/Seeders/UserSeeder.java[m
[1mindex 4a3a594..7ba60a3 100644[m
[1m--- a/src/main/java/com/ltw/shorten_link/Seeders/UserSeeder.java[m
[1m+++ b/src/main/java/com/ltw/shorten_link/Seeders/UserSeeder.java[m
[36m@@ -1,4 +1,4 @@[m
[31m-package com.ltw.shorten_link.Seeders;[m
[32m+[m[32mpackage com.ltw.shorten_link.seeders;[m
 [m
 import org.springframework.beans.factory.annotation.Autowired;[m
 import org.springframework.security.crypto.password.PasswordEncoder;[m
[1mdiff --git a/src/main/java/com/ltw/shorten_link/Configuration/SecurityConfiguration.java b/src/main/java/com/ltw/shorten_link/auth/SecurityConfiguration.java[m
[1msimilarity index 91%[m
[1mrename from src/main/java/com/ltw/shorten_link/Configuration/SecurityConfiguration.java[m
[1mrename to src/main/java/com/ltw/shorten_link/auth/SecurityConfiguration.java[m
[1mindex f9a7764..15df78d 100644[m
[1m--- a/src/main/java/com/ltw/shorten_link/Configuration/SecurityConfiguration.java[m
[1m+++ b/src/main/java/com/ltw/shorten_link/auth/SecurityConfiguration.java[m
[36m@@ -1,4 +1,4 @@[m
[31m-package com.ltw.shorten_link.Configuration;[m
[32m+[m[32mpackage com.ltw.shorten_link.auth;[m
 [m
 import org.springframework.beans.factory.annotation.Autowired;[m
 import org.springframework.context.annotation.Bean;[m
[36m@@ -12,8 +12,6 @@[m [mimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;[m
 import org.springframework.security.crypto.password.PasswordEncoder;[m
 import org.springframework.security.web.SecurityFilterChain;[m
 [m
[31m-import com.ltw.shorten_link.Configuration.Services.UserDetailServiceImplement;[m
[31m-[m
 import static org.springframework.security.config.Customizer.withDefaults;[m
 [m
 @Configuration[m
[36m@@ -46,7 +44,7 @@[m [mpublic class SecurityConfiguration {[m
     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {[m
         http.csrf(withDefaults())[m
                 .authorizeHttpRequests(authorize -> authorize[m
[31m-                        .requestMatchers("/*").permitAll()[m
[32m+[m[32m                        .requestMatchers("/").permitAll()[m
                         .requestMatchers("/login*").permitAll()[m
                         .requestMatchers("/images/**").permitAll()[m
                         .requestMatchers("/js/**").permitAll()[m
[36m@@ -57,7 +55,7 @@[m [mpublic class SecurityConfiguration {[m
                 .formLogin(login -> login[m
                         .loginPage("/login").permitAll()[m
                         .loginProcessingUrl("/signup")[m
[31m-                        .defaultSuccessUrl("/home"));[m
[32m+[m[32m                        .defaultSuccessUrl("/dashboard"));[m
         return http.build();[m
     }[m
 }[m
[1mdiff --git a/src/main/java/com/ltw/shorten_link/Configuration/Services/UserDetailServiceImplement.java b/src/main/java/com/ltw/shorten_link/auth/UserDetailServiceImplement.java[m
[1msimilarity index 94%[m
[1mrename from src/main/java/com/ltw/shorten_link/Configuration/Services/UserDetailServiceImplement.java[m
[1mrename to src/main/java/com/ltw/shorten_link/auth/UserDetailServiceImplement.java[m
[1mindex b54c8e9..ea2e366 100644[m
[1m--- a/src/main/java/com/ltw/shorten_link/Configuration/Services/UserDetailServiceImplement.java[m
[1m+++ b/src/main/java/com/ltw/shorten_link/auth/UserDetailServiceImplement.java[m
[36m@@ -1,4 +1,4 @@[m
[31m-package com.ltw.shorten_link.Configuration.Services;[m
[32m+[m[32mpackage com.ltw.shorten_link.auth;[m
 [m
 import org.springframework.beans.factory.annotation.Autowired;[m
 import org.springframework.security.core.userdetails.UserDetails;[m
[1mdiff --git a/src/main/java/com/ltw/shorten_link/Configuration/Services/UserDetailsImplement.java b/src/main/java/com/ltw/shorten_link/auth/UserDetailsImplement.java[m
[1msimilarity index 97%[m
[1mrename from src/main/java/com/ltw/shorten_link/Configuration/Services/UserDetailsImplement.java[m
[1mrename to src/main/java/com/ltw/shorten_link/auth/UserDetailsImplement.java[m
[1mindex 3306241..8c044d8 100644[m
[1m--- a/src/main/java/com/ltw/shorten_link/Configuration/Services/UserDetailsImplement.java[m
[1m+++ b/src/main/java/com/ltw/shorten_link/auth/UserDetailsImplement.java[m
[36m@@ -1,4 +1,4 @@[m
[31m-package com.ltw.shorten_link.Configuration.Services;[m
[32m+[m[32mpackage com.ltw.shorten_link.auth;[m
 [m
 import java.util.ArrayList;[m
 import java.util.Collection;[m
[1mdiff --git a/src/main/java/com/ltw/shorten_link/controller/AdminController.java b/src/main/java/com/ltw/shorten_link/controller/AdminController.java[m
[1mnew file mode 100644[m
[1mindex 0000000..ffb93d3[m
[1m--- /dev/null[m
[1m+++ b/src/main/java/com/ltw/shorten_link/controller/AdminController.java[m
[36m@@ -0,0 +1,11 @@[m
[32m+[m[32mpackage com.ltw.shorten_link.controller;[m
[32m+[m
[32m+[m[32mimport org.springframework.stereotype.Controller;[m
[32m+[m
[32m+[m[32mimport lombok.RequiredArgsConstructor;[m
[32m+[m
[32m+[m[32m@Controller[m
[32m+[m[32m@RequiredArgsConstructor[m
[32m+[m[32mpublic class AdminController {[m
[32m+[m[41m    [m
[32m+[m[32m}[m
[1mdiff --git a/src/main/java/com/ltw/shorten_link/controller/AuthController.java b/src/main/java/com/ltw/shorten_link/controller/AuthController.java[m
[1mindex 33b58cb..5d90fee 100644[m
[1m--- a/src/main/java/com/ltw/shorten_link/controller/AuthController.java[m
[1m+++ b/src/main/java/com/ltw/shorten_link/controller/AuthController.java[m
[36m@@ -1,34 +1,23 @@[m
 package com.ltw.shorten_link.controller;[m
 [m
[31m-import org.springframework.beans.factory.annotation.Autowired;[m
 import org.springframework.stereotype.Controller;[m
 import org.springframework.web.bind.annotation.GetMapping;[m
[31m-import org.springframework.web.bind.annotation.PostMapping;[m
[31m-import org.springframework.web.bind.annotation.RequestBody;[m
 import org.springframework.web.servlet.ModelAndView;[m
 [m
 import com.ltw.shorten_link.Utils;[m
[31m-import com.ltw.shorten_link.model.ModelAndViewObject;[m
[31m-import com.ltw.shorten_link.services.UserService;[m
[32m+[m[32mimport com.ltw.shorten_link.interfaces.ModelAndViewObject;[m
[32m+[m
[32m+[m[32mimport lombok.RequiredArgsConstructor;[m
 [m
 @Controller[m
[32m+[m[32m@RequiredArgsConstructor[m
 public class AuthController {[m
 [m
[31m-    @Autowired[m
[31m-    private UserService userService;[m
[31m-[m
     @GetMapping("/login")[m
     public ModelAndView renderLogin() {[m
[31m-        ModelAndView mv = new ModelAndView();[m
[31m-        ModelAndViewObject mvo = new ModelAndViewObject("Đăng nhập", "login.css");[m
[32m+[m[32m        ModelAndView mv = new ModelAndView("layouts/other");[m
[32m+[m[32m        ModelAndViewObject mvo = new ModelAndViewObject("login", "Đăng nhập", "login.css");[m
         mv.addObject(Utils.ModalAndViewObjectName, m