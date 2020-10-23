import { Component, OnInit, Inject } from '@angular/core';
import { VagaModel } from '../../../models/vaga.model';
import { MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  public vagaModel: VagaModel;

  public itensList = [
    {
      itemType: { name: 'Sobre' },
      itemContent:
      [
        { icon: 'attach_money', name: 'Salário', text: 'R$ 1800,00' },
        { icon: 'access_time', name: 'Carga Horária', text: '8 horas' },
        { icon: 'description', name: 'Regime de Contratação', text: 'Estágio' },
        { icon: 'location_on', name: 'Endereço', text: 'Av. Lins de Vasconcelos, 1222 - Aclimação' },
        { icon: 'format_list_bulleted', name: 'Vagas Disponíveis', text: '3' },
      ]
    },
    {
      itemType: { name: 'Benefícios' },
      itemContent: 
      [
        { icon: 'fastfood', name: 'Vale Refeição', text: 'R$ 50,00 (por dia)' },
        { icon: 'shopping_cart', name: 'Vale Alimentação', text: 'R$ 100,00 (por mês)' },
        { icon: 'directions_bus', name: 'Vale Transporte', text: 'R$ 20,00 (por dia)' }
      ]
    }
  ];

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  ngOnInit() {
    console.log(this.data)
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
