import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonAlert, AlertController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;
  nombre: string = "";
  apellido: string = "";
  niveles: any = ["Alto", "Medio", "Bajo"];
  nivel: any;
  animation1: any;
  animation2: any;
  animation3: any;

  @ViewChild('titulo', { static: true }) titulo!: ElementRef;
  @ViewChild('name', { static: true }) name!: ElementRef;
  @ViewChild('lastname', { static: true }) lastname!: ElementRef;
  
  
  constructor(private alertController: AlertController, private animationCtrl: AnimationController) {}
  
  

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.animation1 = this.animationCtrl.create()
      .addElement(this.titulo.nativeElement)
      .duration(2500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)' },
        { offset: 0.25, transform: 'translateX(100px)' },
        { offset: 0.5, transform: 'translateX(0px)' }, 
        { offset: 0.75, transform: 'translateX(-100px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ]).fromTo('opacity', '1', '0.2');

    this.animation2 = this.animationCtrl.create()
      .addElement(this.name.nativeElement)
      .duration(400)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)' },
        { offset: 0.25, transform: 'translateX(10px)' },
        { offset: 0.5, transform: 'translateX(0px)' }, 
        { offset: 0.75, transform: 'translateX(-10px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ]);

    this.animation3 = this.animationCtrl.create()
      .addElement(this.lastname.nativeElement)
      .duration(400)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)' },
        { offset: 0.25, transform: 'translateX(10px)' },
        { offset: 0.5, transform: 'translateX(0px)' }, 
        { offset: 0.75, transform: 'translateX(-10px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ]);
  }

  ngAfterViewInit() {
    this.animation1.play();
  }

  nombreApellido(){
    if (this.nombre.length > 0 && this.apellido.length > 0){
      this.mostrar()
    } else {
      this.noName()
    }
  }

  limpiarAnimations(){
    this.animation2.play();
    this.animation3.play();
    this.nivel = null; 
  }

  async mostrar() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: '',
      message: 'Su nombre es' +' '+this.nombre+' '+this.apellido,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async noName() {
    const alert = await this.alertController.create({
      header: 'Nombre Inválido',
      subHeader: '',
      message: 'Ingrese nombre y/o apellido',
      buttons: ['OK'],
    });

    await alert.present();
  }
  

}
