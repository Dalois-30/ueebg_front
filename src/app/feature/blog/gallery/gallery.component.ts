import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { lastValueFrom } from 'rxjs';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private _album = [];
  images: string[] = [];
  postCount: number;
  blogListData: any;

  constructor(
    private _lightbox: Lightbox,
    private _blogService: BlogService
  ) {
  }

  ngOnInit(): void {
    this.init()
  }
  
  async init() {
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
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
