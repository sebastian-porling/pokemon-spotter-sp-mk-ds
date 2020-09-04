import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyObjectService {

  public sortByField = (field) => ((a, b) => b[field] - a[field]);
  public sortByFieldRearest = (field) => ((a, b) => a[field] - b[field]);
  
}
