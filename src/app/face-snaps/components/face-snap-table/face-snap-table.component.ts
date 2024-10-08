import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable } from 'rxjs';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-face-snap-table',
  standalone: true,
  imports: [
    MatTableModule, 
    CdkDropList, 
    CdkDrag, 
    DatePipe
  ],
  templateUrl: './face-snap-table.component.html',
  styleUrl: './face-snap-table.component.scss'
})
export class FaceSnapTableComponent implements OnInit {


  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) { }


  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();;
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
  
  columns: string[] = ['id', 'title', 'description', 'createdDate', 'snaps'];
}