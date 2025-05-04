// types/debate.ts

export interface DebatePayload {
    title: string;
    description: string;
    format: string;
    sub_format: string;
    scheduled_start: string;
    scheduled_end: string;
    topic_id: number;
    participant_limit: number;
    allow_audience_questions: boolean;
    allow_audience_responses: boolean;
    enforce_timed_responses: boolean;
    is_recurring: boolean;
    privacy_setting: 'public' | 'private';
    require_moderator_approval: boolean;
    require_identity_verification: boolean;
    rules: Record<string, any>;
    skill_level: 'beginner' | 'intermediate' | 'advanced';
    participant_ids: number[];
    resources: Resource[];
  }
  
  export interface Resource {
    type: 'link' | 'file' | 'text';
    url?: string;
    content?: string;
  }
  