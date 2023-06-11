import { log } from "./utils/functions/helper-functions/console.functions";

//Web components
import "./components/web-component.component";
// import { ColorConverter } from "@lephenix47/color-converter";
import { ColorConverter } from "../node_modules/@lephenix47/color-converter/dist/lib/es6/index";
import {
  selectQuery,
  selectQueryAll,
  setStyleProperty,
} from "./utils/functions/helper-functions/dom.functions";
import { formatText } from "./utils/functions/helper-functions/string.functions";

const color: string = "#000000";

const colorConverter: ColorConverter = new ColorConverter("HEX", color);

/**
 * Adds event listeners to the input container.
 */
function addInputContainerListeners(): void {
  const colorInput: HTMLInputElement = selectQuery(
    ".index__input--color"
  ) as HTMLInputElement;

  colorInput.addEventListener("input", handleColorInput);
}
addInputContainerListeners();

/**
 * Handles the color input event.
 * @param {Event} event - The input event object.
 */
function handleColorInput(event: Event) {
  const colorInput: HTMLInputElement = event.currentTarget as HTMLInputElement;

  setStyleProperty("--_input-color-bg", colorInput.value, colorInput);

  colorConverter.setNewColor(colorInput.value, "hex");

  let arrayOfColorModels: string[] = formatColorModelsArray(
    colorConverter.getAllColorModels()
  );

  const outputsArray: HTMLOutputElement[] = selectQueryAll(
    ".index__output"
  ) as HTMLOutputElement[];

  for (let i = 0; i < outputsArray.length; i++) {
    const output: HTMLOutputElement = outputsArray[i];
    output.textContent = arrayOfColorModels[i];
  }
}

/**
 * Formats an array of color models.
 * @param {unknown[]} arrayOfColorModels - The array of color models.
 * @returns {string[]} - The formatted array of color models.
 */
function formatColorModelsArray(arrayOfColorModels: unknown[]): string[] {
  const copyOfColorModels: unknown[] | string[] =
    Array.from(arrayOfColorModels);
  for (let i = 0; i < copyOfColorModels.length; i++) {
    const colorModelValue: unknown = copyOfColorModels[i];

    const isNull: boolean = colorModelValue === null;
    if (isNull) {
      copyOfColorModels[i] = "N/A";
      continue;
    }

    const isRgb: boolean = colorModelValue.hasOwnProperty("red");
    if (isRgb) {
      const { red, green, blue } = colorModelValue as {
        red: number;
        green: number;
        blue: number;
      };
      copyOfColorModels[i] = `rgb(${red}, ${green}, ${blue})`;
    }

    const isHsl: boolean = colorModelValue.hasOwnProperty("lightness");
    if (isHsl) {
      const { hue, saturation, lightness } = colorModelValue as {
        hue: number;
        saturation: number;
        lightness: number;
      };
      copyOfColorModels[i] = `hsl(${hue}°, ${saturation}%, ${lightness}%)`;
    }
    const isHwb: boolean = colorModelValue.hasOwnProperty("whiteness");
    if (isHwb) {
      const { hue, whiteness, blackness } = colorModelValue as {
        hue: number;
        whiteness: number;
        blackness: number;
      };
      copyOfColorModels[i] = `hwb(${hue}°, ${whiteness}%, ${blackness}%)`;
    }

    const isHsv: boolean = colorModelValue.hasOwnProperty("value");
    if (isHsv) {
      const { hue, saturation, value } = colorModelValue as {
        hue: number;
        saturation: number;
        value: number;
      };
      copyOfColorModels[i] = `hsv(${hue}°, ${saturation}%, ${value}%)`;
    }

    const isCmyk: boolean = colorModelValue.hasOwnProperty("cyan");
    if (isCmyk) {
      const { cyan, magenta, yellow, key } = colorModelValue as {
        cyan: number;
        magenta: number;
        yellow: number;
        key: number;
      };
      copyOfColorModels[i] = `cmyk(${cyan}%, ${magenta}%, ${yellow}%, ${key}%)`;
    }
  }

  return copyOfColorModels as string[];
}
