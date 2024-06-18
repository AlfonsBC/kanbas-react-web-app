import { createSlice } from "@reduxjs/toolkit";
const initialState = {
assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
initialState,
reducers: {

setAssignments: (state, action) => {
    state.assignments = action.payload;
},
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
state.assignments = [...state.assignments, newModule] as any;
},
deleteAssignment: (state, { payload: assignmentId }) => {
state.assignments = state.assignments.filter((m: any) => m._id !== assignmentId);
},
updateAssignment: (state, { payload: assignment }) => {
state.assignments = state.assignments.map((m:any) =>
m._id === assignment._id ? assignment : m
)  as any;
},
editAssignment: (state, { payload: assignmentId }) => {
state.assignments = state.assignments.map((m:any) =>
m._id === assignmentId ? { ...m, editing: true } : m
) as any;
},
},
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments} =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;