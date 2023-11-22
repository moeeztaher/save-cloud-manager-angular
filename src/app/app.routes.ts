// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListComponent } from './file-list/file-list.component';

export const routes: Routes = [
  { path: 'filelist', component: FileListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
