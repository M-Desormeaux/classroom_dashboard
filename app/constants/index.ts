import { Grades, Student } from "~/types";

export const DEFAULT_STUDENTS: Student[] = [
  { name: "John Smith", avg: 73.8, studentId: "0afw3-alfeu3788sdf2" },
  { name: "Sarah Johnson", avg: 77.8, studentId: "1arw1-alfeu3788sdf2" },
  { name: "Michael Williams", avg: 67.5, studentId: "2fkm4-alfeu3788sdf2" },
  { name: "Jessica Brown", avg: 70.2, studentId: "3glm0-alfeu3788sdf2" },
  { name: "David Miller", avg: 75.5, studentId: "4iaf5-alfeu3788sdf2" },
  { name: "Ashley Thomas", avg: 68.3, studentId: "5ghb9-alfeu3788sdf2" },
  { name: "Christopher Anderson", avg: 73.3, studentId: "6gif3-alfeu3788sdf2" },
  { name: "Brittany White", avg: 76.5, studentId: "7ohd-alfeu3788sdf2" },
  { name: "Matthieu Harris", avg: 82.7, studentId: "8zje5-alfeu3788sdf2" },
  { name: "Daniel Martin", avg: 84.7, studentId: "9lhf2-alfeu3788sdf2" },
];

export const DEFAULT_STUDENT_GRADES: Grades[] = [
  {
    name: "John Smith",
    avg: 73.8,
    studentId: "0afw3-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 87 },
      { assignmentId: "assignment-two", label: "Two", avg: 90 },
      { assignmentId: "assignment-three", label: "Three", avg: 76 },
      { assignmentId: "assignment-four", label: "Four", avg: 99 },
      { assignmentId: "assignment-five", label: "Five", avg: 91 },
    ],
  },
  {
    name: "Sarah Johnson",
    avg: 77.8,
    studentId: "1arw1-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 60 },
      { assignmentId: "assignment-two", label: "Two", avg: 88 },
      { assignmentId: "assignment-three", label: "Three", avg: 92 },
      { assignmentId: "assignment-four", label: "Four", avg: 79 },
      { assignmentId: "assignment-five", label: "Five", avg: 63 },
    ],
  },
  {
    name: "Michael Williams",
    avg: 67.5,
    studentId: "2fkm4-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 92 },
      { assignmentId: "assignment-two", label: "Two", avg: 97 },
      { assignmentId: "assignment-three", label: "Three", avg: 68 },
      { assignmentId: "assignment-four", label: "Four", avg: 0 },
      { assignmentId: "assignment-five", label: "Five", avg: 83 },
    ],
  },
  {
    name: "Jessica Brown",
    avg: 70.2,
    studentId: "3glm0-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 96 },
      { assignmentId: "assignment-two", label: "Two", avg: 70 },
      { assignmentId: "assignment-three", label: "Three", avg: 92 },
      { assignmentId: "assignment-four", label: "Four", avg: 84 },
      { assignmentId: "assignment-five", label: "Five", avg: 0 },
    ],
  },
  {
    name: "David Miller",
    avg: 75.5,
    studentId: "4iaf5-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 98 },
      { assignmentId: "assignment-two", label: "Two", avg: 70 },
      { assignmentId: "assignment-three", label: "Three", avg: 62 },
      { assignmentId: "assignment-four", label: "Four", avg: 73 },
      { assignmentId: "assignment-five", label: "Five", avg: 67 },
    ],
  },
  {
    name: "Ashley Thomas",
    avg: 68.3,
    studentId: "5ghb9-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 69 },
      { assignmentId: "assignment-two", label: "Two", avg: 78 },
      { assignmentId: "assignment-three", label: "Three", avg: 97 },
      { assignmentId: "assignment-four", label: "Four", avg: 82 },
      { assignmentId: "assignment-five", label: "Five", avg: 84 },
    ],
  },
  {
    name: "Christopher Anderson",
    avg: 73.3,
    studentId: "6gif3-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 77 },
      { assignmentId: "assignment-two", label: "Two", avg: 93 },
      { assignmentId: "assignment-three", label: "Three", avg: 65 },
      { assignmentId: "assignment-four", label: "Four", avg: 60 },
      { assignmentId: "assignment-five", label: "Five", avg: 75 },
    ],
  },
  {
    name: "Brittany White",
    avg: 76.5,
    studentId: "7ohd-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 95 },
      { assignmentId: "assignment-two", label: "Two", avg: 69 },
      { assignmentId: "assignment-three", label: "Three", avg: 85 },
      { assignmentId: "assignment-four", label: "Four", avg: 79 },
      { assignmentId: "assignment-five", label: "Five", avg: 63 },
    ],
  },
  {
    name: "Matthieu Harris",
    avg: 82.7,
    studentId: "8zje5-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 78 },
      { assignmentId: "assignment-two", label: "Two", avg: 95 },
      { assignmentId: "assignment-three", label: "Three", avg: 83 },
      { assignmentId: "assignment-four", label: "Four", avg: 85 },
      { assignmentId: "assignment-five", label: "Five", avg: 66 },
    ],
  },
  {
    name: "Daniel Martin",
    avg: 84.7,
    studentId: "9lhf2-alfeu3788sdf2",
    assignments: [
      { assignmentId: "assignment-one", label: "One", avg: 100 },
      { assignmentId: "assignment-two", label: "Two", avg: 92 },
      { assignmentId: "assignment-three", label: "Three", avg: 70 },
      { assignmentId: "assignment-four", label: "Four", avg: 84 },
      { assignmentId: "assignment-five", label: "Five", avg: 95 },
    ],
  },
];

export const DEFAULT_ASSIGNMENT_GRADES = [
  {
    assignmentId: "assignment-one",
    label: "One",
    avg: 85.2,
    high: 100,
    low: 60,
    desc: "This assignment tests for understanding of the course material",
  },
  {
    assignmentId: "assignment-two",
    label: "Two",
    avg: 84.2,
    high: 97,
    low: 69,
    desc: "This assignment tests for understanding of the course material",
  },
  {
    assignmentId: "assignment-three",
    label: "Three",
    avg: 79.0,
    high: 97,
    low: 62,
    desc: "This assignment tests for understanding of the course material",
  },
  {
    assignmentId: "assignment-four",
    label: "Four",
    avg: 72.5,
    high: 99,
    low: 60,
    desc: "This assignment tests for understanding of the course material",
  },
  {
    assignmentId: "assignment-five",
    label: "Five",
    avg: 68.7,
    high: 95,
    low: 63,
    desc: "This assignment tests for understanding of the course material",
  },
];

export const getAssignment = (assignmentId: string) => {
  const assignment = DEFAULT_ASSIGNMENT_GRADES.find(
    (assignment) => assignment.assignmentId === assignmentId,
  );

  const students = DEFAULT_STUDENT_GRADES.map((student) => {
    const assignments = student.assignments.filter(
      (assignment) => assignment.assignmentId === assignmentId,
    );

    return {
      ...student,
      avg: assignments[0].avg,
      assignments: null,
    };
  });

  return {
    students,
    assignmentAvg: assignment?.avg,
    assignmentLabel: assignment?.label,
  };
};

export const DEFAULT_SCHEDULE = [
  {
    classId: "english",
    label: "English 101",
    size: "5",
    start: "8:00",
    end: "10:00",
    high: 89,
    low: 70,
    avg: 78.2,
  },
  {
    classId: "science",
    label: "Science 101",
    size: "5",
    start: "8:30",
    end: "10:30",
    high: 80,
    low: 70,
    avg: 75.4,
  },
  {
    classId: "math",
    label: "Math 101",
    size: "5",
    start: "10:15",
    end: "12:15",
    high: 100,
    low: 72,
    avg: 92.3,
  },
  {
    classId: "history",
    label: "History 101",
    size: "5",
    start: "11:00",
    end: "13:30",
    high: 80,
    low: 70,
    avg: 75.4,
  },
];
