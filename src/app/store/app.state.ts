export interface HttpCodeState {
  code: number,
  url: string
};

export interface AppState {
  statusCodes: HttpCodeState[]
};

export const initialState: HttpCodeState[] = [];
