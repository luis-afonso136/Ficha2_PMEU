import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  
  }
}

//CRIAR ARRAY DE OBJETOS~
//COLOCAR NGFOR
//PASSAR OBJETO PARA A MODAL
//MOSTRAR NO INPUT (NGMODEL OU VALUE)
