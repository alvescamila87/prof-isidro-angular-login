import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

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
