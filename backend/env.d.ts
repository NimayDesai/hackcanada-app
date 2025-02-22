declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PINECONE_API: string;
      DATABASE_URL: string;
      GEMINI_API: string;
    }
  }
}

export {}
