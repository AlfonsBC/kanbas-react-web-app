import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
initialState,
reducers: {
addAssignment: (state, { payload: assignment }) => {
const newModule: any = {
_id: new Date().getTime().toString(),
title: assignment.title,
course: assignment.course,
description: assignment.description,
points: 100,
due_date: new Date(),
available_date: new Date(),
until: new Date(),
};
state.assignments = [...state.assignments, newModule];
},
deleteAssignment: (state, { payload: assignmentId }) => {
state.assignments = state.assignments.filter((m) => m._id !== assignmentId);
},
updateModule: (state, { payload: assignment }) => {
state.assignments = state.assignments.map((m) =>
m._id === assignment._id ? assignment : m
);
},
editModule: (state, { payload: assignmentId }) => {
state.assignments = state.assignments.map((m) =>
m._id === assignmentId ? { ...m, editing: true } : m
);
},
},
});
export const { addAssignment, deleteAssignment, updateModule, editModule } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;