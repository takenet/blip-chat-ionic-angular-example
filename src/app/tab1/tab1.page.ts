import { Component, OnInit } from '@angular/core';
import { BlipChat } from 'blip-chat-widget';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor() {}

  ngOnInit() {
    new BlipChat()
      .withAppKey(
        'd2hhdHNhcHBib3Q2OmQ2MGE0YWZmLTE4YWEtNDYxZi1hMDRmLWRlZmYxNDczZDAzYg=='
      )
      .withButton({ color: '#7895fd' })
      .build();
  }
}
