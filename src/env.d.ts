interface ImportMetaEnv {
  // import.meta.env.PUBLIC_FOO
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
  readonly measurementId: string;

  readonly keySize: number;
  readonly ivSize: number;
  readonly iterations: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}