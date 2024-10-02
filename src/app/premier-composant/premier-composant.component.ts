import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premier-composant',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './premier-composant.component.html',
  styleUrl: './premier-composant.component.scss'
})
export class PremierComposantComponent {

  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
