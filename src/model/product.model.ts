import { FileHandle } from "./file-handle.model";

export interface Product {
  id: number;
  nome: string;
  descrizione: string;
  prezzo: number;
  quantita: number;
  brend: string;
  barCode: string;
  immagini: FileHandle [];
  colore:string;
  genere:string;
  taglia:string;
  fasciaeta: string;
  tessuto:string;
  tipologia: {
    id: number;
    tipo: string;
    descrizione: string;
  };
}
