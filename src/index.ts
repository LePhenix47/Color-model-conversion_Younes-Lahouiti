import { log } from "./utils/functions/helper-functions/console.functions";

//Web components
import "./components/web-component.component";
import {
  addClass,
  getAncestor,
  getClassListValues,
  getParent,
  removeClass,
  selectQuery,
  selectQueryAll,
} from "./utils/functions/helper-functions/dom.functions";
import {
  handleColorInput,
  setInitialColorForConversion,
} from "./utils/functions/event-listeners/select-event-listeners.functions";

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

function addSelectContainerListeners(): void {
  const hexTextInput: HTMLInputElement = selectQuery(
    ".index__input--hex"
  ) as HTMLInputElement;

  hexTextInput.addEventListener("input", (event: Event) => {
    setInitialColorForConversion(event, [hexTextInput]);
  });

  const selectFromColorModel: HTMLSelectElement = selectQuery(
    ".index__select-converter--select-input"
  ) as HTMLSelectElement;

  selectFromColorModel.addEventListener("input", setInputColor);

  const selectToColorModel: HTMLSelectElement = selectQuery(
    ".index__select-converter--select-output"
  ) as HTMLSelectElement;

  selectToColorModel.addEventListener("input", setOutputColor);
}
addSelectContainerListeners();

function setInputColor(event: Event) {
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
      setInitialColorForConversion(event, selectedColorInputsArray);
    });
  }

  for (const nonSelectedInput of nonSelectedColorInputsArray) {
    nonSelectedInput.addEventListener("input", (event: Event) => {
      setInitialColorForConversion(event, selectedColorInputsArray);
    });
  }
}

function setOutputColor(event: Event) {
  const select: HTMLSelectElement = event.currentTarget as HTMLSelectElement;
  log(select, select.value);

  const parentContainer: HTMLDivElement = getParent(select) as HTMLDivElement;
}
