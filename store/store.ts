import {create} from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
   | "en"
   | "hi"
   | "es"
   | "de"
   | "fr"
   | "ja"
   | "la"
   | "ru"
   | "zh"
   | "ar"
   | "bn"
   | "sa"
   | "ta"
   | "te"
   | "it"
   | "bho"
   | "pl";
export const LanguagesSupportedMap: Record<LanguagesSupported,  string>= {
    en: "English",
    hi: "Hindi",
    es: "Spanish",
    de: "German",
    fr: "French",
    ja: "Japanese",
    la: "Latin",
    ru: "Russian",
    zh: "Mandarin",
    ar: "Arabic",
    bn: "Bengali",
    sa: "Sanskrit",
    ta: "Tamil",
    te: "Telugu",
    it: "Italian",
    bho: "Bhojpuri",
    pl: "Polish"
};

const LANGUAGES_IN_FREE=2;

interface LanguageState{
    language: LanguagesSupported;
    setLanguage: (language: LanguagesSupported)=>void;
    getLanguages: (isPro: boolean)=>LanguagesSupported[];
    getNotSupportedLanguages: (isPro: boolean)=>LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>((set, get) => ({
    //notSupportedLanguages: (isPro: boolean) => [],
    language: "en",
    setLanguage: (language: LanguagesSupported) => set({ language }),
    getLanguages: (isPro: boolean) => {
      // If the user is pro, return all supported languages
      if (isPro) return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];
      // If not pro, return only the first two languages
      return Object.keys(LanguagesSupportedMap).slice(0, LANGUAGES_IN_FREE) as LanguagesSupported[];
    },
    getNotSupportedLanguages: (isPro: boolean) => {
      if (isPro) return []; // No unsupported languages for "pro" users
      // Excluding the first two supported languages
      return Object.keys(LanguagesSupportedMap).slice(LANGUAGES_IN_FREE) as LanguagesSupported[];
    },
  }));

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null)=>void;
}

export const useSubscriptionStore=create<SubscriptionState>((set)=>({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null)=>set({subscription}),
}));