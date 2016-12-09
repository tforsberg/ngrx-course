import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, RequestOptions} from '@angular/http';
import { AppComponent } from './app.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {CurrentThreadService} from "./services/current-thread.service";
import {ThreadsRestService} from "./services/threads-rest.service";
import {ParticipantService} from "./services/participant.service";
import { UserSelectionComponent } from './user-selection/user-selection.component';
import {MessageNotificationsService} from "./services/message-notifications.service";
import {StoreModule} from "@ngrx/store";




@NgModule({
  declarations: [
    AppComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     StoreModule.provideStore({})
  ],
  providers: [
      ThreadsRestService,
      CurrentThreadService,
      ParticipantService,
      MessageNotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
