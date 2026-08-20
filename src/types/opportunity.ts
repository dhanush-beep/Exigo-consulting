export type MandateType = "BUY-SIDE MANDATE" | "SELL-SIDE MANDATE" | "STRATEGIC INVESTMENT" | "M&A ADVISORY";

export interface AcquirerSnapshot {
  acquirerType: string;
  headquarters: string;
  sectorFocus: string;
  trackRecord: string;
}

export interface StrategicRationale {
  objective: string;
  description: string;
}

export interface TargetCriteria {
  sector: string;
  preferredSubVerticals: string[];
  preferredClientIndustries: string[];
  preferredGeography: string;
  deliveryModel: string;
}

export interface FinancialParameters {
  revenueRange: string;
  ebitdaTarget: string;
  headcountRange: string;
  maxClientConcentration: string;
}

export interface DealStructure {
  preferredStake: string;
  considerationMix: string;
  ticketSize: string;
  fundingSource: string;
  targetTimeline: string;
}

export interface PostAcquisitionApproach {
  integration: string;
  brand: string;
  managementRetention: string;
  employeeRetention: string;
}

export interface OpportunityMandate {
  id: string;
  code: string; // e.g. "PROJECT HORIZON"
  title: string;
  type: MandateType;
  industry: string;
  description: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  badges: string[]; // e.g. ["STRATEGIC ACQUISITION", "AI-DRIVEN FOCUS", "GROWTH PLATFORM", "PARTNER FOR GROWTH"]
  
  // Detailed Teaser Fields (Image 1 Structure)
  acquirerSnapshot: AcquirerSnapshot;
  strategicRationale: StrategicRationale;
  targetCriteria: TargetCriteria;
  financialParameters: FinancialParameters;
  dealStructure: DealStructure;
  postAcquisitionApproach: PostAcquisitionApproach;
  processSteps: string[];
  keyHighlights: string[];
  activelyPrioritised: string[];
  toBeAvoided: string[];
  
  advisorName: string;
  advisorRole: string;
  advisorContact: string;
  advisorEmail: string;
}
