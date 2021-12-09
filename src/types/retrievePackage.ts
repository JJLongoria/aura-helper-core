/**
 * Class to represent a Retrieve Package section on Retrieve Result JSON response
 */
export class RetrievePackage {

    name: string;

    /**
     * Create new Retrieve Package instance
     * @param {string | { [key: string]: any }} nameOrPackage Package name or Retrive Pacakge instance
     */
    constructor(nameOrPackage: string | { [key: string]: any }) {
        if (nameOrPackage && typeof nameOrPackage !== 'string') {
            this.name = nameOrPackage.name;
        } else {
            this.name = nameOrPackage;
        }
    }
}