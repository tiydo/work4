import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project-1';
  responseData$: Observable<any[]> | undefined;
  loadData: boolean = false;

  constructor(private http: HttpClient) {}

  getData() {
    this.responseData$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
    this.loadData = true;
  }
}
