export const ProcessEvent: ProcessEvent = {
    STD_OUT: 'out',
    ERR_OUT: 'errorOut',
    ERROR: 'error',
    END: 'end',
    KILLED: 'killed'
};

interface ProcessEvent {
    STD_OUT: string;
    ERR_OUT: string;
    ERROR: string;
    END: string;
    KILLED: string;
};