import { Component, OnInit } from '@angular/core';
import { NivelUsuarioService } from '../../services/nivel-usuario.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NivelUsuarioModel } from './../../models/nivel-usuario.model';



@Component({
  selector: 'app-nivel-usuario',
  templateUrl: './nivel-usuario.component.html',
  styleUrls: ['./nivel-usuario.component.scss']
})
export class NivelUsuarioComponent implements OnInit {
  niveisUsuario: any = [];
  formNivelUsuario: FormGroup;
  nivelUsuarioModel: NivelUsuarioModel = new NivelUsuarioModel();

  constructor(
    private nivelUsuarioService: NivelUsuarioService,
    private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.getAll();
  }

  async getAll(){
    let result: any = await this.nivelUsuarioService.getAllNivelUsuario();
    this.niveisUsuario = result;
  }


  async getNivelUsuarioById(id: number){ 
    let result: any = await this.nivelUsuarioService.getNivelUsuarioById(id);
    alert(result.data[0].titulo);
  }

  async setNivelUsuario(){
    let result: any = await this.nivelUsuarioService.setNivelUsuario(this.nivelUsuarioModel);
    alert(result);
    window.location.reload()
  }

  async deleteNivelUsuario(id: number){
    let result: any = await this.nivelUsuarioService.deleteNivelUsuario(id);
    alert(result);
    window.location.reload()
  }
}
