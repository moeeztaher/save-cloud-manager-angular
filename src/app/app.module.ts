// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes'; // Import the AppRoutingModule

import { AppComponent } from './app.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileService } from './services/file.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ensure you import the FileService as well


import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, FileListComponent, FileUploadComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatListModule, MatIconModule, MatTabsModule, MatButtonModule, MatProgressBarModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,],
  providers: [FileService], // Don't forget to add FileService to providers
  bootstrap: [AppComponent],
})
export class AppModule {}
