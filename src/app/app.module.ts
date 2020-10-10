import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { AsideComponent } from './shared/aside/aside.component';
import { HeaderComponent } from './shared/header/header.component';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { ChatsBlockComponent } from './chats-block/chats-block.component';
import { ChatBlockComponent } from './chat-block/chat-block.component';
import { NavigationBlockComponent } from './navigation-block/navigation-block.component';
import { AccountComponent } from './account/account.component';
import { AsideGroupComponent } from './shared/aside-group/aside-group.component';
import { LeftNavigationBlockComponent } from './shared/left-navigation-block/left-navigation-block.component';
import { AsideGroupItemComponent } from './shared/aside-group-item/aside-group-item.component';
import { GlobalSearchComponent } from './global-search/global-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AsideComponent,
    HeaderComponent,
    AccountHeaderComponent,
    ChatsBlockComponent,
    ChatBlockComponent,
    NavigationBlockComponent,
    AccountComponent,
    AsideGroupComponent,
    LeftNavigationBlockComponent,
    AsideGroupItemComponent,
    GlobalSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
