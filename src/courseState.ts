export const stages = ['pre','intro','navigation','praxis','challenge'] as const
export type Stage = typeof stages[number]
export type Assessment = {account:string;repository:string;browser:string;interest:string;score:number}
export type CourseState = {assessment:Assessment|null;passed:Stage[];scores:Partial<Record<Stage,number>>}
export const initialState:CourseState={assessment:null,passed:[],scores:{}}
export function canOpen(state:CourseState,stage:Stage){const i=stages.indexOf(stage);return i===0||stages.slice(0,i).every(s=>state.passed.includes(s))}
export function currentStage(state:CourseState):Stage|null{return stages.find(s=>!state.passed.includes(s))??null}
export function assess(input:Omit<Assessment,'score'>):Assessment{return {...input,score:Number(input.repository==='project')+Number(input.browser==='yes')}}
export function finishAssessment(state:CourseState,value:Assessment):CourseState{if(state.assessment)return state;return {...state,assessment:value,passed:['pre'],scores:{pre:value.score*50}}}
export function passStage(state:CourseState,stage:Stage,score:number):CourseState{if(stage==='pre'||!canOpen(state,stage)||!Number.isFinite(score)||score>100||score<(stage==='challenge'?80:100))return state;return {...state,passed:stages.filter(s=>s===stage||state.passed.includes(s)),scores:{...state.scores,[stage]:Math.max(score,state.scores[stage]??0)}}}
export function restore(raw:string|null):CourseState{try{const v=JSON.parse(raw??'null');if(!v?.assessment||!Array.isArray(v.passed))return initialState;const a=v.assessment;if(typeof a.account!=='string'||typeof a.repository!=='string'||typeof a.browser!=='string'||typeof a.interest!=='string')return initialState;let state=finishAssessment(initialState,assess({account:a.account,repository:a.repository,browser:a.browser,interest:a.interest}));for(const s of stages.slice(1)){if(!v.passed.includes(s))break;const score=v.scores?.[s];state=passStage(state,s,score);if(!state.passed.includes(s))break}return state}catch{return initialState}}
export function nextPath(state:CourseState){const stage=currentStage(state);return stage===null?'/abschluss':stage==='pre'?'/':'/'+stage}
export function points(state:CourseState){return stages.slice(1).reduce((sum,s)=>sum+(state.scores[s]??0),0)}
