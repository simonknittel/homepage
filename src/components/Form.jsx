import React, { useState } from "react"

import "./Form.scss"

export default function Form({}) {
  const action = 'https://nightly.simonknittel.de/api/form-submit'

  const [ emailAddress, setEmailAddress ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ body, setBody ] = useState('')

  const [ disabled, setDisabled ] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()

    const postBody = {
      baseId: 'appTy7Hm7Q5EogPtd',
      tableName: 'Form 1',
      fields: {
        'Email address': emailAddress,
        'Subject': subject,
        'Body': body
      }
    }

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: JSON.stringify(postBody),
        credentials: 'omit',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      })

      if (!response.ok) {
        throw response
      }

      setEmailAddress('')
      setSubject('')
      setBody('')
    } catch (error) {
      console.error(error)
    }
  }

  function onReset(e) {
    e.preventDefault()

    setEmailAddress('')
    setSubject('')
    setBody('')
  }

  return <form className="Form" onSubmit={ onSubmit } onReset={ onReset }>
    <h4 class="Form__heading">Contact form</h4>

    <label for="form1_email_address">Email address</label>
    <input id="form1_email_address" type="email" value={ emailAddress } onChange={ e => setEmailAddress(e.target.value) } />

    <label for="form1_subject">Subject</label>
    <input id="form1_subject" type="text" value={ subject } onChange={ e => setSubject(e.target.value) } />

    <label for="form1_body">Body</label>
    <textarea id="form1_body" value={ body } onChange={ e => setBody(e.target.value) } required rows="10" />

    <div className="Form__buttons">
      <button className="Form__submit" type="submit" disabled={ disabled }>Submit</button>
      <button className="Form__reset" type="reset" disabled={ disabled }>Clear</button>
    </div>
  </form>
}
