import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public constructor(private service: AuthService, private router: Router){

  }

  ngOnInit(): void {
    // guards

    /*const strToken = localStorage.getItem("MyToken");
    if(!strToken) {
      this.router.navigate(["/"]);
    }*/

    this.service.conectar();

  }

  public logout(): void {
    this.service.desconectar();
    localStorage.removeItem("MyToken");
    this.router.navigate(["/"]);
  }

}
