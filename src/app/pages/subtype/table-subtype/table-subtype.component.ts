import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-subtype',
  templateUrl: './table-subtype.component.html',
  styleUrls: ['./table-subtype.component.css']
})
export class TableSubTypeComponent implements OnInit{
  listOfData: ItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }

}
interface ItemData {
  name: string;
  age: number;
  address: string;
}
