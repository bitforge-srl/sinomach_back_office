import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component ,Input,OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { RestService } from 'src/app/service/rest.service';
import { ItemType, DragAndDropItem  } from 'src/app/pages/type/type'; 



@Component({
  selector: 'app-table-type',
  templateUrl: './table-type.component.html',
  styleUrls: ['./table-type.component.css']
})
export class TableComponent  implements OnInit{

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<ItemType>;

constructor(private service: RestService) { }

 dataType:ItemType[] = [];

 dragAndDropItemType: DragAndDropItem[]=[];

  ngOnInit(): void {
       
    this.service.getDataTypes().subscribe(type=> {
      this.dataType = type;
      console.log(this.dataType);
    });
  }  

  onDrop(event: CdkDragDrop<any[]>) {
    const prevIndex = event.previousIndex;
    const newIndex = event.currentIndex;

    if (prevIndex !== newIndex) {
      const movedItem = this.dataType[prevIndex];
      this.dataType.splice(prevIndex, 1);
      this.dataType.splice(newIndex, 0, movedItem);
    }

    this.dragAndDropItemType = [];

    this.dataType.forEach((item, index) => {
      item.order = index + 1; 
    });

    this.dataType.forEach(data => {
      const dragAndDropItem: DragAndDropItem = {
        id: data.id,
        order: data.order
      };
      this.dragAndDropItemType.push(dragAndDropItem);
    });
    console.log("массив с новым порядком");

   console.log(this.dragAndDropItemType);

   this.service.editOrderTypes(this.dragAndDropItemType).subscribe(
      response=>{
        if(response.success == true){
          console.log(response);
        }
        console.log(response);
      }
    )
    }

      reloadPage() {
        window.location.reload();
      }
  }
  

