export interface ItemType {
    id: number;
    name: string;
    shortDescription:string;
    imgBanner:string;
    img:string;
    subtypes: ItemSubType[];
    order: number;
  }
  
  export interface ItemSubType {
    name: string;
    products: any[]; // Необходимо указать корректный тип для 'products'
  }
  
  export interface DragAndDropItem {
    id: number;
    order: number;
  }

 export interface AllNameType{
    name:string,
    value:string
    }
   