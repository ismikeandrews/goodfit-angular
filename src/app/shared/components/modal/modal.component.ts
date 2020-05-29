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

  @Input() vagaModelInput: VagaModel;

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }
  
  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
