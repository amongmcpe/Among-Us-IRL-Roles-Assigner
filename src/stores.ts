import { writable } from "svelte/store";
import type { OptionsType } from "./types/App.types";

export const optionsStore = writable<OptionsType>({
  // The last map part is to remove object copy errors
  players: new Array(5).fill({ name: "" }).map(() => {
    return { name: "" };
  }),
  gameMode: "default",
});
