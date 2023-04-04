import "@emotion/react";
import { FeanutTheme } from "@/interfaces/theme";

declare module "@emotion/react" {
  export interface Theme extends FeanutTheme {}
}
