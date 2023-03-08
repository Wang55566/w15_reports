import initialReports from '../data/initial-reports.json';

const LOAD_REPORTS = "report/loadreports";

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



const initialState = {...normalized_report};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REPORTS:
      return null
    default:
      return state;
  }
}

export default reportReducer;
