export interface ItemType {
  id: number;
  name: string;
  shortDescription: string;
  imgBanner: string;
  img: string;
  subTypes: ItemSubType[];
  order: number;
  imgId: number;
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

export interface AllNameType {
  name: string,
  value: number
}

export interface ItemTypeForSubType {
  id: number,
  name: string;
  subTypes: ItemSubType[];
}

export interface ItemTypeAndSubType {
  subtypeId: number;
  typeId: number;
  nameSubType: string;
  nameParentType: string;
}

export interface ItemProduct {
  id: number,
  name: string;
  fullDescription: string,
  shortSpecification: string
  content: string
  img: string
  imgId: number
}

export interface ItemShortSpecification {
  name: string,
  value: string
}
