import defaultIde from "../../data/default.ide";
import vehiclesIde from "../../data/vehicles.ide";
import pedsIde from "../../data/peds.ide";
import multiobjIde from "../../data/maps/generic/multiobj.ide";
import dynamicIde from "../../data/maps/generic/dynamic.ide";
import dynamic2Ide from "../../data/maps/generic/dynamic2.ide";

/**
 *
 * @param {string} name model name as defined in vehicles.ide
 * @returns {number} model id
 */
export function car([name]) {
	let nameLower = name.toLowerCase();
	const models = vehiclesIde.cars;
	const model = models.find((line) => line[1].toLowerCase() === nameLower);
	if (model) {
		return parseInt(model[0]);
	}
	throw new Error(`Model with the name ${name} not found in vehicles.ide`);
}

/**
 *
 * @param {string} name model name as defined in peds.ide
 * @returns {number} model id
 */
export function ped([name]) {
	let nameLower = name.toLowerCase();
	const models = pedsIde.peds;
	const model = models.find((line) => line[1].toLowerCase() === nameLower);
	if (model) {
		return parseInt(model[0]);
	}
	throw new Error(`Model with the name ${name} not found in peds.ide`);
}

/**
 *
 * @param {string} name model name as defined in default.ide
 * @returns {number} model id
 */
export function weapons([name]) {
	let nameLower = name.toLowerCase();
	const models = defaultIde.weap;
	const model = models.find((line) => line[1].toLowerCase() === nameLower);
	if (model) {
		return parseInt(model[0]);
	}
	throw new Error(`Model with the name ${name} not found in default.ide`);
}

/**
 *
 * @param {string} name model name as defined in multiobj.ide
 * @returns {number} model id
 */
export function multiObj([name]) {
	let nameLower = name.toLowerCase();
	const models = multiobjIde.objs;
	const model = models.find((line) => line[1].toLowerCase() === nameLower);
	if (model) {
		return parseInt(model[0]);
	}
	throw new Error(`Model with the name ${name} not found in multiobj.ide`);
}

/**
 *
 * @param {string} name model name as defined in multiobj.ide
 * @returns {number} model id
 */
export function dynObjs([name]) {
	let nameLower = name.toLowerCase();
	const models = dynamicIde.objs;
	const model = models.find((line) => line[1].toLowerCase() === nameLower);
	if (model) {
		return parseInt(model[0]);
	}
	throw new Error(`Model with the name ${name} not found in multiobj.ide`);
}
/**
 *
 * @param {string} name model name as defined in multiobj.ide
 * @returns {number} model id
 */
export function dyn2Objs([name]) {
	let nameLower = name.toLowerCase();
	const models = dynamic2Ide.objs;
	const model = models.find((line) => line[1].toLowerCase() === nameLower);
	if (model) {
		return parseInt(model[0]);
	}
	throw new Error(`Model with the name ${name} not found in multiobj.ide`);
}

