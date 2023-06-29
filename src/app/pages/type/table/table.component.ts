import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements OnInit{

 listOfData: ItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      let row  ={
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      };
      this.listOfData.push(row);
      console.log(row);
    }
   
  }
}

interface ItemData {
  name: string;
  age: number;
  address: string;
}
