import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../interfaces';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit(value: string): void {
    const message: Message = {message: value};
    this.http.post<boolean>('http://localhost:8080/api/admin', message).subscribe((res: boolean) => {
      console.log(res);
      if (res) {
        sessionStorage.setItem('adminState', 'true');
      } else {
        sessionStorage.setItem('adminState', 'false');
      }
    });
  }

  adminOff(): void {
    sessionStorage.setItem('adminState', 'false');
  }

}
