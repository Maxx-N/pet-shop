import { Component, Input, OnInit } from '@angular/core';

import { IPet } from '../model/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  @Input() petList: IPet[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.petList);
  }
}
