

export function getAppointmentsForDay(state, day) {

  const appointmentsForDay = [];

  //finds matching day
  const filteredDays = state.days.filter(assignedDay => (assignedDay.name === day));

  //added beceause cannot use empty array in next part
  if (filteredDays.length > 0) {

    //just to make things easier -target the appointments
    const filteredDaysAppointments = filteredDays[0].appointments;

    console.log('filtered Days App', filteredDaysAppointments)
    console.log('state days appp', state.appointments)

    //loop through array
    for (let filteredDaysAppointment of filteredDaysAppointments) {
      //loop through object
      for (let stateAppointment in state.appointments) {
        //state.appointments is a string
        if (parseInt(stateAppointment) === filteredDaysAppointment) {
          //when id's match push the object into array
          appointmentsForDay.push(state.appointments[stateAppointment])

        }
      }
    }
  }

  return appointmentsForDay;
};

export function getInterview(state, interview) {

  let newInterviewObject = {}

  if (interview) {
    for (let stateInterviewer in state.interviewers) {

      if (parseInt(stateInterviewer) === interview.interviewer) {

        newInterviewObject.student = interview.student;
        newInterviewObject.interviewer = state.interviewers[stateInterviewer];
      }
    }

    return newInterviewObject;
  }
  return null;
};

export function getInterviewersForDay(state, day) {

  const interviewersForDay = [];

  const filteredDays = state.days.filter(assignedDay => (assignedDay.name === day));

  if (filteredDays.length > 0) {

    const filteredDaysInterviewers = filteredDays[0].interviewers;

    for (let filteredDaysInterviewer of filteredDaysInterviewers) {

      for (let stateInterviewer in state.interviewers) {

        if (parseInt(stateInterviewer) === filteredDaysInterviewer) {

          interviewersForDay.push(state.interviewers[stateInterviewer])

        }
      }
    }
  }
  return interviewersForDay;
};
