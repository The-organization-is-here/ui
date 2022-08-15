import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "../../service/card-service.service";

@Component({
  selector: 'app-get-card-info',
  templateUrl: './get-card-info.component.html',
  styleUrls: ['./get-card-info.component.scss']
})
export class GetCardInfoComponent implements OnInit {

  constructor(private cardService: CardServiceService) {
    this.card = {}
  }

  card : any;
  ngOnInit(): void {
    this.cardService.getCardInfo().subscribe(result => this.card = result)
  }

}
