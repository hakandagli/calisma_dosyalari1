import { PostsService } from "../services/posts.service";
import { Actions,createEffect,ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators'
import { loadPosts} from '../actions/tutorial.actions'


@Injectable()

export class PostsEffects{
  constructor(
    private actions$: Actions,
    private postsService:PostsService
  ) { }

  loadPosts = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadPosts),
        mergeMap((action) => {
          return this.postsService.getPosts().pipe(
            map((data) => {
              console.log(data)
            })
          )
        })
      )
    }, {dispatch:false}
  )
}
