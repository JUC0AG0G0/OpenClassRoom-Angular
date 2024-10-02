import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  usersnap!: boolean;
  snapbuttontext!: string;

  constructor(private faceSnapsServices: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.usersnap = false;
      this.snapbuttontext = 'Snaps';
      this.getFaceSnap();
      
    }

    private getFaceSnap() {
      const faceSnapId = this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsServices.getFaceSnapById(faceSnapId);
    }

  onAddSnap(): void {
    if (this.usersnap) {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.snapbuttontext = 'Snaps'
    } else {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.snapbuttontext = 'UnSnaps'
    }
    this.usersnap =!this.usersnap
  }
}
