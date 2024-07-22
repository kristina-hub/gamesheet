import { Routes } from '@angular/router';
import {PostTeamComponent} from "./post-team/post-team.component";
import {ShowTeamComponent} from "./show-team/show-team.component";
import {EditTeamComponent} from "./edit-team/edit-team.component";
import {HistoryTeamComponent} from "./history-team/history-team.component";
import {SelectTeamComponent} from "./select-team/select-team.component";

export const routes: Routes = [
  {
    path: 'team/post',
    component: PostTeamComponent
  },
  {
    path: 'team/show',
    component: ShowTeamComponent
  },
  {
    path: 'team/edit',
    component: EditTeamComponent
  },
  {
    path: 'team/history',
    component: HistoryTeamComponent
  },
  {
    path: 'team/select',
    component: SelectTeamComponent
  }
];
