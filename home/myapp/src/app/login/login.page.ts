import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { AutentificarService } from '../servicio/servicio.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  user = {
    usuario: "",
    pass: ""
    
  }
  
  @ViewChild(IonModal) modal!: IonModal

  constructor(private router:Router, private activeRouter:ActivatedRoute, private auth: AutentificarService) { }
  public mensaje = "";
  public estado: String = "";
  ngOnInit() {
  }
  irASesion() {
    this.router.navigate(['/recuperar']); // Navega a la página de inicio de sesión
  }

  // sistema de autenticación del usuario 
  irInicio() {
    this.auth.login(this.user.usuario, this.user.pass).then(() => {
      if (this.auth.activo){

        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
      }   
    this.router.navigate(['/inicio'],navigationExtras); 
  }else {
    this.mensaje = '¡Las casillas de Usuario y Contraseña no pueden estar vacios!';
  }
    });
    
    const navigationExtras: NavigationExtras = {
      state: { user: this.user}
    }
    this.router.navigate(['/inicio'],navigationExtras); // Navega a la página de inicio de sesión
  } 






  Consola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.pass != "") {
      this.mensaje = "Conectado";
    } else {
      this.mensaje = "¡Las casillas de Usuario y Contraseña no pueden estar vacios!"
    }
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

    
}

