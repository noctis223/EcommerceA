import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private showResultsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() {}

  // Metodo per ottenere il BehaviorSubject come Observable
  get showResults$() {
    return this.showResultsSubject.asObservable();
  }

  // Metodo per impostare il valore di showResults e notificare gli osservatori
  setShowResults(value: boolean) {
    this.showResultsSubject.next(value);
  }
}

