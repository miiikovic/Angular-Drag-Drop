import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})

export class BoardListComponent implements OnInit, OnDestroy {
  boards!: Board[];
  sub!: Subscription;

  constructor(public boardService: BoardService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.sub = this.boardService
    .getUserBoards()
    .subscribe(boards => (this.boards = boards));
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }


}
