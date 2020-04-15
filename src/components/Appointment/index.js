import React, { Fragment } from 'react';
import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';




export default function Appointment(props) {

  const display = props.interview
    ? <Show
      interviewer={props.interview.interviewer}
      student={props.interview.student}
    />
    : <Empty />

  return (

    <article className="appointment" >
      <Fragment>
        <Header time={props.time}>
        </Header>
        {display}
      </Fragment>
    </article>

  );

}
