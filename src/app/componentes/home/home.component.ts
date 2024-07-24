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
    //throw new Error('Method not implemented.');
  }

  public logout(): void {
    this.service.desconectar();
    this.router.navigate(["/"]);
  }

}
