import {Client} from './client.model';
import { dettagliordine } from './dettagliordine.model';
import {ItemProduct} from './prodottocarrello.model';

export interface Ordine {
   nome: string;
   indirizzo: string;
   prodottiacquistati: dettagliordine[];
   contatto: string;

}
