import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  numerotelefono: string | undefined;
  address: string | undefined;
  cap: string | undefined;
  citta: string | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  mostraForm: boolean = true;
  mostraMessaggio: boolean = false;


  salvaDatiAggiuntivi() {
    const datiAggiuntivi = {
      numerotelefono: this.numerotelefono,
      address: this.address,
      cap: this.cap,
      citta: this.citta,
    };

    this.http.post('http://localhost:8082/utenti/registrazioneNuovoUtente', datiAggiuntivi)
      .subscribe(
        (response) => {
          console.log('Dati aggiuntivi salvati correttamente!', response);
          this.mostraForm = false;
          this.mostraMessaggio = true;

          // Puoi reindirizzare l'utente a una pagina di successo o fare altre azioni necessarie.
        },
        (error) => {
          console.error('Si è verificato un errore durante il salvataggio dei dati aggiuntivi:', error);
          // Gestisci l'errore come preferisci.
        }

      );

  }



}





