import { Component, OnInit } from '@angular/core';
import { Inews } from 'interfaces';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'Constants';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  public news: Inews[];
  public isMobile: boolean;
  public isAdmin: boolean;

  constructor(private http: HttpClient) {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.isAdmin = sessionStorage.getItem('adminState') ===  "true";
   }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.http.get(Constants.Base_Url + "api/news").subscribe((news: Inews[]) => {
      this.news = news;
    })
  }

  addNews(actu: Inews): void {
    this.http.post(Constants.Base_Url + "api/news", actu).subscribe((news: Inews[]) => {
      this.news = news
    });
  }

  deleteNews(actu: Inews): void {
    this.http.delete(Constants.Base_Url + "api/news/" + actu.id).subscribe((news: Inews[]) => {
      this.news = news
    });
  }

}
