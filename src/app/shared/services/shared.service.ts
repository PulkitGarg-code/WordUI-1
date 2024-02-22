import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PuzzleSharedService {
  constructor() {}

  public fileName: string = "";
  private fetchResults$ = new Subject<any>();

  fetchFileData() {
    this.fetchResults$.next(true);
  }

  getFileData() {
    return this.fetchResults$;
  }
}
