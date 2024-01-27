import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/model/file-handle.model';
import { Product } from 'src/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ImmaginiprocessService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(product: Product) {
    const Immagini: any[] = product.immagini;

    const productImagesToFileHandle: FileHandle[] = [];

    for (let i = 0; i < Immagini.length; i++) {
      const imageFileData = Immagini[i];

      const imageBlob = this.dataURItoBlob(imageFileData.size, imageFileData.type);

      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });

      const finalFileHandle :FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      productImagesToFileHandle.push(finalFileHandle);
    }

    product.immagini = productImagesToFileHandle;
    return product;

  }

  public dataURItoBlob(picBytes: any, imageType: any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: imageType});
    return blob;
  }

}
