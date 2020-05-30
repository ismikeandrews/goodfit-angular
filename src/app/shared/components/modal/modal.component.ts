import { Component, OnInit, Input, Inject } from '@angular/core';
import { VagaModel } from '../../../models/vaga.model';
import { MatDialogRef} from '@angular/material/dialog';
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
        { icon: 'access_time', name: 'Carga Horária', text: '8H' },
        { icon: 'format_list_bulleted', name: 'Vagas', text: '3' },
        { icon: 'description', name: 'Regime Contratação', text: 'Estágio' },
        { icon: 'location_on', name: 'Endereço', text: 'Av. Lins de Vasconcelos, 1222 - Aclimação', class: 'accordion--content-item__endereco' }
      ]
    },
    {
      itemType: { name: 'Benefícios' },
      itemContent: 
      [
        { icon: 'attach_money', name: 'Vale Refeição', text: 'R$ 50,00 (por dia)' },
        { icon: 'access_time', name: 'Vale Alimentação', text: 'R$ 100,00 (por mês)' },
        { icon: 'format_list_bulleted', name: 'Vale Transporte', text: 'R$ 20,00 (por dia)' }
      ]
    }
  ];

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}
  
  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
