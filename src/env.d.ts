interface ImportMetaEnv {
  // import.meta.env.PUBLIC_FOO
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
  readonly measurementId: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}