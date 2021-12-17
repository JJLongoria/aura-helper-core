export const ApexNodeTypes: ApexNodeTypesDef = {
    CLASS: 'class',
    INTERFACE: 'interface',
    ENUM: 'enum',
    PROPERTY: 'property',
    GETTER: 'getter',
    SETTER: 'setter',
    INITIALIZER: 'initializer',
    METHOD: 'method',
    THROWS: 'throws',
    CONSTRUCTOR: 'constructor',
    STATIC_CONSTRUCTOR: 'static_constructor',
    VARIABLE: 'variable',
    TRIGGER: 'trigger',
    COMMENT: 'comment',
    BLOCK_COMMENT: 'block_comment',
    DATATYPE: 'datatype',
    ANNOTATION: 'annotation',
    SOQL: 'soql',
    SOQL_FIELD: 'soql_field'
};

export interface ApexNodeTypesDef {
    CLASS: string;
    INTERFACE: string;
    ENUM: string;
    PROPERTY: string;
    GETTER: string;
    SETTER: string;
    INITIALIZER: string;
    METHOD: string;
    THROWS: string;
    CONSTRUCTOR: string;
    STATIC_CONSTRUCTOR: string;
    VARIABLE: string;
    TRIGGER: string;
    COMMENT: string;
    BLOCK_COMMENT: string;
    DATATYPE: string;
    ANNOTATION: string;
    SOQL: string;
    SOQL_FIELD: string;
}