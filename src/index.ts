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
  setInputColor,
  setOutputColor,
} from "./utils/functions/event-listeners/select-event-listeners.functions";

/**
 * Adds event listeners to the input container.
 *
 * @returns {void}
 */
function addInputContainerListeners(): void {
  const colorInput: HTMLInputElement = selectQuery(
    ".index__input--color"
  ) as HTMLInputElement;

  colorInput.addEventListener("input", handleColorInput);
}
addInputContainerListeners();

/**
 * Adds event listeners to the individual inputs select container.
 *
 * @returns {void}
 */
function addSelectContainerListeners(): void {
  const hexTextInput: HTMLInputElement = selectQuery(
    ".index__input--hex"
  ) as HTMLInputElement;

  hexTextInput.addEventListener("input", (event: Event) => {
    setInitialColorForConversion([hexTextInput]);
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
