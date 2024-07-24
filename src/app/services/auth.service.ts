import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public conectar(): void {
    this.eventEmmiter.emit(true);
  }

  public desconectar(): void {
    this.eventEmmiter.emit(false);
  }

  public getStatus(): EventEmitter<boolean> {
    return this.eventEmmiter;
  }
}
