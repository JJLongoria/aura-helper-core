export const ProcessEvent: ProcessEventDef = {
    STD_OUT: 'out',
    ERR_OUT: 'errorOut',
    ERROR: 'error',
    END: 'end',
    KILLED: 'killed'
};

export interface ProcessEventDef {
    STD_OUT: string;
    ERR_OUT: string;
    ERROR: string;
    END: string;
    KILLED: string;
};