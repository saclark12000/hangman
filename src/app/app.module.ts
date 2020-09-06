import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { GameComponent } from './game/container/game.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './store/reducers.reducer';
import { LetterSelectionMenuComponent } from './game/components/letter-selection-menu/letter-selection-menu.component';
import { TargetLetterDisplayComponent } from './game/components/target-letter-display/target-letter-display.component';
import { StrikeDisplayComponent } from './game/components/strike-display/strike-display.component';
import { HeaderComponent } from './game/components/header/header.component';
import { GameOverMenuComponent } from './game/game-over-menu/game-over-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    GameComponent,
    LetterSelectionMenuComponent,
    TargetLetterDisplayComponent,
    StrikeDisplayComponent,
    HeaderComponent,
    GameOverMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UiComponent, GameComponent]
})
export class AppModule { }
