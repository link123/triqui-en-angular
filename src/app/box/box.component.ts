import { Component, OnInit } from '@angular/core';
import { BoxServiceService } from '../box-service.service';
import { Box } from '../box';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  boxlist: Box[] = [];
  constructor(private boxServiceService: BoxServiceService) {}

  ngOnInit(): void {
    this.getBoxList();
  }

  touchBox(i) {
    this.boxServiceService.setValuetoBox(i);
  }

  getBoxList() {
    this.boxlist = this.boxServiceService.getBoxList();
  }
}
