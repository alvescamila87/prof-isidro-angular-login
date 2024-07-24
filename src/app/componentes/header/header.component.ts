import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  public visible: boolean = false;

  public constructor(private service: AuthService){
    this.service.getStatus().subscribe({
      next: (res: boolean) => {
        // se o emissor de eventos do get status for verdadeiro ou falso, recebe no visible
        this.visible = res;
      },
      error: (err: any) => {
        console.log("Deu ruim!");
      }
    })

  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
