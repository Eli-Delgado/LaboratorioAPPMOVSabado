import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //Importado

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  registrarForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    //para nuestro validador vamos a crear un grupo, para validar cada campo
    this.registrarForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmacionContrasena: ['', Validators.required]

    /*}, {
      validator: this.MustMatch('password', 'confirm')*/
    });
  }

  ngOnInit() {//Funcion por defecto de angular, al momento que entras a la pagina se ejecuta. 
  }

  get f() { return this.registrarForm.controls; }

  registrar() {
    console.log(this.registrarForm.valid);
  }
  /*
  registrar(form) {
    let inputs = form.form.value;
    if (inputs.password != inputs.confirm) {
      console.log('La constraseña y confirmar contraseña no son iguales');
    }
  }
  */
  /*
  MustMatch(controlName: string, matchingControlName: string) {
    return true;
  }
  */
}
