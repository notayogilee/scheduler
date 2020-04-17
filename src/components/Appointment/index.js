import React, { Fragment } from 'react';
import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import Confirm from 'components/Appointment/Confirm';
import Error from 'components/Appointment/Error';
import useVisulaMode from '../../hooks/useVisualMode';


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  console.log('Appp props', props)


  const { mode, transition, back } = useVisulaMode(
    props.interview ? SHOW : EMPTY
  );

  function onAdd() {
    transition(CREATE);
  }

  function onCancel() {
    back();
  }

  function delayShow() {
    transition(SHOW);
  }

  function delayEmpty() {
    transition(EMPTY);
  }

  function save(name, interviewer) {

    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => setTimeout(delayShow, 1000))
      .catch(error => transition(ERROR_SAVE, true))

  }

  function confirm() {
    transition(CONFIRM);
  }

  function destroy(event) {
    transition(DELETING, true);

    props
      .cancelInterview(props.id)
      .then(() => setTimeout(delayEmpty, 1000))
      .catch(error => transition(ERROR_DELETE, true))

  }

  function edit() {
    transition(EDIT);
  }

  return (

    <article className="appointment" >
      <Fragment>
        <Header time={props.time}>
        </Header>
        {mode === EMPTY && <Empty onAdd={onAdd} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={confirm}
            onEdit={edit}
          />
        )}
        {mode === CREATE &&
          <Form
            interviewers={props.interviewers}
            onCancel={onCancel}
            onSave={save}
          />}
        {mode === SAVING &&
          <Status
            message={"Saving"}
          />}
        {mode === CONFIRM &&
          <Confirm
            message={"Delete the appointment?"}
            onConfirm={destroy}
            onCancel={onCancel}
          />
        }
        {mode === DELETING &&
          <Status
            message={"Deleting"}
          />}
        {mode === EDIT &&
          <Form
            name={props.interview.student}
            interviewers={props.interviewers}
            interviewer={props.interview.interviewer.id}
            onSave={save}
            onCancel={onCancel}
          />
        }
        {mode === ERROR_SAVE &&
          <Error
            message={"Could not save appointment"}
            onClose={onCancel}
          />
        }
        {mode === ERROR_DELETE &&
          <Error
            message={"Could not delete appointment"}
            onClose={onCancel}
          />
        }
      </Fragment>
    </article>
  );
}
