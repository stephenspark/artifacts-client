import { Component, Input, OnInit } from '@angular/core';

export type ImageTypes =
  | 'characters'
  | 'items'
  | 'monsters'
  | 'maps'
  | 'resources'
  | 'effects';

@Component({
  selector: 'app-artifacts-image',
  standalone: true,
  imports: [],
  templateUrl: './artifacts-image.component.html',
  styleUrl: './artifacts-image.component.css',
})
export class ArtifactsImageComponent implements OnInit {
  baseUrl = 'https://artifactsmmo.com/images';
  @Input({ required: true }) imageType!: ImageTypes;
  @Input({ required: true }) imageName!: string;

  imageSrc!: string;

  ngOnInit() {
    this.imageSrc = `${this.baseUrl}/${this.imageType}/${this.imageName}.png`;
  }
}
