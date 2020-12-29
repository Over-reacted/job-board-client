import React, { useState } from 'react'
import styled from 'styled-components'

import { Container, Label, RequiredIndicator } from '../index'

const InputFileUpload = styled.input.attrs({
  type: 'file',
})`
  opacity: 0;
  min-height: 14rem;
  max-width: 89rem;
  cursor: pointer;
`

const InputFileUploadWrapper = styled.div`
  font-size: 0.95rem;
  padding: 1.6rem 1.2rem 1.6rem 1.2rem;
  cursor: auto;
  border: 0.3rem solid rgba(144, 146, 148, 0.2);
  margin: 0 0 0.5rem 0;
  background-color: #f8f9fa;
  outline: 0.2rem none rgba(144, 146, 148, 0.2);

  position: relative;

  &::after {
    content: 'Click or drag your photo here to upload';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.75rem;
    pointer-events: none;
  }
`

export const ImgUpload = ({ title, isRequired, inputText }) => {
  const [file, setFile] = useState('')

  function handleUpload(event) {
    setFile(event.target.files[0])
  }

  return (
    <Container>
      <Label>
        {title} {isRequired && <RequiredIndicator />}
      </Label>
      <InputFileUploadWrapper>
        <InputFileUpload onChange={handleUpload} />
      </InputFileUploadWrapper>
      <p>{inputText}</p>
    </Container>
  )
}
