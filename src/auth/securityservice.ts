
import { Injectable } from "@angular/core";
import { KeycloakProfile } from "keycloak-js";
import { KeycloakEventType, KeycloakService } from "keycloak-angular";


@Injectable({ providedIn: "root" })
export class SecurityService {
  public profile: KeycloakProfile | undefined;
  public authenticated = false;

  constructor(public kcService: KeycloakService) {
    this.init();
  }

  init() {
    this.kcService.keycloakEvents$.subscribe({
      next: (e) => {
        if (e.type === KeycloakEventType.OnAuthSuccess) {
          this.kcService.loadUserProfile().then((profile) => {
            this.profile = profile;
            this.authenticated = true; // L'accesso è avvenuto con successo
          });
        }
      },
    });
  }



  public hasRoleIn(roles:string[]):boolean{
    let userRoles = this.kcService.getUserRoles();
    for(let role of roles){
      if (userRoles.includes(role)) return true;
    } return false;
  }

   isLoggedIn() {//asinc
    return this.kcService.isLoggedIn();
  }

  login(): void {
    this.kcService.login();
  }

  logout(): void {
    this.kcService.logout();
  }

  getuserrole(): any {
    return this.kcService.getUserRoles();
  }



  getoken(): any {
    return this.kcService.getToken();
  }

  findAdmin(): boolean{
    let ruoli=this.kcService.getUserRoles();
    for(let role of ruoli){
      if(role==='Admin'){
        return true;
      }
      else return false;
    }
    return false;
  }












}
