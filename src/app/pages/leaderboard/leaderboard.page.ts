import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  public leaderboardData;
  public name;
  public teams;
  public category;
  public points;
  public ranking;
  public overallranking;

  constructor() { 

    this.leaderboardData = [
  
      { rank: 'assets/images/img/Andhra.jpg', player: 'Rajat Sharma', category:'Pro', points:'178000', stworank:'1',overallrank:'11' },
      { rank: 'assets/images/img/Goa.jpg', player: 'Siddharth Karia', category:'Live',points:'159000', stworank:'2' ,overallrank:'3'},
      { rank: 'assets/images/img/Gujarat.jpg', player: 'Eka Vedantham', category:'Wildcard', points:'159000', stworank: '2',overallrank:'13'},
      { rank: 'assets/images/img/Rajasthan.jpg', player: 'Saumil Krishnani', category:'Live', points:'159000', stworank:'2' ,overallrank:'15'},
      { rank: 'assets/images/img/Chennai.jpg', player: 'Bobby Zhang', category:'Wildcard', points:'150000', stworank:'5' ,overallrank:'15'},
      { rank: 'assets/images/img/Kolkata.jpg', player: 'Raman Gujral', category:'Wildcard', points:'146000', stworank:'6' ,overallrank:'9'},
      { rank: 'assets/images/img/Bengaluru.jpg', player: 'Ashish Munot', category:'Live', points:'145000', stworank:'7' ,overallrank:'17'},
      { rank: 'assets/images/img/Pune.jpg', player: 'Michael Soyza', category:'Online', points:'116000', stworank:'8' ,overallrank:'18'},
      
      
    ]
  }

  ngOnInit() {
  }

}
