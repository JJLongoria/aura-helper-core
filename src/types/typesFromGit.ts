import { MetadataType } from ".";

export interface TypesFromGit {
    toDeploy?: { [key: string]: MetadataType };
    toDelete?: { [key: string]: MetadataType };
}