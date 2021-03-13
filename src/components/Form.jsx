import React, { useState } from "react"

import "./Form.scss"

export default function Form({ heading, baseId, tableName, fields }) {
  const action = 'https://nightly.simonknittel.de/api/form-submit'
  const [ disabled, setDisabled ] = useState(false)

  const initialStates = {}
  Object.keys(fields).forEach(key => initialStates[key] = '')
  const [ states, setStates ] = useState(initialStates)

  function resetStates() {
    setStates(initialStates)
  }

  function getPostBodyFields() {
    const postBodyFields = {
      'Origin': window.location.href
    }

    for (const [ key, value ] of Object.entries(states)) {
      postBodyFields[key] = value
    }

    return postBodyFields
  }

  async function onSubmit(e) {
    e.preventDefault()

    setDisabled(true)

    const postBody = {
      baseId,
      tableName,
      fields: getPostBodyFields()
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

      resetStates()
    } catch (error) {
      console.error(error)
    }

    setDisabled(false)
  }

  function onReset(e) {
    e.preventDefault()
    resetStates()
  }

  function onChange(e, key) {
    setStates({
      ...states,
      [key]: e.target.value
    })
  }

  return <form className="Form" onSubmit={ onSubmit } onReset={ onReset }>
    <h4 className="Form__heading">{ heading }</h4>

    {
      Object.keys(fields).map(key => {
        const field = fields[key]

        let htmlId = `${ tableName }_${ key }`
        htmlId = htmlId.replace(/ /g, '')

        switch (field.type) {
          case 'text':
          case 'email':
          case 'url':
            return <div key={ key }>
              <label className="Form__label" htmlFor={ htmlId }>
                { field.label }
                { field.required ? <span className="Form__required">(required)</span> : null }
              </label>

              <input
                id={ htmlId }
                type={ field.type }
                value={ states[key] }
                onChange={ (e) => onChange(e, key) }
                required={ field.required || false }
              />
            </div>

          case 'textarea':
            return <div key={ key }>
              <label className="Form__label" htmlFor={ htmlId }>
                { field.label }
                { field.required ? <span className="Form__required">(required)</span> : null }
              </label>

              <textarea
                id={ htmlId }
                value={ states[key] }
                onChange={ (e) => onChange(e, key) }
                required={ field.required || false }
                rows="10"
              />
            </div>

          default:
            return null
        }
      })
    }

    <div className="Form__buttons">
      <button className="Form__submit" type="submit" disabled={ disabled }>Submit</button>
      <button className="Form__reset" type="reset" disabled={ disabled }>Clear</button>
    </div>
  </form>
}
