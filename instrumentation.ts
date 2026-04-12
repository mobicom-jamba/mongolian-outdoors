export async function register() {
  if (typeof window === "undefined" && typeof localStorage !== "undefined") {
    if (typeof localStorage.getItem !== "function") {
      const store: Record<string, string> = {};
      const storage = {
        getItem(key: string) {
          return store[key] ?? null;
        },
        setItem(key: string, value: string) {
          store[key] = value;
        },
        removeItem(key: string) {
          delete store[key];
        },
        clear() {
          for (const key of Object.keys(store)) {
            delete store[key];
          }
        },
        key(index: number) {
          const keys = Object.keys(store);
          return keys[index] ?? null;
        },
        get length() {
          return Object.keys(store).length;
        },
      };
      (globalThis as any).localStorage = storage;
    }
  }
}
