import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottoserviceTsComponent } from 'src/app/servcie/prodottoservice.ts/prodottoservice.ts.component';
import { FileHandle } from 'src/model/file-handle.model';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-aggiungiprodotto',
  templateUrl: './aggiungiprodotto.component.html',
  styleUrls: ['./aggiungiprodotto.component.css']
})
export class AggiungiprodottoComponent implements OnInit {
  ngOnInit(): void {
   this.prodotto=this.activateroute.snapshot.data['prodotto']

   if(this.prodotto && this.prodotto.id){
    this.nuovoprodotto=false;
   }
  }

  errorMessage: string = '';
    nuovoprodotto=true;
    prodotto: Product = {
    id: NaN,
    nome: '',
    descrizione: '',
    prezzo:0,
    quantita:0,
    brend: '',
    barCode: '',
    taglia: '',
    genere: '',
    fasciaeta: '',
    colore: '',
    tessuto:'',
    immagini: [] ,
    tipologia: {
      id:0,
      tipo: '',
      descrizione: ''
    }
  };


  constructor(private activateroute:ActivatedRoute, private sanitizer: DomSanitizer,  private productService: ProdottoserviceTsComponent,private router: Router) {}

  addProduct(form: NgForm) {
    const formData = this.prepareFormDataForProduct(this.prodotto);
    console.log(formData.getAll('immagini'));
    this.productService.addProduct(formData)
      .subscribe(
        (response: Product)=> {

          console.log(response);
          form.reset();
          this.router.navigate(["/confermaprodotto"]);
        },
        error => {

          this.errorMessage = error.error.message;
          console.error(error);
          this.router.navigate(["/errore"]);
        }
      );
  }


  public clearForm(form: NgForm) {
    form.reset();

  }

  isFormVisible = true;

toggleForm() {
  this.isFormVisible = !this.isFormVisible;
}

onFileSelected(event : any) {
  console.log(event);

  if (event.target.files) {
    const file = event.target.files[0];
    const fileHandle: FileHandle = {
      file: file,
      url: this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      ),
    };

    this.prodotto.immagini.push(fileHandle);
  }
}


prepareFormDataForProduct(prodotto: Product): FormData {
  const uploadImageData = new FormData();
  uploadImageData.append(
    "prodotto",
    new Blob([JSON.stringify(prodotto)], { type: "application/json" })
  );

  for (var i = 0; i < this.prodotto.immagini.length; i++) {
    uploadImageData.append(
      "immagini",
      this.prodotto.immagini[i].file,
      this.prodotto.immagini[i].file.name
    );
    console.log(this.prodotto.immagini[i]);
  }
  console.log(uploadImageData.getAll('immagini'));
  return uploadImageData;
}


removeImage(index: number) {
  this.prodotto.immagini.splice(index, 1);

}
}



