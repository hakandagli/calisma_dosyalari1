// Section 1
import { Injectable } from '@angular/core'
import { Action,createAction , props} from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'


// Section 2
export const ADD_TUTORIAL    = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'
export const LOAD_POSTS = '[TUTORIAL] load posts'
export const LOAD_POSTS_SUCCESS = '[TUTORIAL] load posts success'

// Section 3
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL
    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL
    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial;

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{posts:Tutorial}>()
);


