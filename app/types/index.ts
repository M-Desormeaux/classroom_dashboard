export interface Student {
  studentID: string;
  name: string;
  avg: number | null;
}

export interface Assignment {
  assignmentID: string;
  label: string;
  classID?: string;
  desc?: string;
  avg: number | null;
  high?: number | null;
  low?: number | null;
}

export interface Grades extends Student {
  assignments: Assignment[];
}

export interface Schedule {
  label: string;
  size: number;
  start: string;
  end: string;
  avg: number | null;
  high: number | null;
  low: number | null;
}
