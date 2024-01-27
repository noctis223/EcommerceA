import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ADDRESS_AUTHENTICATION_SERVER } from '../assets/Constant';
import { BarraComponent } from './componenti/barra/barra.component';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { InfoComponent } from './componenti/info/info.component';
import { CarrelloComponent } from './componenti/carrello/carrello.component';
import { OrdiniComponent } from './componenti/ordini/ordini.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AggiungiprodottoComponent } from './componenti/aggiungiprodotto/aggiungiprodotto.component';
import { AggiungiquantitaComponent } from './componenti/aggiungiquantita/aggiungiquantita.component';
import { CercanomeComponent } from './componenti/cercanome/cercanome.component';
import { CercabrcodeComponent } from './componenti/cercabrcode/cercabrcode.component';
import { VisualizzatuttiComponent } from './componenti/visualizzatutti/visualizzatutti.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { ShowimmaginedialogComponent } from './showimmaginedialog/showimmaginedialog.component';
import { MatCardModule } from '@angular/material/card';
import { CreanuovaTipologiaComponent } from './creanuova-tipologia/creanuova-tipologia.component';
import { VediprodottoComponent } from './componenti/vediprodotto/vediprodotto.component';
import { AcquistaComponent } from './componenti/acquista/acquista.component';
import { ConfermaordineComponent } from './componenti/confermaordine/confermaordine.component';
import { ConfermaprodottoComponent } from './componenti/confermaprodotto/confermaprodotto.component';
import { AllordiniComponent } from './componenti/allordini/allordini.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErroreComponent } from './componenti/errore/errore.component';
import { ReclamoComponent } from './componenti/reclamo/reclamo.component';
import { ErroreclamoComponent } from './componenti/erroreclamo/erroreclamo.component';
import { ConfermareclamoComponent } from './componenti/confermareclamo/confermareclamo.component';
import { AllreclamiComponent } from './componenti/allreclami/allreclami.component';
import { DettagliComponent } from './componenti/dettagli/dettagli.component';
import { SharedService } from 'src/model/client.model';
import { ResiComponent } from './componenti/resi/resi.component';
import { ConfermacontattoComponent } from './conferme/confermacontatto/confermacontatto.component';
import { CofermaresoComponent } from './conferme/cofermareso/cofermareso.component';
import { CofereclamoComponent } from './conferme/cofereclamo/cofereclamo.component';
import { ErroreresoComponent } from './conferme/errorereso/errorereso.component';






//qui vanno messe le librerie ed visibile in html

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: ADDRESS_AUTHENTICATION_SERVER,
        realm: 'Angular',
        clientId: 'Ecommerce'
      },

      initOptions: {
        onLoad: 'check-sso',

      },
      enableBearerInterceptor : true

    });






}



@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    HomeComponent,
    LoginComponent,
    LoginDialogComponent,
    ContattiComponent,
    InfoComponent,
    CarrelloComponent,
    OrdiniComponent,
    RegistrazioneComponent,
    AggiungiprodottoComponent,
    AggiungiquantitaComponent,
    CercanomeComponent,
    CercabrcodeComponent,
    VisualizzatuttiComponent,
    ShowimmaginedialogComponent,
    CreanuovaTipologiaComponent,
    VediprodottoComponent,
    AcquistaComponent,
    ConfermaordineComponent,
    ConfermaprodottoComponent,
    AllordiniComponent,
    ErroreComponent,
    ReclamoComponent,
    ErroreclamoComponent,
    ConfermareclamoComponent,
    AllreclamiComponent,
    DettagliComponent,
    ResiComponent,
    ConfermacontattoComponent,
    CofermaresoComponent,
    CofereclamoComponent,
    ErroreresoComponent


],
  imports: [
    AppRoutingModule,
    BrowserModule,
    KeycloakAngularModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,




  ],

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],

    },
    [SharedService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
