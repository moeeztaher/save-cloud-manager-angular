// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to Your Angular App!
    </h1>
    <app-file-upload></app-file-upload>
  `,
  styles: []
})
export class AppComponent {
  // Your component logic goes here if needed
}
