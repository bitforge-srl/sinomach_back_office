export interface ItemType {
    id: number;
    name: string;
    shortDescription:string;
    imgBanner:string;
    img:string;
    subTypes: ItemSubType[];
    order: number;
  }
  
  export interface ItemSubType {
    id: number;
    name: string;
    products: ItemProduct[];
  }
  
  export interface DragAndDropItem {
    id: number;
    order: number;
  }

 export interface AllNameType{
    name:string,
    value:string
    }

  export interface ItemTypeForSubType {
      id:number,
      name: string;
      subTypes:ItemSubType[];
    }

  export interface ItemTypeAndSubType{
      subtypeId: number;
      typeId:number;
      nameSubType: string;
      nameParentType: string;
    }

    interface ItemProduct{
    id:number,
    name:String;
    fullDescription:string,
    shortSpecification:string
    content: string
    img:string
    }
   