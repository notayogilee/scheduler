

export function getAppointmentsForDay(state, day) {

  const appointmentsForDay = [];

  //finds matching day
  const filteredDays = state.days.filter(assignedDay => (assignedDay.name === day));

  //added beceause cannot use empty array in next part
  if (filteredDays.length > 0) {

    //just to make things easier -target the appointments
    const filteredDaysAppointments = filteredDays[0].appointments;

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
}