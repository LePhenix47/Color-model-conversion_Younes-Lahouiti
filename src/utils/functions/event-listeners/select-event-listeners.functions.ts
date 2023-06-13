import {
  addClass,
  getAncestor,
  getClassListValues,
  getParent,
  modifyAttribute,
  removeClass,
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

export function setInputColor(event: Event) {
  const select: HTMLSelectElement = event.currentTarget as HTMLSelectElement;
  log(select, select.value);

  const containersParent: HTMLDivElement = getAncestor(
    select,
    ".index__select-converter--inputs"
  ) as HTMLDivElement;

  const classOfContainerToShow: string = `index__color-model-container--${select.value}`;
  const inputContainersArray: HTMLDivElement[] = selectQueryAll(
    ".index__color-model-container",
    containersParent
  ) as HTMLDivElement[];

  let selectedColorInputsArray: HTMLInputElement[] = [];

  let nonSelectedColorInputsArray: HTMLInputElement[] = [];

  for (const inputDivContainer of inputContainersArray) {
    const needsToBeShown: boolean = getClassListValues(
      inputDivContainer
    ).includes(classOfContainerToShow);

    if (needsToBeShown) {
      removeClass(inputDivContainer, "hide");
      selectedColorInputsArray = selectQueryAll(
        "input",
        inputDivContainer
      ) as HTMLInputElement[];
      continue;
    }

    addClass(inputDivContainer, "hide");
    nonSelectedColorInputsArray = selectQueryAll(
      "input",
      inputDivContainer
    ) as HTMLInputElement[];
  }

  for (const selectedInput of selectedColorInputsArray) {
    selectedInput.addEventListener("input", (event: Event) => {
      setInitialColorForConversion(selectedColorInputsArray);
    });
  }

  for (const nonSelectedInput of nonSelectedColorInputsArray) {
    nonSelectedInput.addEventListener("input", (event: Event) => {
      setInitialColorForConversion(selectedColorInputsArray);
    });
  }
}

export function setOutputColor(event: Event) {
  const select: HTMLSelectElement = event.currentTarget as HTMLSelectElement;
  log(select, select.value);

  const parentContainer: HTMLDivElement = getParent(select) as HTMLDivElement;

  const output: HTMLOutputElement = selectQuery(
    "output",
    parentContainer
  ) as HTMLOutputElement;

  const inputHexValue: string = parentContainer.dataset.colorValue;
  const convertedValue = colorConverter.convertTo(select.value);

  log(inputHexValue);

  setOutputValue(output, select.value, convertedValue);
}

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

  const hexColor: string = sliceString(
    colorConverter.convertTo("hex") as string,
    1
  );

  modifyAttribute("data-color-value", hexColor as string, convertToDiv);

  const output: HTMLOutputElement = selectQuery(
    "output",
    convertToDiv
  ) as HTMLOutputElement;

  const convertedValue = colorConverter.convertTo(selectToColorElement.value);

  setOutputValue(output, selectToColorElement.value, convertedValue);
}

export function setOutputValue(
  output: HTMLOutputElement,
  model: string,
  convertedValue
) {
  switch (model) {
    case "name":
    case "hex": {
      //If we have a hex or name value
      output.textContent = `${
        !!(convertedValue as string)
          ? (convertedValue as string)
          : "Not available"
      }`;
      break;
    }
    case "rgb": {
      const { red, green, blue } = convertedValue as {
        red: number;
        green: number;
        blue: number;
      };

      output.textContent = `rgb(${red}, ${green}, ${blue})`;
      break;
    }
    case "hsl": {
      const { hue, saturation, lightness } = convertedValue as {
        hue: number;
        saturation: number;
        lightness: number;
      };
      output.textContent = `hsl(${hue}°, ${saturation}%, ${lightness}%)`;
      break;
    }
    case "hwb": {
      const { hue, whiteness, blackness } = convertedValue as {
        hue: number;
        whiteness: number;
        blackness: number;
      };
      output.textContent = `hwb(${hue}°, ${whiteness}%, ${blackness}%)`;
      break;
    }
    case "hsv": {
      const { hue, saturation, value } = convertedValue as {
        hue: number;
        saturation: number;
        value: number;
      };
      output.textContent = `hsv(${hue}°, ${saturation}%, ${value}%)`;
      break;
    }
    case "cmyk": {
      const { cyan, magenta, yellow, key } = convertedValue as {
        cyan: number;
        magenta: number;
        yellow: number;
        key: number;
      };
      output.textContent = `cmyk(${cyan}%, ${magenta}%, ${yellow}%, ${key}%)`;
      break;
    }
    default: {
      break;
    }
  }
}
