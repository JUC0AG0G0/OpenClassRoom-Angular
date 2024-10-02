import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn:'root'
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
          'Titre',
          'Ceci est une description',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          120
        ).withLocation('Jardin'),

        new FaceSnap(
          'Autre titre',
          'Ceci est une autre description',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC43jYxrD_HBMN9x-jGUUHSUDQwmdBDgnF4w&s',
          new Date(),
          346
        ).withLocation('Montagne'),

        new FaceSnap(
          'Dernier titre',
          'Ceci est la derniere description',
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          new Date(),
          28
        )
      ];

      getFaceSnaps(): FaceSnap[] {
        return[...this.faceSnaps]
      }

      getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap :FaceSnap | undefined = this.faceSnaps.find(FaceSnap => FaceSnap.id === faceSnapId);
        if(!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap
      }

      snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const FaceSnap :FaceSnap = this.getFaceSnapById(faceSnapId);
        FaceSnap.snap(snapType)
      }
}