import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-translation',
  templateUrl: './translation.component.html',
})
export class TranslationsComponent implements OnInit{
  
  title = 'PuzzleUI';

  constructor(
    private toastrService: ToastrService){

  }

  ngOnInit(): void {
  }

}