export interface SpotifyAccessTokenOutput {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
}

export interface SdkStatusTypes {
  paused: boolean;
  actived: boolean;
  repeated: 'track' | 'context' | 'off';
  position: number;
}
