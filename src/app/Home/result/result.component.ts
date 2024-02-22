import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PuzzleSolverService } from 'src/app/shared/services/puzzle-solver.service';
import { PuzzleSharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResultComponent implements OnInit {
  title = 'PuzzleUI';
  data!: Array<Array<any>>;
  constructor(
    private sharedService: PuzzleSharedService,
    private puzzleService: PuzzleSolverService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.sharedService.getFileData().subscribe((d) => {
      this.puzzleService
        .getConvertedFileData(this.sharedService.fileName)
        .subscribe((data: any) => {
          console.log(data);
          this.data = data.originalArray;
        });
    });
  }
}
