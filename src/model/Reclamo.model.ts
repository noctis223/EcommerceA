import { mieiOrdini } from "./Ordine.model";
import { Client } from "./client.model";

export interface reclamo {
  id:number
  utente: Client;
  ordine: mieiOrdini;
  descrizione:string;


}
