import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('400ms', style({ opacity: 0 }))
      ])
    ]),]
})
export class AboutusComponent {
  bloodType: any = { wholeBlood: false, plasma: false, platelet: false };

  typeWholeBlood() {
    this.bloodType.wholeBlood = !this.bloodType.wholeBlood;
    this.bloodType.plasma = false,this.bloodType.platelet = false;

  }

  typePlasma() {
    this.bloodType.plasma = !this.bloodType.plasma;
    this.bloodType.wholeBlood = false,this.bloodType.platelet = false;
  }

  typePlatet() {
    this.bloodType.platelet = !this.bloodType.platelet;
    this.bloodType.wholeBlood = false,this.bloodType.plasma = false;

  }
}
