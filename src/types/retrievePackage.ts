/**
 * Class to represent a Retrieve Package section on Retrieve Result JSON response
 */
export class RetrievePackage {

    name: string;

    /**
     * Create new Retrieve Package instance
     * @param nameOrPackage Package name or Retrive Pacakge instance
     */
    constructor(nameOrPackage: string | RetrievePackage) {
        if (nameOrPackage instanceof RetrievePackage) {
            this.name = nameOrPackage.name;
        } else {
            this.name = nameOrPackage;
        }
    }
}