import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  imageObject: Array<object> = [{
    image: '/assets/img/carousel/c1.jpg',
    thumbImage: '/assets/img/carousel/c1.jpg',
    alt: 'Koncert Banjalučke filharmonije',
    title: 'Koncert Banjalučke filharmonije'
}, 
{
  image: '/assets/img/carousel/c2.jpg',
  thumbImage: '/assets/img/carousel/c2.jpg',
  alt: 'Demo Fest',
  title: 'Demo Fest',
}, 
{
  image: '/assets/img/carousel/c3.jpg',
  thumbImage: '/assets/img/carousel/c3.jpg',
  alt: 'Predstava "Naši dani"',
  title: 'Predstava "Naši dani"',
}, 
{
  image: '/assets/img/carousel/c7.jpg',
  thumbImage: '/assets/img/carousel/c7.jpg',
  alt: 'Demo Fest ',
  title: 'Izložba Žike i Miše Pećarića',
}, 
{
  image: '/assets/img/carousel/c6.jpg',
  thumbImage: '/assets/img/carousel/c6.jpg',
  alt: 'Predstava "Naši dani"',
  title: 'Predstava "Prah"',
},
{
  image: '/assets/img/carousel/c5.jpg',
  thumbImage: '/assets/img/carousel/c5.jpg',
  alt: 'Predstava "Prah"',
  title: 'Predstava "Naši dani"',
}, 
{
  image: '/assets/img/carousel/c4.jpg',
  thumbImage: '/assets/img/carousel/c4.jpg',
  alt: 'Izložba Žike i Miše Pećarića',
  title: 'Demo Fest',
}, 

];

  constructor() { }

  ngOnInit() {
  }

}
