// src/app/app.component.ts

import { Component } from '@angular/core';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
folders: any;
notes: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  yourFileStructureVariable: any[] = [];

  constructor(private fileService: FileService) {}

  fetchFileList() {
    this.fileService.getFileList().subscribe(
      (data: string[]) => {
        this.yourFileStructureVariable = this.buildFileStructure(data);
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
}
