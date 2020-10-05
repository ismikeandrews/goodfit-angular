import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdicionalService } from '../../services/adicional.service';
import { RegimeContratacaoService } from '../../services/regime-contratacao.service';
import { ProfissaoService } from '../../services/profissao.service';
import { ViacepService } from '../../services/viacep.service';
import { AdicionalModel } from '../../models/adicional.model'
import { MatSnackBar } from '@angular/material/snack-bar';
import { VagaModel } from '../../models/vaga.model';
import { EnderecoModel } from '../../models/endereco.model';
import { EnderecoService } from '../../services/endereco.service';
import { VagaService } from '../../services/vaga.service';


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
  public habilidadeList: [AdicionalModel];
  public escolaridadeList: [AdicionalModel];
  public alfabetizacaoList: [AdicionalModel];
  public regimeList: [{}];
  public profissaoList: [];
  public benefits: any[] = [{nomeBeneficio: null}];
  public selectedSkills = [];
  public selectedAlf = [AdicionalModel];
  public selectedEsclr = [AdicionalModel];
  /*form group*/
  public address: FormGroup;
  public description: FormGroup;

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
    const escolaridadeRes: any = await this.adicionalService.getEscolaridade();
    const alfabetizacaoRes: any = await this.adicionalService.getAlfabetizacao();
    const habilidadeRes: any = await this.adicionalService.getHabilidades();
    const regimeContratacaoRes: any = await this.regimeContratacaoService.getRegimeContratacaoList();
    const profissaoRes: any = await this.profissaoService.getProfissaoList();
    this.adicionalList = adicionalRes;
    this.habilidadeList = habilidadeRes;
    this.escolaridadeList = escolaridadeRes;
    this.alfabetizacaoList = alfabetizacaoRes;
    this.regimeList = regimeContratacaoRes;
    this.profissaoList = profissaoRes;

    this.habilidadeList.forEach(habilidade => {
      habilidade.checked = false
      habilidade.obrigatorio = false
    });
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

  handleRequisitosObject(vagaCod){
    let requisitosList = []
    let selectedReq = [];
    selectedReq.push(this.selectedAlf, this.selectedEsclr);

    selectedReq.forEach(requisito => {
      requisito.checked = true;
      requisito.obrigatorio = true;
      this.habilidadeList.push(requisito);
    });

    requisitosList = this.habilidadeList.filter(habilidade =>{
      return habilidade.checked === true
    })
    requisitosList.forEach(requisito => {
      if (requisito.obridatorio) {
        this.selectedSkills.push({codAdicional: requisito.codAdicional, obrigatoriedade: 1})
      }else{
        this.selectedSkills.push({codAdicional: requisito.codAdicional, obrigatoriedade: 0})
      }
    })

    return {codVaga: vagaCod, requisitos: this.selectedSkills}
  }

  async submit(){
    console.log(this.address.valid, this.description.valid, this.selectedSkills, this.benefits[0])
    if (this.address.valid && this.description.valid && this.benefits[0].nomeBeneficio != null) {
      try {

        this.enderecoModel = this.address.value;
        const enderecoRes: any = await this.enderecoService.setEndereco(this.enderecoModel);

        this.vagaModel = this.description.value;
        this.vagaModel.codEmpresa = 3;
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
        const requisitos = this.handleRequisitosObject(vagaRes)
        const adicionalRes: any = await this.vagaService.setRequisitosVaga(requisitos);
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
    }else{
      alert("deu erro no formulario")
    }
  }
}
