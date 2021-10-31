import { Tutorial } from '../models/tutorial.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}

export const initialState: AppState = {
  tutorial:null
}
