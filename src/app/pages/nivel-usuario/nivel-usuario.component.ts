import { Component, OnInit } from '@angular/core';
import { NivelUsuarioService } from '../../services/nivel-usuario.service';


@Component({
  selector: 'app-nivel-usuario',
  templateUrl: './nivel-usuario.component.html',
  styleUrls: ['./nivel-usuario.component.scss']
})
export class NivelUsuarioComponent implements OnInit {
  niveisUsuario: any;
  constructor(private nivelUsuarioService: NivelUsuarioService ) { }

  ngOnInit() {
    
  }

  async getAll(){
    let result = JSON.stringify(await this.nivelUsuarioService.getAllCustomer());
    result = JSON.parse(result)
    this.niveisUsuario = result;
  }

  clean(){
    this.niveisUsuario = []
  }
} 
