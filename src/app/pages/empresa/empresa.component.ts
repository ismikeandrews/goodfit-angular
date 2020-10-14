import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { UsuarioModel } from '../../models/usuario.model'
import { EnderecoService } from '../../services/endereco.service'
import { EnderecoModel } from '../../models/endereco.model'
import { EmpresaModel } from '../../models/empresa.model'
import { EmpresaService } from '../../services/empresa.service';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
    public empresaModel  : EmpresaModel
    public enderecoModel : EnderecoModel
    public usuarioModel  : UsuarioModel

    public empresa       : FormGroup
    public endereco      : FormGroup
    public usuario       : FormGroup

    constructor(
        private empresaService  : EmpresaService,
        private enderecoService : EnderecoService,
        private usuarioService  : UserService) {

        this.empresa  = new FormGroup({
            razaoSocialEmpresa  : new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(200)
            ]),
            nomeFantasiaEmpresa : new FormControl('', [
                Validators.required,
                Validators.maxLength(200)
            ]),
            cnpjEmpresa         : new FormControl('', [
                Validators.required,
                Validators.maxLength(14),
                Validators.minLength(14)
            ])
        })

        this.endereco = new FormGroup({
            cepEndereco         : new FormControl('', [
                Validators.required,
                Validators.maxLength(8),
                Validators.minLength(8)
            ]),
            logradouroEndereco  : new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(200)
            ]),
            numeroEndereco      : new FormControl('', [
                Validators.required,
                Validators.maxLength(5)
            ]),
            complementoEndereco : new FormControl(''),
            bairroEndereco      : new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(50)
            ]),
            zonaEndereco        : new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
            ]),
            cidadeEndereco      : new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100)
            ]),
            estadoEndereco      : new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(50)
            ]),
        })

        this.usuario  = new FormGroup({
            fotoUsuario         : new FormControl(''),
            loginUsuario        : new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(50)
            ]),
            password            : new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ]),
            email               : new FormControl('', [
                Validators.required,
                Validators.email
            ])
        })
    }

    ngOnInit() {
    }

    async submit() {
        this.enderecoModel = this.endereco.value
        const codEndereco  : any = await this.enderecoService.setEndereco(this.enderecoModel)

        this.usuarioModel  = this.usuario.value
        this.usuarioModel.codEndereco     = codEndereco
        this.usuarioModel.codNivelUsuario = this.usuarioService.codNivelEmpresa
        const codUsuario : any = await this.usuarioService.create(this.usuarioModel)

        this.empresaModel  = this.empresa.value
        this.empresaModel.codUsuario      = codUsuario
        const codEmpresa : any = await this.empresaService.create(this.empresaModel)
    }
}
