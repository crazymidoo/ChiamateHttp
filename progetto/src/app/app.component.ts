import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto';
}
