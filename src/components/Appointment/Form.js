import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props) {

  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const [name, setName] = useState(props.name || '')
  const [error, setError] = useState('');

  function save() {
    validate(name);
  }

  function reset() {
    setName('');
    setInterviewer(null);
  }

  function cancel() {
    reset();
    props.onCancel()
  }

  function validate() {
    if (name === '') {
      setError('Student name cannot be blank');
      return;
    } else if (!interviewer) {
      setError('Please select an interviewer');
      return;
    }
    setError('');
    props.onSave(name, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input data-testid="student-name-input"
            className="appointment__create-input text--semi-bold"
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </form>

        <section className="appointment__validation">{error}</section>

        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={save}>Save</Button>
        </section>
      </section>
    </main>
  )
}