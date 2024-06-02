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
_id: assignment._id,
course: assignment.course,
title: "New Title",
description: "New Description",
points: "100",
due_date: "2024-06-07",
available_date: "2024-06-01",
until: "2024-06-14",
editing: false,
};
state.assignments = [...state.assignments, newModule];
},
deleteAssignment: (state, { payload: assignmentId }) => {
state.assignments = state.assignments.filter((m) => m._id !== assignmentId);
},
updateAssignment: (state, { payload: assignment }) => {
state.assignments = state.assignments.map((m) =>
m._id === assignment._id ? assignment : m
);
},
editAssignment: (state, { payload: assignmentId }) => {
state.assignments = state.assignments.map((m) =>
m._id === assignmentId ? { ...m, editing: true } : m
);
},
},
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;