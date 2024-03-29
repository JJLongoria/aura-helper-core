export const NotIncludedMetadata: NotIncludedMetadataDef = {
    StandardValueSet: {
        xmlName: "StandardValueSet",
        suffix: "standardValueSet",
        directoryName: "standardValueSets",
        elements: [
            "AccountContactMultiRoles",
            "AccountContactRole",
            "AccountOwnership",
            "AccountRating",
            "AccountType",
            "AssetStatus",
            "CampaignMemberStatus",
            "CampaignStatus",
            "CampaignType",
            "CaseContactRole",
            "CaseOrigin",
            "CasePriority",
            "CaseReason",
            "CaseStatus",
            "CaseType",
            "ContactRole",
            "ContractContactRole",
            "ContractStatus",
            "EventSubject",
            "EventType",
            "FiscalYearPeriodName",
            "FiscalYearPeriodPrefix",
            "FiscalYearQuarterName",
            "FiscalYearQuarterPrefix",
            "IdeaMultiCategory",
            "IdeaStatus",
            "Industry",
            "LeadSource",
            "LeadStatus",
            "OpportunityCompetitor",
            "OpportunityStage",
            "OpportunityType",
            "OrderStatus",
            "OrderType",
            "PartnerRole",
            "Product2Family",
            "QuickTextCategory",
            "QuickTextChannel",
            "QuoteStatus",
            "SalesTeamRole",
            "Salutation",
            "SocialPostClassification",
            "SocialPostEngagementLevel",
            "SocialPostReviewedStatus",
            "SolutionStatus",
            "TaskPriority",
            "TaskStatus",
            "TaskSubject",
            "TaskType",
            "WorkOrderLineItemStatus",
            "WorkOrderPriority",
            "WorkOrderStatus",
        ]
    }
};

export interface NotIncludedMetadataDef {
    StandardValueSet: {
        xmlName: string;
        suffix: string;
        directoryName: string;
        elements: string[];
    }
};