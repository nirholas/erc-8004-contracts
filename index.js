/**
 * ERC-8004 registry ABIs.
 *
 * package.json has always declared `main: index.js`, but no such file was ever
 * published, so importing "@nirholas/erc-8004-contracts" failed with
 * ERR_MODULE_NOT_FOUND on every version. The package's useful payload for JS
 * consumers is the three registry ABIs under abis/, so that is what this entry
 * point exports.
 *
 *   import { IdentityRegistryABI } from "@nirholas/erc-8004-contracts"
 *   const contract = new ethers.Contract(address, IdentityRegistryABI, provider)
 *
 * The JSON files stay importable directly for anyone already depending on
 * those paths. They are loaded through createRequire rather than an import
 * attribute so this works on Node versions predating stable JSON modules.
 */

import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export const IdentityRegistryABI = require("./abis/IdentityRegistry.json");
export const ReputationRegistryABI = require("./abis/ReputationRegistry.json");
export const ValidationRegistryABI = require("./abis/ValidationRegistry.json");

/** Keyed by registry name, for callers that pick a registry at runtime. */
export const abis = {
	IdentityRegistry: IdentityRegistryABI,
	ReputationRegistry: ReputationRegistryABI,
	ValidationRegistry: ValidationRegistryABI,
};

export default { IdentityRegistryABI, ReputationRegistryABI, ValidationRegistryABI, abis };
