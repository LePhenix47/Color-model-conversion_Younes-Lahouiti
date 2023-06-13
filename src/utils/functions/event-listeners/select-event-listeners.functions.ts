import {
  getAncestor,
  getClassListValues,
  getParent,
  selectQuery,
  selectQueryAll,
  setStyleProperty,
} from "../helper-functions/dom.functions";
import { ColorConverter } from "../../../../node_modules/@lephenix47/color-converter/dist/lib/es6/index";
import { log } from "../helper-functions/console.functions";
import { max, min } from "../helper-functions/math.functions";
import { setObjectProperty } from "../helper-functions/object.functions";
import { sliceString, splitString } from "../helper-functions/string.functions";

const color: string = "#000000";

const colorConverter: ColorConverter = new ColorConverter("HEX", color);

/**
 * Handles the color input event.
 * @param {Event} event - The input event object.
 */
export function handleColorInput(event: Event) {
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

export function setInitialColorForConversion(
  event: Event,
  specificColorInputsArray: HTMLInputElement[]
) {
  let color: object | string = {};

  const parentDiv: HTMLDivElement = getParent(
    specificColorInputsArray[0]
  ) as HTMLDivElement;

  const colorModelArray: string[] = getClassListValues(parentDiv);
  const colorModel: string = splitString(colorModelArray[1], "--")[1];

  for (const input of specificColorInputsArray) {
    const inputValue: string | number = isNaN(input.valueAsNumber)
      ? input.value
      : input.valueAsNumber;
    const colorProperty: string = input.name;

    const isStringInput: boolean = isNaN(input.valueAsNumber);

    if (isStringInput) {
      color = inputValue as string;
      continue;
    }

    const minValue: number = Number(input.min);
    const maxValue: number = Number(input.max);

    const hasValueNotDefined: boolean = isNaN(inputValue as number);
    if (hasValueNotDefined) {
      input.value = (0).toString();
    }
    const overflows: boolean = (inputValue as number) > maxValue;
    if (overflows) {
      input.value = maxValue.toString();
    }

    const underflows: boolean = (inputValue as number) < minValue;
    if (underflows) {
      input.value = minValue.toString();
    }

    setObjectProperty(color as object, colorProperty, inputValue);
  }

  colorConverter.setNewColor(color as any, colorModel);
  log(colorConverter.color, colorConverter.convertTo("rgb"));

  const convertFromDiv: HTMLDivElement = getAncestor(
    parentDiv,
    ".index__select-converter--input-container"
  ) as HTMLDivElement;

  log(convertFromDiv);

  const beforeAfterConversionContainer: HTMLDivElement = getParent(
    convertFromDiv
  ) as HTMLDivElement;
  log(beforeAfterConversionContainer);

  const convertToDiv: HTMLDivElement = selectQuery(
    ".index__select-converter--output-container",
    beforeAfterConversionContainer
  ) as HTMLDivElement;

  const selectToColorElement: HTMLSelectElement = selectQuery(
    "select",
    convertToDiv
  ) as HTMLSelectElement;

  const output: HTMLOutputElement = selectQuery(
    "output",
    convertToDiv
  ) as HTMLOutputElement;

  const converterColorModel: string = selectToColorElement.value;
  // const convertedValue

  log(selectToColorElement);
}

export function setWantedColorForConversion(
  event: Event,
  specificColorInputsArray: string
) {
  //   const input: HTMLInputElement = event.currentTarget as HTMLInputElement;
  //   const colorType: string = input.name;
}
