import { Component } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent {
descriptionType: any;
addNewType() {
throw new Error('Method not implemented.');
}

  constructor(private service: RestService) { }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

 newTypeName:any;
 srcBannerOfType:any;
 srcImageOfType:any;

  
  addType(): void {
    console.log(this.newTypeName);
    this.service.addNewType(this.newTypeName,this.descriptionType,this.srcBannerOfType, this.srcImageOfType)
      .subscribe(response=>{
        if(response.success == true){
          console.log(response);
          this.reloadPage();
        }
        console.log(response);
       }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
