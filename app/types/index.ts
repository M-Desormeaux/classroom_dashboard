export interface Student {
  studentID: string;
  name: string;
  avg: number;
}

export interface Assignment {
  assignmentID: string;
  classID: string;
  gradeID?: number;
  label?: string;
  desc?: string;
  avg: number;
  high?: number;
  low?: number;
}

export interface Grades extends Student {
  assignments: Assignment[];
}

export interface Schedule {
  teacherID: string;
  name?: string | undefined;
  label: string;
  start: string;
  end: string;
  avg: number;
  high: number;
  low: number;
}

export type ToDo = any;
