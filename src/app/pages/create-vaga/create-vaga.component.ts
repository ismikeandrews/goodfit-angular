import { Component, OnInit } from '@angular/core';
import { AdicionalService } from './../../services/adicional.service';
@Component({
  selector: 'app-create-vaga',
  templateUrl: './create-vaga.component.html',
  styleUrls: ['./create-vaga.component.scss']
})
export class CreateVagaComponent implements OnInit {

  public adicionalList: [{}]

  constructor(private adicionalService: AdicionalService) { }

  ngOnInit() {
    this.loadData()
  }

  async loadData(){
    const res: any = await this.adicionalService.getAdicionalList();
    this.adicionalList = res;
  }

}
