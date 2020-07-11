import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  imgCar1 = '../../assets/background1.jpg';
  imgCar2 = '../../assets/background2.jpg';
  imgCar3 = '../../assets/background3.jpg';

  constructor() {}

  ngOnInit(): void {}
}
