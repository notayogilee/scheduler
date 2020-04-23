import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const setDay = day => setState({ ...state, day });

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
      .catch(err => console.log(err))
  }, [])


  function updateSpots(id, interview) {

    const days = [...state.days];
    // eslint-disable-next-line
    const getDayOfInterview = days.filter(day => {
      for (let appointment of day.appointments) {
        if (appointment === id) {
          return day;
        }
      }
    })

    const getDayOfInterviewIndex = days.indexOf(getDayOfInterview);

    if (interview) {
      getDayOfInterview[0].spots -= 1;
    } else {
      getDayOfInterview[0].spots += 1
    }
    days[getDayOfInterviewIndex] = getDayOfInterview;

    return days;
  }

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const newDays = updateSpots(id, interview);
        setState({ ...state, days: newDays, appointments })
      });

  }

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const interview = appointment.interview;

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`, { interview })
      .then(() => {
        const newDays = updateSpots(id, interview);
        setState({ ...state, days: newDays, appointments })
      })
  }
  return { state, setDay, bookInterview, cancelInterview };
}



