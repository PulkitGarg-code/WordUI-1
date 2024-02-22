import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  
  title = 'PuzzleUI';

  constructor(
    private toastrService: ToastrService){

  }

  ngOnInit(): void {
  }
}
