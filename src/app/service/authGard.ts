import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {
  }

  canActivate(): boolean {
    // Здесь вы должны выполнить проверку корректности cookie или других механизмов аутентификации
    // Ваша логика проверки может быть разной в зависимости от требований вашего приложения

    const isAuthenticated = this.checkAuthentication(); // Замените это на вашу логику аутентификации

    if (isAuthenticated) {
      return true;
    } else {
      // Если не аутентифицирован, перенаправляем на страницу входа
      this.router.navigate(['/login']);
      return false;
    }
  }

  private checkAuthentication(): boolean {

    // Реализуйте вашу логику проверки аутентификации, используя куки или другие механизмы
    // Верните true, если пользователь аутентифицирован, и false в противном случае

    return this.cookieService.get("access") === "true";

  }
}
