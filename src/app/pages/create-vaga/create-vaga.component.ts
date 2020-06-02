import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdicionalService } from './../../services/adicional.service';
import { RegimeContratacaoService } from './../../services/regime-contratacao.service';
import { ProfissaoService } from './../../services/profissao.service';
import { ViacepService } from './../../services/viacep.service';
import { AdicionalModel } from '../../models/adicional.model'
import { MatSnackBar } from '@angular/material/snack-bar';
import { VagaModel } from './../../models/vaga.model';
import { EnderecoModel } from './../../models/endereco.model';
import { EnderecoService } from './../../services/endereco.service';
import { VagaService } from './../../services/vaga.service';


@Component({
  selector: 'app-create-vaga',
  templateUrl: './create-vaga.component.html',
  styleUrls: ['./create-vaga.component.scss']
})
export class CreateVagaComponent implements OnInit {

  public vagaModel: VagaModel;
  public enderecoModel: EnderecoModel;
  /*array lists*/
  public adicionalList: [AdicionalModel];
  public habilidadeList: [{}];
  public regimeList: [{}];
  public profissaoList: [];
  public benefits: any[] = [{nomeBeneficio: null}];
  public selectedSkills = [];
  /*form group*/
  public address: FormGroup;
  public description: FormGroup;
  public habilidades = new FormControl();
  public habilidadesObrigatorias = new FormControl();
  public selected: boolean = true;

  constructor(
    private adicionalService: AdicionalService,
    private regimeContratacaoService: RegimeContratacaoService,
    private profissaoService: ProfissaoService,
    private viacepService: ViacepService,
    private snackBar: MatSnackBar,
    private enderecoService: EnderecoService,
    private vagaService: VagaService,
    ) {
      this.address = new FormGroup({
        cepEndereco: new FormControl('', [Validators.required]),
        logradouroEndereco: new FormControl('', [Validators.required]),
        numeroEndereco: new FormControl('', [Validators.required]),
        complementoEndereco: new FormControl(''),
        bairroEndereco: new FormControl('', [Validators.required]),
        zonaEndereco: new FormControl('', [Validators.required]),
        cidadeEndereco: new FormControl('', [Validators.required]),
        estadoEndereco: new FormControl('', [Validators.required, Validators.max(2)]),
      });

      this.description = new FormGroup({
        salarioVaga: new FormControl(0, [Validators.required]),
        cargaHorariaVaga: new FormControl('', [Validators.required]),
        quantidadeVaga: new FormControl('', [Validators.required]),
        codProfissao: new FormControl('', [Validators.required]),
        codRegimeContratacao: new FormControl('', [Validators.required]),
        descricaoVaga: new FormControl('', [Validators.required, Validators.min(15)]),
      });

     }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    const adicionalRes: any = await this.adicionalService.getAdicionalList();
    const habilidadeRes: any = await this.adicionalService.getHabilidades();
    const regimeContratacaoRes: any = await this.regimeContratacaoService.getRegimeContratacaoList();
    const profissaoRes: any = await this.profissaoService.getProfissaoList();
    this.adicionalList = adicionalRes;
    this.habilidadeList = habilidadeRes;
    this.regimeList = regimeContratacaoRes;
    this.profissaoList = profissaoRes;
  }

  async searchLocation(cep){
    if (cep) {
      try {
        const viacepRes: any  = await this.viacepService.getLocation(cep);
        if(viacepRes.erro){
          this.snackBar.open("CEP não encontrado", "Fechar", {
            duration: 4000,
          });
        }else{
          this.address.patchValue({
            logradouroEndereco: viacepRes.logradouro,
            bairroEndereco: viacepRes.bairro,
            cidadeEndereco: viacepRes.localidade,
            estadoEndereco: viacepRes.uf
            })
        }
      } catch (error) {
        this.snackBar.open("CEP com formato inválido", "Fechar", {
          duration: 4000
        });
        console.warn(error)
      }
    }
  }

  addBenefit(){
    this.benefits.push({nomeBeneficio: null})
  }

  removeBenefit(index){
    this.benefits.splice(index, 1);
  }

  enableOptionalField(){
    if (this.habilidades.value != null) {
      this.selected = false
      this.handleSelectedSkills()
    } 
    if(this.habilidades.value === null || this.habilidades.value === null){
      this.selected = true
    }
  }

  handleSelectedSkills(){
    this.selectedSkills = this.adicionalList.filter(adicional =>{
      return this.habilidades.value.includes(adicional.codAdicional)
    })
  }

  async submit(){
    if (this.address.valid && this.description.valid && this.selectedSkills.length >= 2 && this.benefits[0].nomeBeneficio != null) { 
      try {
        let requisitosArray = []
        this.selectedSkills.forEach(skill => {
          this.habilidadesObrigatorias.value.forEach(mandatory => {
            if (mandatory === skill.codAdicional) {
              requisitosArray.push({codAdicional: skill.codAdicional, obrigatoriedade: 1})
            }
            else{
              requisitosArray.push({codAdicional: skill.codAdicional, obrigatoriedade: 0})
            }
          });
        })
        
        this.enderecoModel = this.address.value;
        const enderecoRes: any = await this.enderecoService.setEndereco(this.enderecoModel);
  
        this.vagaModel = this.description.value;
        this.vagaModel.codEmpresa = 1;
        this.vagaModel.codEndereco = enderecoRes;
        const vagaRes: any = await this.vagaService.setVaga(this.vagaModel);

        let benefit = this.benefits.map(element => {
          return element.nomeBeneficio
        });
        let beneficiosObj = {
          codVaga: vagaRes,
          beneficios: benefit
        }

        await this.vagaService.setBeneficiosVaga(beneficiosObj);
  
        let requisitosObject = { 
          codVaga: vagaRes, 
          requisitos: requisitosArray
        };
        const adicionalRes: any = await this.vagaService.setRequisitosVaga(requisitosObject);
        console.log(adicionalRes)
        if (adicionalRes) {
          await this.snackBar.open("Cadastro concluido com sucesso", "", {
            duration: 4000,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          window.location.href = "/vagas"
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}