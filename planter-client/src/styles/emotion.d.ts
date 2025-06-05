import "@emotion/react";
import { ColorsTypes, FontSizeTypes, BordersTypes } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorsTypes;
    fontSizes: FontSizeTypes;
    borders: BordersTypes;
  }
}
