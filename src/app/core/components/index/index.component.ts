import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


/**
 * Index Component
 */
export class IndexComponent implements OnInit {

  private _album = [];

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/personal/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/personal/' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
  }

  workList = [
    {
      image: 'assets/images/personal/1.jpg',
      title: 'Iphone mockup',
      category: 'Branding'
    },
    {
      image: 'assets/images/personal/2.jpg',
      title: 'Mockup Collection',
      category: 'Mockup'
    },
    {
      image: 'assets/images/personal/3.jpg',
      title: 'Abstract images',
      category: 'Abstract'
    },
    {
      image: 'assets/images/personal/4.jpg',
      title: 'Yellow bg with Books',
      category: 'Books'
    },
    {
      image: 'assets/images/personal/5.jpg',
      title: 'Company V-card',
      category: 'V-card'
    },
    {
      image: 'assets/images/personal/6.jpg',
      title: 'Mockup box with paints',
      category: 'Photography'
    }
  ];

    /**
   * Blog Data
   */
    blogData = [
      {
        image: "assets/images/personal/1.jpg",
        title: "Design your apps in your own way",
        like: "33",
        message: "08",
        name: "Calvin Carlo",
        date: "13th August, 2019"
      },
      {
        image: "assets/images/personal/2.jpg",
        title: "How apps is changing the IT world",
        like: "33",
        message: "08",
        name: "Calvin Carlo",
        date: "13th August, 2019"
      },
      {
        image: "assets/images/personal/3.jpg",
        title: "Smartest Applications for Business",
        like: "33",
        message: "08",
        name: "Calvin Carlo",
        date: "13th August, 2019"
      }
    ];

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

  navClass = 'bg-white';
  /**
   * Partners slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };


  ngOnInit(): void {
  }

}
