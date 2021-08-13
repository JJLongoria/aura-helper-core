const Utils = require('../utils/utils');
const MathUtils = require('../utils/mathUtils');
const ProgressStages = require('../values/progressStages');

class ProgressStatus {

    constructor(stageOrObject, increment, percentage, entityType, entityObject, entityItem, data){
        if(Utils.isObject(stageOrObject)){
            this.stage = stageOrObject.stage;
            this.increment = stageOrObject.increment;
            this.percentage = stageOrObject.percentage;
            this.entityType = stageOrObject.entityType;
            this.entityObject = stageOrObject.entityObject;
            this.entityItem = stageOrObject.entityItem;
            this.data = stageOrObject.data;
        } else {
            increment = (Utils.isNull(increment)) ? 0 : increment;
            percentage = (Utils.isNull(percentage)) ? 0 : percentage;
            this.stage = stageOrObject;
            this.increment = increment;
            this.percentage = MathUtils.round(percentage, 2);
            this.entityType = entityType;
            this.entityObject = entityObject;
            this.entityItem = entityItem;
            this.data = data
        }
    }

    isOnPrepareStage(){
        return this.stage === ProgressStages.PREPARE;
    }

    isOnCreateProjectStage(){
        return this.stage === ProgressStages.CREATE_PROJECT;
    }

    isOnRetrieveStage(){
        return this.stage === ProgressStages.RETRIEVE;
    }

    isOnProcessStage(){
        return this.stage === ProgressStages.PROCESS;
    }

    isOnCleaningStage(){
        return this.stage === ProgressStages.CLEANING;
    }
    
    isOnLocalLoadingStage(){
        return this.stage === ProgressStages.LOADING_LOCAL;
    }
    
    isOnOrgLoadingStage(){
        return this.stage === ProgressStages.LOADING_ORG;
    }

    isOnCopyDataStage(){
        return this.stage === ProgressStages.COPY_DATA;
    }

    isOnCopyFileStage(){
        return this.stage === ProgressStages.COPY_FILE;
    }

    isOnCompressFileStage(){
        return this.stage === ProgressStages.COMPRESS_FILE;
    }

    isOnBeforeDownloadStage(){
        return this.stage === ProgressStages.BEFORE_DOWNLOAD;
    }

    isOnAfterDownloadStage(){
        return this.stage === ProgressStages.AFTER_DOWNLOAD;
    }

    isOnStartTypeStage(){
        return this.stage === ProgressStages.START_TYPE;
    }

    isOnStartObjectStage(){
        return this.stage === ProgressStages.START_OBJECT;
    }

    isOnStartItemStage(){
        return this.stage === ProgressStages.START_ITEM;
    }

    isOnEndTypeStage(){
        return this.stage === ProgressStages.END_TYPE;
    }

    isOnEndObjectStage(){
        return this.stage === ProgressStages.END_OBJECT;
    }

    isOnEndItemStage(){
        return this.stage === ProgressStages.END_ITEM;
    }

    isOnStartErrorStage(){
        return this.stage === ProgressStages.START_ERROR;
    }

    isOnEndErrorStage(){
        return this.stage === ProgressStages.END_ERROR;
    }

    isOnFileErrorStage(){
        return this.stage === ProgressStages.FILE_ERROR;
    }


}
module.exports = ProgressStatus;