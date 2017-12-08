import { Student } from './model/student';
import { Employee } from './model/employee';
import { ADD_STUDENT, REMOVE_ALL_STUDENTS, REMOVE_STUDENT, TOGGLE_STUDENT_STATUS, TOGGLE_EMPLOYEE_STATUS } from './actions';
import { ADD_EMPLOYEE, REMOVE_ALL_EMPLOYEES, REMOVE_EMPLOYEE } from './actions';
import { start } from 'repl';

export interface IAppState {
    students: Student[];
    employees: Employee[];
}

export const INITIAL_STATE: IAppState = {
    students: [
        {
            id: 1,
            name: 'Sample Demo',
            age: 34,
            isActive: false
        }
    ],
    employees: [{
        id: 1,
        name: 'Employee 1',
        age: 35,
        isActive: false
    }]
};

export function rootReducer(state, action) {
    switch (action.type) {
        case TOGGLE_STUDENT_STATUS:
            const student = state.students.find(t => t.id === action.id);
            const student_index = state.students.indexOf(student);
            return Object.assign({}, state, {
                students: [
                    ...state.students.slice(0, student_index),
                    Object.assign({}, student, {
                        isActive: !student.isActive
                    }),
                    ...state.students.slice(student_index + 1)
                ]
            });

        case TOGGLE_EMPLOYEE_STATUS:
            const employee = state.employees.find(t => t.id === action.id);
            const employee_index = state.employees.indexOf(employee);
            return Object.assign({}, state, {
                employees: [
                    ...state.employees.slice(0, employee_index),
                    Object.assign({}, employee, {
                        isActive: !employee.isActive
                    }),
                    ...state.employees.slice(employee_index + 1)
                ]
            });

        case ADD_STUDENT:
            action.student.id = state.students.length + 1;
            return Object.assign({},
                state, {
                    students: state.students.concat(
                        Object.assign({}, action.student))
                });

        case ADD_EMPLOYEE:
            action.employee.id = state.employees.length + 1;
            return Object.assign({}, state, {
                employees: state.employees.concat(Object.assign({}, action.employee))
            });

        case REMOVE_STUDENT:
            console.log(action.id);
            return Object.assign({}, state, {
                students: state.students.filter(student => student.id !== action.id)
            });

        case REMOVE_EMPLOYEE:
            return Object.assign({}, state, {
                employees: state.employees.filter(employee => employee.id !== action.id)
            });

        case REMOVE_ALL_STUDENTS:
            return Object.assign({}, state,
                {
                    students: []
                });

        case REMOVE_ALL_EMPLOYEES:
            return Object.assign({}, state,
                {
                    employees: []
                });

    }
    return state;
}
