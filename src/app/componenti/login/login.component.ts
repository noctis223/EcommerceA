import { Component, OnInit ,OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { SharedDataService } from 'src/app/shared-data-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  isLoading = true;
  isAdmin = this.kcService.getUserRoles().includes('Admin');
  username: string | undefined
  showResults: boolean | undefined;
  private subscription!: Subscription;

  constructor(private http: HttpClient,public kcService: KeycloakService,private sharedDataService: SharedDataService,private route:Router) {}


  ngOnInit() {
    this.subscription = this.sharedDataService.showResults$.subscribe((value) => {
      this.showResults = value;
      if (!this.isAdmin) {
        // Reindirizza l'utente alla home
        this.route.navigate(['/']);
      }
    });

    this.http.get('http://localhost:8082/home/user',{ responseType: 'text' }).subscribe(
      (response: any) => {
        this.isLoading = false;
        console.log(response);
        this.username = response

      },
      (error) => {
        console.error('Errore durante la richiesta:', error);
        this.isLoading = false;
      }
    );

    this.http.get('http://localhost:8082/home/admin',{ responseType: 'text' }).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.username = response;

      },
      (error) => {
        console.error('Errore durante la richiesta:', error);
        this.isLoading = false;
      }
    );

  }
}
