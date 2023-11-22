// src/app/file.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private apiUrl: string;
  

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiBaseUrl;
  }

  getFileList(): Observable<string[]> {
    const endpoint = '/list/files'; // Replace with your actual API endpoint
    const uploadUrl = `${this.apiUrl}${endpoint}`;
    return this.http.get<string[]>(uploadUrl);
  }
  
  downloadFile(filename: string): Observable<any> {
    const url = `${this.apiUrl}/download/${filename}`;
    return this.http.get(url, { responseType: 'arraybuffer' });
  }
}
