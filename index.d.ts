declare module '*.mp3' {
  const src: string;
  export default src;
}

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: any;
    Spotify: any;
  }
}

export {};
