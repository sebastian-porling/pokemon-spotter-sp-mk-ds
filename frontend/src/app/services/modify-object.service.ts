import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyObjectService {

  public sortByField = (field) => ((a, b) => b[field] - a[field]);
  
}
