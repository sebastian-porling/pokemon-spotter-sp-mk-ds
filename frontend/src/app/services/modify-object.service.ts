import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyObjectService {

  /**
   * Sorts an array with objects by field
   * @param field field in object to sort by
   */
  public sortByField = (field) => ((a, b) => b[field] - a[field]);

  /**
   * Sorts an array with objects by field
   * @param field field in object to sort by
   */
  public sortByFieldRarest = (field) => ((a, b) => a[field] - b[field]);

}
