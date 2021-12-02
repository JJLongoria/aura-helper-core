/**
 * Class to represent a Retrieve Package section on Retrieve Result JSON response
 */
class RetrievePackage {

    name: string;

    /**
     * Create new Retrieve Package instance
     * @param nameOrObject Package name or Retrive Pacakge instance
     */
    constructor(nameOrObject: string | RetrievePackage) {
        if (nameOrObject instanceof RetrievePackage) {
            this.name = nameOrObject.name;
        } else {
            this.name = nameOrObject;
        }
    }
}