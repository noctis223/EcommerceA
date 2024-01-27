import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/login-dialog/login-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data-service.service';
import { EmailValidator } from '@angular/forms';
import * as moment from 'moment'
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { formattaDataOranon } from 'src/app/Data.utils';

interface Utente {
  username: string;
  nome: string;
  cognome: string;
  email: string;
  numerotelefono: string;
  address: string;
  datacreazione: Date;
}



@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  searchOption: string = 'username';
  searchText: string = '';
  selectedOption: string | undefined |EmailValidator ;
  searchResults: Utente[] = [];
  showResults: boolean = false;
  operazioni: boolean = false;
  ok: boolean = true;


  isHomePage: boolean = true; // Variabile per tenere traccia dello stato della pagina

  resetPage() {
    this.searchResults = []; // Reimposta l'array dei risultati a un array vuoto
    this.isHomePage = true; // Imposta lo stato della pagina come home
    this.ok=false; //
  }

  resetPage2() {
    this.searchResults = []; // Reimposta l'array dei risultati a un array vuoto
    this.isHomePage = true; // Imposta lo stato della pagina come home
    this.ok=true; //
  }












  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  isAdmin = this.keycloak.getUserRoles().includes('Admin');

  constructor(private readonly keycloak: KeycloakService, private http: HttpClient,private sharedDataService: SharedDataService,prodottoservice:ProdottoserviceTsComponent) {}


  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    const redirectUri = 'http://localhost:4200/login'

    this.keycloak.login({
      redirectUri: redirectUri,
    });
  }

  public logout() {
    this.keycloak.logout('http://localhost:4200');
  }

  public register() {
    const redirectUrif = 'http://localhost:4200/registrazione'

    this.keycloak.register({
      redirectUri: redirectUrif,
    });
  }


  search() {
    this.isHomePage = false
    this.showResults=true;
    if (this.selectedOption === 'username') {
      this.searchResults=[];
      this.searchByUsername(this.searchText)
        .subscribe((response: any) => {
          this.searchResults = response.map((user: Utente) => ({
            ...user,
            datacreazione: formattaDataOranon(user.datacreazione,"it")
          })) as Utente[];
          this.sharedDataService.setShowResults(true);

        }, error => {
          console.error(error);
        });
    }
    else if (this.selectedOption === 'email') {
      this.searchResults=[];
      this.searchByEmail(this.searchText)
      .subscribe((response: any) => {
        this.searchResults = response.map((user: Utente) => ({
          ...user,
          datacreazione: formattaDataOranon(user.datacreazione,"it")
        })) as Utente[];
        this.sharedDataService.setShowResults(true);

      }, error => {
        console.error(error);
      });

    } else if (this.selectedOption === 'data') {
      this.searchResults=[];
      this.searchBydata(this.searchText)
      .subscribe((response: any) => {
        this.searchResults = response.map((user: Utente) => ({
          ...user,
          datacreazione: formattaDataOranon(user.datacreazione,"it")
        })) as Utente[];
        this.sharedDataService.setShowResults(true);

      }, error => {
        console.error(error);
      });
    }else if (this.selectedOption === 'tutti') {
      this.searchResults=[];
      this.getAllUsers()
        .subscribe((response: any) => {
          this.searchResults = response.map((user: Utente) => ({
            ...user,
            datacreazione: formattaDataOranon(user.datacreazione,"it")
          })) as Utente[];
          this.sharedDataService.setShowResults(true);
           console.log(this.searchResults)
        }, (error: any) => {
          console.error(error);
        });

    } else {
      // Logica per tutte le altre opzioni
      console.log('Opzione non gestita:', this.selectedOption);
      this.showResults = false;
    }


    this.showResults=false;

  }

  formatDate(date: Date): string {
    return moment(date).format('DD MMMM YYYY');
  }


// Dichiarazione della variabile showLoginMessage nel componente
showLoginMessage = false;

// Funzione per gestire il click sul pulsante "Ordini"
handleOrdersClick() {
  if (!this.isLoggedIn) {
    this.showLoginMessage = true;
  } else {
    this.showLoginMessage = false;
    // Aggiungi qui la logica per aprire il dialogo di accesso o eseguire altre azioni desiderate
  }
}


searchByUsername(username: string) {
  return this.http.get('http://localhost:8082/utenti/search/username', {
    params: {
      username: username
    }
  });
}
searchByEmail(email: string) {
  return this.http.get('http://localhost:8082/utenti/search/email', {
    params: {
      email: email
    }
  });
}

searchBydata(searchText: string) {
  const parts = searchText.split(' ');
  const day = parseInt(parts[0], 10);
  const month = parts[1];
  const year = parseInt(parts[2], 10);


  const formattedDate = `${year}-${month}-${day}`;

  return this.http.get('http://localhost:8082/utenti/oldUser', {
    params: {
      date: formattedDate
    }
  });
}


selectOption(option: string) {
  this.selectedOption = option;

}

public getAllUsers() {
  return this.http.get('http://localhost:8082/utenti/alluser');
}


}
