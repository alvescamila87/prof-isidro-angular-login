import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public txtLogin: string = "";
  public txtSenha: string = "";

  public constructor(private router: Router, private service: AuthService) {

  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  public logar(): void {
    if(this.txtLogin === "camila" && this.txtSenha === "12345") {
      //console.log("Deu bom!");
      this.service.conectar();
      this.router.navigate(["/home"]);
    } else {
      alert("Credenciais invalidas!");
    }
  }

}
