import { Component, Input, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-list',
  templateUrl: 'file-list.component.html',
  styleUrls: ['file-list.component.css'],
})
export class FileListComponent implements OnInit {
  @Input() fileStructure: any[] | undefined; // Add this line

  constructor(private fileService: FileService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getFileStructure();
  }

  getFileStructure() {
    this.fileService.getFileList().subscribe(
      (data: string[]) => {
        this.fileStructure = this.buildFileStructure(data);
      },
      (error) => {
        console.error('Error fetching file structure:', error);
      }
    );
  }
  

  buildFileStructure(data: string[]): any[] {
    const fileStructure: any[] = [];

    data.forEach((filePath) => {
      const pathSegments = filePath.split('/');
      let currentLevel = fileStructure;

      pathSegments.forEach((segment, index) => {
        const existingFolder = currentLevel.find((item) => item.name === segment);

        if (existingFolder) {
          currentLevel = existingFolder.children || [];
        } else {
          const newFolder = { name: segment, children: [] };
          currentLevel.push(newFolder);
          currentLevel = newFolder.children;
        }

        if (index === pathSegments.length - 1) {
          currentLevel.push({ name: segment });
        }
      });
    });

    return fileStructure;
  }

  downloadFile(filename: string): void {
    this.fileService.downloadFile(filename).subscribe(
      (data: any) => {
        console.log('File downloaded:', data);
        const contentType = data && data.headers ? data.headers.get('Content-Type') || 'application/octet-stream' : 'application/octet-stream';
        const blob = new Blob([data], { type: contentType });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        console.error('Error downloading file:', error);

        this.snackBar.open('Error downloading file', 'Dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    );
  }
  
}
