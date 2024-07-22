import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostTeamComponent } from './post-team/post-team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostTeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
