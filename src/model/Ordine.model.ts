import { Product } from "./product.model";

export interface mieiOrdini {
  id: number;
  datadiAcq: string;
  prodottiacquistati: Product[];
  stato:string;
  totale:number;
  nome:string;


}

