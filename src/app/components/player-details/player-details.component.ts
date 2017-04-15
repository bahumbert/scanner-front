import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})

export class PlayerDetailsComponent implements OnInit {

    id: string;

    constructor(private route: ActivatedRoute){

    }

    ngOnInit(){
        //this.id = this.route.params['id'];
    }
}
