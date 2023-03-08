import initialReports from '../data/initial-reports.json';

const LOAD_REPORTS = "report/loadreports";
const DELETE_REPORTS = "report/deletereports"

const copy_of_initialReports = [...initialReports];
const normalized_report = {};
copy_of_initialReports.forEach( (obj) => {
  normalized_report[obj.id] = obj;
})

export const loadReports = () => {
  return {
    type: LOAD_REPORTS,
    normalized_report
  }
}

export const deleteReports = (report) => {
  return {
    type: DELETE_REPORTS,
    report
  }
}

const initialState = {...normalized_report};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REPORTS:
      return null
    case DELETE_REPORTS:
      const newObj = {...state};
      delete newObj[action.report.id];
      return newObj
    default:
      return state;
  }
}

export default reportReducer;
