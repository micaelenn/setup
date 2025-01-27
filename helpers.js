import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

/**
 * Get all folders name inside 'utils'
 *
 */
export const getFoldersName = (directoryPath) => {
  const directory = getDirectoryName(directoryPath)
  return fs.readdirSync(directory);
}

/**
 * Get a full path of a directory
 *
 */
export const getDirectoryName = (directoryPath) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return`${__dirname}/${directoryPath}`;
}

/**
 * Get directory lowecase name and format into camel case
 * Ex: front-end -> Front End
 *
 */
export const formatBoilerplateName = (type) => {
  return type.split('-').map(word => word.charAt(0) + word.slice(1)).join(' ');
}