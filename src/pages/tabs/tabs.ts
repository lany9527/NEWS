import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { FollowPage } from '../follow/follow';
import { VideoPage } from '../video/video'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = VideoPage;
  tab3Root: any = FollowPage;
  tab4Root: any = AboutPage;

  // @ViewChild('myTabs') tabRef: Tabs;

  // ionViewDidEnter() {
  //   this.tabRef.select(3);
  // }

  constructor() {

  }
}