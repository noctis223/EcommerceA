// crea-nuova-tipologia.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Tipologia {

  tipo: string;
  descrizione: string;
}


@Component({
  selector: 'app-creanuova-tipologia',
  templateUrl: './creanuova-tipologia.component.html',
  styleUrls: ['./creanuova-tipologia.component.css']
})

export class CreanuovaTipologiaComponent {
  private apiUrl = 'http://localhost:8082/tipologie/creanuovatipologia'; // L'URL dell'endpoint API
  tipo: string='';
  descrizione: string='';

  constructor(private http: HttpClient, private router :Router) {}

  creaNuovaTipologia() {
    const tipologia: Tipologia = {
      tipo: this.tipo,
      descrizione: this.descrizione
    };

    this.http.post<Tipologia>(this.apiUrl, tipologia)
      .subscribe(
        response => {
          console.log('Tipologia creata:', response);
          this.router.navigate(["/confermaprodotto"]);
        },
        error => {
          console.error('Errore durante la creazione della tipologia:', error);
          this.router.navigate(["/errore"]);

        }
      );
  }
}

