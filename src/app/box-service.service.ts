import { Injectable } from '@angular/core';
import { Box } from './box';

@Injectable({
  providedIn: 'root',
})
export class BoxServiceService {
  myTurno;
  boxList: Box[] = [
    { index: 0, value: '', disable: false, color: 'black' },
    { index: 1, value: '', disable: false, color: 'black' },
    { index: 2, value: '', disable: false, color: 'black' },
    { index: 3, value: '', disable: false, color: 'black' },
    { index: 4, value: '', disable: false, color: 'black' },
    { index: 5, value: '', disable: false, color: 'black' },
    { index: 6, value: '', disable: false, color: 'black' },
    { index: 7, value: '', disable: false, color: 'black' },
    { index: 8, value: '', disable: false, color: 'black' },
  ];
  constructor() {
    this.myTurno = 0;
  }

  getBoxList() {
    return this.boxList;
  }

  setValuetoBox(index) {
    this.myTurno++;
    this.boxList[index].value = this.knowmyRightMark(this.myTurno);
    this.boxList[index].disable = true;
    this.validateWinner();
  }

  knowmyRightMark(turn) {
    if (turn % 2 === 0) return 'O';
    return 'X';
  }

  validateWinner() {
    
    this.validateLine(0, 1, 2);
    this.validateLine(3, 4, 5);
    this.validateLine(6, 7, 8);

    this.validateLine(0, 3, 6);
    this.validateLine(1, 4, 7);
    this.validateLine(2, 5, 8);

    this.validateLine(0, 4, 8);
    this.validateLine(6, 4, 2);
  }

  validateLine(arg0, arg1, arg2) {
    if (
      this.boxList[arg0].value == this.boxList[arg1].value &&
      this.boxList[arg1].value == this.boxList[arg2].value &&
      this.boxList[arg0].value != ''
    ) {
      this.boxList[arg0].color = 'red';
      this.boxList[arg1].color = 'red';
      this.boxList[arg2].color = 'red';
      this.disableAllBoard();
    }
    console.log('entro' + this.myTurno);
  }

  disableAllBoard() {
    for (let box of this.boxList) {
      box.disable = true;
    }
  }
}
