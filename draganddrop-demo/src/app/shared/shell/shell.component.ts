import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable, shareReplay } from 'rxjs';
import { Board, Task } from 'src/app/kanban/board.model';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  data!: Board;
  tasks?: Task[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private afAuth: AngularFireAuth ) { }

  ngOnInit(): void {
    this.addKanban();
  }

  async addKanban() {
    const user = await this.afAuth.currentUser;
    console.log(user);

    
  }




}
