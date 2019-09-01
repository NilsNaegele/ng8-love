import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router,
              private snackBarService: SnackBarService) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
                    take(1),
                    map(user => !!user),
                    tap(loggedIn => {
                      if (!loggedIn) {
                        console.log('access denied');
                        this.snackBarService.open('zugang verwehrt', 'warning');
                        this.router.navigate(['/welcome']);
                      }
                    }));
  }
}
