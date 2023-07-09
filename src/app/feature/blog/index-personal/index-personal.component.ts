import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { BlogService } from '../blog.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-index-personal',
  templateUrl: './index-personal.component.html',
  styleUrls: ['./index-personal.component.css']
})

/***
 * Personal Component
 */
export class IndexPersonalComponent implements OnInit {  
  private _album = [];
  images: string[] = [];
  postCount: number;
  blogListData: any;

  constructor(
    private _lightbox: Lightbox,
    private _blogService: BlogService
    ) {
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  showNavigationArrows = true;
  showNavigationIndicators = false;

  ngOnInit(): void {
    this.init()
  }

  showMore(id1: string, id2: string) {
    document.getElementById(id2).style.display = 'none';
    document.getElementById(id1).style.display = 'block';
  }
  showLess(id1: string, id2: string) {  
    document.getElementById(id1).style.display = 'none';
    document.getElementById(id2).style.display = 'flex';
  }

  async init() {
    this._blogService.getFirstsPosts(0, 3).subscribe((posts) => {
      this.blogListData = posts.data;
      this.postCount = posts.totalItems;
    });
    this.images = await lastValueFrom(this._blogService.getImages("ueebg"));
    console.log("images", this.images);

    for (let i = 0; i <= 5; i++) {

      const src = this.images[i];
      const caption = 'Image ' + i + ' caption here';
      const thumb = this.images[i] + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
  }
}
