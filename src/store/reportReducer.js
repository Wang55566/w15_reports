import initialReports from '../data/initial-reports.json';

const DELETE_REPORTS = "report/deletereports"
const CREATE_REPORT = "report/createreport";

const copy_of_initialReports = [...initialReports];
const normalized_report = {};
copy_of_initialReports.forEach( (obj) => {
  normalized_report[obj.id] = obj;
})

export const deleteReports = (report) => {
  return {
    type: DELETE_REPORTS,
    report
  }
}

export const createReport = (report) => {
  return {
    type: CREATE_REPORT,
    report
  }
}

const initialState = {...normalized_report};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_REPORTS:
      const obj = {...state};
      delete obj[action.report.id];
      return obj
    case CREATE_REPORT:
      const obj2 = {...state};
      obj2[action.report.id] = action.report;
      return obj2;
    default:
      return state;
  }
}

export default reportReducer;
