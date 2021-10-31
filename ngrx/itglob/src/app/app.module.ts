import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { HttpClientModule } from '@angular/common/http';
import { Effect, EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/posts.effects';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
