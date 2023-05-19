import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LeilaoserviceService } from 'src/app/services/leilaoservice.service';
 



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  leiloes: any[];
  images: any;
  constructor(
    private leilaoService : LeilaoserviceService
    ) {
    this.leiloes = [];
    this.images;
  }

  ngOnInit(): void {
    this.getLeiloes();
  }

  async getLeiloes(){
    const result = await this.leilaoService.getLeiloes().toPromise();
    this.leiloes = result.data;
    console.log(this.leiloes);
  }
 
  }

