import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PuzzleSolverService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = "https://localhost:7209/PuzzleSolver"
  public get() {
    return this.httpClient.get('http://server.com/endpoint');
  }

  public uploadFile(formData: FormData) {
    return this.httpClient.post(this.apiUrl + '/upload', formData);
  }

  public convertFileOCR(fileName: string) {
    return this.httpClient.get(this.apiUrl + `/convert/${fileName}`);
  }

  public getConvertedFileData(fileName: string) {
    return this.httpClient.get(this.apiUrl + `/${fileName}`);
  }
}
