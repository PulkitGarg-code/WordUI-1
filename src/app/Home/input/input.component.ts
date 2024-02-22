import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PuzzleSolverService } from 'src/app/shared/services/puzzle-solver.service';
import { PuzzleSharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements OnInit {
  title = 'PuzzleUI';
  uploadedfile: any;
  imgUrl: any;
  isRequestInProgress: boolean = false;
  isFileUploadedSuccessfully: boolean = false;

  constructor(
    private puzzleSolverService: PuzzleSolverService,
    private puzzleSharedService: PuzzleSharedService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  showFile(event: any) {
    if (event && event.target) {
      this.uploadedfile = event.target.files[0];
      this.imgUrl = URL.createObjectURL(event.target.files[0]);
    }
  }

  uploadFileImage() {

    this.puzzleSharedService.fileName = "second.png" //this.uploadedfile.name;
    this.puzzleSharedService.fetchFileData();

    if (this.uploadedfile) {
      this.isRequestInProgress = true;
      var formData = new FormData();
      formData.append('image', this.uploadedfile);

      this.puzzleSolverService.uploadFile(formData).subscribe(
        (data) => {
          this.isRequestInProgress = false;
          console.log(data);
          this.isFileUploadedSuccessfully = true;
          this.toastrService.success('Success in upload', 'Success');
        },
        (error) => {
          this.isRequestInProgress = false;
          this.toastrService.error(
            'Some error occured while uploading file',
            'Error'
          );
        }
      );
    } else {
      this.toastrService.warning('first select the file', 'Warning');
    }
  }

  convertOCR()  {
    if (this.isFileUploadedSuccessfully) {
      this.isRequestInProgress = true;

      this.puzzleSolverService.convertFileOCR(this.uploadedfile.name).subscribe(
        (data) => {
          this.isRequestInProgress = false;
          console.log(data);
          this.puzzleSharedService.fileName = this.uploadedfile.name;
          this.puzzleSharedService.fetchFileData();
          this.toastrService.success('Success in convert', 'Success');
        },
        (error) => {
          this.isRequestInProgress = false;
          this.toastrService.error(
            'Some error occured while converting file',
            'Error'
          );
        }
      );
    } else {
      this.toastrService.warning('first upload the file', 'Warning');
    }
  }
}
