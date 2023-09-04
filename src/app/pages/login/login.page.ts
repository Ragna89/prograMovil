import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonAlert } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router,) {}

  ngOnInit() {
  }

  user: string = "";
  password: string = "";
  public alertButtons = ['OK'];

  loginUser(){

    if (this.user.length > 0 && this.password.length > 0 ) {
      localStorage.setItem('user', this.user);
      this.router.navigateByUrl('home');
    } else {
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Datos Inválidos',
      subHeader: '',
      message: 'Ingrese usuario y/o contraseña',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
