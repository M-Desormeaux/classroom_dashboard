export interface Student {
  studentId: string;
  name: string;
  avg: number | null;
}

export interface Assignment {
  assignmentId: string;
  label: string;
  subject?: string;
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
  size: string;
  start: string;
  end: string;
  avg: number | null;
  high: number | null;
  low: number | null;
}
