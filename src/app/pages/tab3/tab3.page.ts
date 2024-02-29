import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/db/database.service';
import { Movie } from 'src/app/interfaces/Movie';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  listMovie: Movie[] = [];

  constructor(
    private databaseService: DatabaseService
  ) {
    this.getData();
  }

  ngOnInit(): void {
    this.getData();

    console.log(this.listMovie,'lista de pelicular');
  }

  async getData(){
    this.listMovie = await this.databaseService.getData();
  }

}
