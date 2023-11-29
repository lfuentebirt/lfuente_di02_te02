import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  numeroAleat: number = 0;
  numeroIntroducido: any;
  mensaje: string = "";
  mensajes : string[] = [
    "Has acertado",
    "Introduce un número mayor",
    "Introduce un número menor",
    "Introduce un número menor"
  ];
  acierto: boolean = false;
  contador: number = 0;


  constructor(private alertController: AlertController) { }

  
  ngOnInit() {
    this.numeroAleat = Math.floor(Math.random() * 101);
  }

  onClick(){
    this.contador++;

    if(this.numeroIntroducido < 100 || this.numeroIntroducido > 0 ){
      
      if(this.numeroIntroducido == this.numeroAleat){

        this.mensaje = this.mensajes[0];
        this.acierto = true;

      }else if (this.numeroIntroducido < this.numeroAleat){

        this.mensaje = this.mensajes[1];
      }else{
        this.mensaje = this.mensajes[2];
      }
    }else{
      this.mensaje = this.mensajes[3];
    }
  }
  
  

  async nuevaPartida(){
    const alert = await this.alertController.create({
      header: '¿Nuevo juego?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar clickeado');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('OK clickeado');
            window.location.reload();
          }
        }
      ]
    });
    await alert.present();
  }
}
