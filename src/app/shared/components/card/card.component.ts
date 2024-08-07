import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../../models/posts.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() postsData !: Iposts
  constructor() { }

  ngOnInit(): void {
  }

}
