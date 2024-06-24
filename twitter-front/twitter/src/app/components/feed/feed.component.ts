import { Component, OnInit, inject } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  private _service = inject(FeedService);

  any: any;

  ngOnInit(): void {
    this._service.findAllFeed().subscribe(feed => {
      this.any = feed;
      console.log(feed)
    })
  }
}
