//Utils

import { spliceArray } from "./array.functions";
import { getRandomNumber } from "./number.functions";

/**
 * Retrieves the values of an object inside an array.
 *
 * @param {object} object The object to retrieve values from.
 *
 * @returns {any[]} An array containing the property values of the object.
 */
export function getObjectValues(object: object): any[] {
  //We check that the object passed is indeed an object
  const objectIsDefined: boolean = !Array.isArray(object);

  if (objectIsDefined) {
    //Returns the property values of the object in an array
    return Object.values(object);
  }
  return [];
}

/**
 * Retrieves the properties themselves of an object inside an array.
 *
 * @param {object} object The object to retrieve properties from.
 *
 * @returns An array containing the property names of the object.
 */
export function getObjectProperties(object: object): any[] {
  //We check that the object passed is indeed an object
  const objectIsDefined: boolean = !Array.isArray(object);

  if (objectIsDefined) {
    //Returns the property names of the object in an array
    return Object.keys(object);
  }
  return [];
}

/**
 * Retrieves the property names and values of an object inside an array.
 *
 * @param {object} object The object to retrieve property names and values from.
 *
 * @returns An array containing pairs of property names and values of the object, example:
 *
 * ```js
 * const obj = {foo: "hello", bar: "salve"}
 *
 * let objectKeyValuePair = getObjectEntries(obj);
 *
 * console.log(objectKeyValuePair) → [["foo", "hello"], ["bar", "salve"]]
 * ```
 */
export function getObjectEntries(object: object): any[] {
  //We check that the object passed is indeed an object
  const objectIsDefined: boolean = !Array.isArray(object);

  if (objectIsDefined) {
    //Returns the property names and its values in pair inside an array
    return Object.entries(object);
  }
  return [];
}
/**
 * Sets a property with the specified value on an object.
 * @param {object} object - The object on which to set the property.
 * @param {string} propertyToAdd - The name of the property to add.
 * @param {*} valueOfProperty - The value to assign to the property.
 * @returns {void}
 */
export function setObjectProperty(
  object: object,
  propertyToAdd: string,
  valueOfProperty: any
): void {
  Object.defineProperty(object, propertyToAdd, { value: valueOfProperty });
}

/**
 * Update an array of objects by a specific property value while preserving the order of objects inside.
 *
 * @param {Array} arrayOfObjects - The array of objects to update.
 * @param {string} property - The name of the property to compare.
 * @param {Object} newObject - The new object to replace the existing one.
 *
 * @returns {Array|null} A new array of objects with the updated object or null if the object was not found.
 */
export function updateArrayOfObjectByProp(
  arrayOfObjects: any[],
  property: string,
  newObject: object
): any[] | null {
  /**
   * Object to be updated
   */
  const objectToRemove: object = arrayOfObjects.find((object) => {
    return object[property] === newObject[property];
  });

  /**
   * Boolean value to know if the object was found
   */
  const notFound: boolean = !objectToRemove;

  if (notFound) {
    return null;
  }

  /**
   * We get the starting index for the
   */
  const startIndex: number = arrayOfObjects.indexOf(objectToRemove);

  const { removedItems, newArray } = spliceArray(
    arrayOfObjects,
    startIndex,
    1,
    newObject
  );

  return newArray;
}
/**
 * Returns a random property from the provided object.
 *
 * @param {object} object - The object to get a random property from.
 *
 * @throws {Error} If the argument is not an object.
 *
 * @returns {string} A random property from the provided object.
 */
export function getRandomPropertyFromObject(object: object): string {
  const isNotAnObject: boolean =
    typeof object !== "object" || Array.isArray(object);
  if (isNotAnObject) {
    throw new Error("Unexpected argument value passed, value is not an object");
  }

  const properties: string[] = getObjectProperties(object);

  const randomIndex: number = getRandomNumber(0, properties.length - 1);

  const randomProperty: string = properties[randomIndex];

  return randomProperty;
}
