import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './componenti/barra/barra.component';
import { LoginComponent } from './componenti/login/login.component';
import { HomeComponent } from './componenti/home/home.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { InfoComponent } from './componenti/info/info.component';
import { CarrelloComponent } from './componenti/carrello/carrello.component';
import { OrdiniComponent } from './componenti/ordini/ordini.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { AggiungiprodottoComponent } from './componenti/aggiungiprodotto/aggiungiprodotto.component';
import { AggiungiquantitaComponent } from './componenti/aggiungiquantita/aggiungiquantita.component';
import { CercanomeComponent } from './componenti/cercanome/cercanome.component';
import { CercabrcodeComponent } from './componenti/cercabrcode/cercabrcode.component';
import { AuthGuard } from 'src/auth/keyguard';
import { VisualizzatuttiComponent } from './componenti/visualizzatutti/visualizzatutti.component';
import { ProdottoEditService } from './prodotto-edit.service';
import { CreanuovaTipologiaComponent } from './creanuova-tipologia/creanuova-tipologia.component';
import { VediprodottoComponent } from './componenti/vediprodotto/vediprodotto.component';
import { ProdottoserviceTsComponent } from './servcie/prodottoservice.ts/prodottoservice.ts.component';
import { AcquistaComponent } from './componenti/acquista/acquista.component';
import { AcquistaprodottoserviceService } from './acquistaprodottoservice.service';
import { ConfermaordineComponent } from './componenti/confermaordine/confermaordine.component';
import { ConfermaprodottoComponent } from './componenti/confermaprodotto/confermaprodotto.component';
import { AllordiniComponent } from './componenti/allordini/allordini.component';
import { ErroreComponent } from './componenti/errore/errore.component';
import { ReclamoComponent } from './componenti/reclamo/reclamo.component';
import { ErroreclamoComponent } from './componenti/erroreclamo/erroreclamo.component';
import { ConfermareclamoComponent } from './componenti/confermareclamo/confermareclamo.component';
import { AllreclamiComponent } from './componenti/allreclami/allreclami.component';
import { DettagliComponent } from './componenti/dettagli/dettagli.component';
import { ResiComponent } from './componenti/resi/resi.component';
import { ConfermacontattoComponent } from './conferme/confermacontatto/confermacontatto.component';
import { CofermaresoComponent } from './conferme/cofermareso/cofermareso.component';
import { ErroreresoComponent } from './conferme/errorereso/errorereso.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  { path: 'contattaci', component: ContattiComponent },
  { path: 'chi-siamo', component: InfoComponent },
  { path: 'carrello', component: CarrelloComponent,canActivate: [AuthGuard],data:{roles : ['Utente']} },
  { path: 'ordini', component: OrdiniComponent,canActivate: [AuthGuard],data:{roles : ['Utente']}},
  { path: 'registrazione', component: RegistrazioneComponent},
  { path: 'aggiungiprodotto', component: AggiungiprodottoComponent,canActivate: [AuthGuard],data:{roles : ['Admin']},
  resolve:{
    prodotto:ProdottoEditService
  }},
  { path: 'creanuovatipologia', component: CreanuovaTipologiaComponent},
  { path: 'aggiungiquantita', component: AggiungiquantitaComponent,canActivate: [AuthGuard],data:{roles : ['Admin']}},
  { path: 'cercanome', component: CercanomeComponent,canActivate: [AuthGuard],data:{roles : ['Admin']}},
  { path: 'cercabrcode', component: CercabrcodeComponent,canActivate: [AuthGuard],data:{roles : ['Admin']}},
  { path: 'visualizzatutti', component: VisualizzatuttiComponent,canActivate: [AuthGuard],data:{roles : ['Admin']}},
  { path: 'dettagliprodotto', component: VediprodottoComponent,resolve:{prodotto :ProdottoEditService}},
  { path: 'acquistaora', component: AcquistaComponent,canActivate: [AuthGuard],data:{roles : ['Utente']},
  resolve:{dettagliprodotto :AcquistaprodottoserviceService}},
  { path: "carrello",component: CarrelloComponent,canActivate: [AuthGuard],data: { roles: ["Utente"] }},
  {path:"confermaordine",component: ConfermaordineComponent,canActivate: [AuthGuard],data: { roles: ["Utente"] } },
  {path:"Ordini",component:OrdiniComponent ,canActivate: [AuthGuard], data: { roles: ["Utente"] }},
  {path:"allordini",component:AllordiniComponent ,canActivate: [AuthGuard], data: { roles: ["Admin"] }},
  {path:"confermaprodotto",component: ConfermaprodottoComponent,canActivate: [AuthGuard],data: { roles: ["Admin"] } },
  {path:"errore",component: ErroreComponent },
  {path:"reclamo/:id",component: ReclamoComponent,canActivate: [AuthGuard],data: { roles: ["Utente"] }  },
  {path:"erroreclamo",component: ErroreclamoComponent },
  {path:"confermareclamo",component: ConfermareclamoComponent },
  {path:"allreclami",component: AllreclamiComponent,canActivate: [AuthGuard],data: { roles: ["Admin"] } },
  {path:"dettagli",component: DettagliComponent},
  {path:"resi",component: ResiComponent},
  {path:"confermacontatto",component: ConfermacontattoComponent},
  {path:"confermareso",component: CofermaresoComponent},
  {path:"confermareclamo",component: ConfermareclamoComponent},
  {path:"errorereso",component: ErroreresoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
