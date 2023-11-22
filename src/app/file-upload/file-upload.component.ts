// file-upload.component.ts

import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
// import { FileListComponent } from '../file-list/file-list.component';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  private apiUrl: string;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.apiUrl = environment.apiBaseUrl;
  }

  uploadProgress: number | undefined;

  onFileSelected(event: any): void {
    console.log("asdsadsa");
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
      this.onUpload();
    }
  }
  
  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('fileName', this.selectedFile.name);
  
      const endpoint = '/file/upload'; 
      const uploadUrl = `${this.apiUrl}${endpoint}`;
  
      this.http.post(uploadUrl, formData, { reportProgress: true, observe: 'events' }).subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            if (event.loaded < (event.total ?? 1) * 0.1) {
              this.uploadProgress = 0;
            } else {
              this.uploadProgress = Math.round((event.loaded / (event.total ?? 1)) * 100);
            }
          } else if (event.type === HttpEventType.Response) {
            console.log('File uploaded successfully:', event.body);
            this.snackBar.open('File uploaded successfully', 'Dismiss', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
            this.uploadProgress = undefined;
          }
        },
        error => {
          console.error('Error uploading file:', error);
          this.snackBar.open('File uploaded successfully', 'Dismiss', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['custom-snackbar']
          });
          this.uploadProgress = undefined;
        }
      );
    } else {
      console.error('No file selected.');
    }
  }
}
