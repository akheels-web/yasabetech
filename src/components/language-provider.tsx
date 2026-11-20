"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { copy, type Language } from "@/lib/i18n";

const STORAGE_KEY = "misyatech-lang";
const EVENT_NAME = "misyatech-lang-change";

interface LanguageContextValue {
  lang: Language;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  setLang: (next: Language) => void;
  toggleLang: () => void;
  t: (typeof copy)[Language];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function subscribe(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener(EVENT_NAME, callback);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(EVENT_NAME, callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getSnapshot(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((next: Language) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures in restricted contexts
    }
    window.dispatchEvent(new Event(EVENT_NAME));
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ar" : "en");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        isRtl: lang === "ar",
        setLang,
        toggleLang,
        t: copy[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en" as Language,
      dir: "ltr" as const,
      isRtl: false,
      setLang: () => {},
      toggleLang: () => {},
      t: copy.en,
    };
  }
  return ctx;
}
