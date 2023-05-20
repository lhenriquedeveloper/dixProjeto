import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeilaoserviceService } from 'src/app/services/leilaoservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  leilao:any;

  constructor(private route:ActivatedRoute,
    private leilaoService : LeilaoserviceService,
    ){}
  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getLeilaoById();
  }

  async getLeilaoById(){
    const result = await this.leilaoService.getLeilaoById(this.id).toPromise();
    this.leilao = result.data;
    console.log(this.leilao);
  }

}
