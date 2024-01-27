import { dettagliordine } from "./dettagliordine.model";

export interface Client{
   name:string;
   email:string;
   phoneNumber:string;
   address:string;
   username:string;
   eta:BigInteger;
}

export class SharedService {
  response: dettagliordine[] = [];
  constructor() {}
}

