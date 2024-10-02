import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { PremierComposantComponent } from "../premier-composant/premier-composant.component";
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [PremierComposantComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];


  constructor(private faceSnapsServices: FaceSnapsService) {}

    ngOnInit(): void {

      this.faceSnaps = this.faceSnapsServices.getFaceSnaps();
        
    }
}
