import { Component, OnInit, Input } from '@angular/core';
import { VagaModel } from '../../../models/vaga.model';
import { trigger, state, style, transition, animate } from '@angular/animations'



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [ 
    trigger('animationTrigger', [
      state('hidden', style({
        opacity: 0,
        zIndex: -1
      })),
      transition('visible => hidden', animate('0.5s 0s ease-out')),
    ])
  ]
})
export class ModalComponent implements OnInit{
  public vagaModel: VagaModel;

  @Input() vagaModelInput: VagaModel;

  constructor() { }
  
  ngOnInit() {
  }
}
