import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  background-color: lightcoral;
  font-family: 'Times New Roman';
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 500px;
  margin-top: 5%;
  margin-left: 25%;
  margin-right: 25%;
  transition: 1s ease;
`

export const Text = styled.h1`
  color: white;
  font: 'Times New Roman';
  font-size: 20px;
  text-align: center;
  letter-spacing: auto;
`

export const Input = styled.input`
  border-radius: 3px;
  height: 2em;
  padding: 0.5em 1em;
  margin-top: 0.5em;
  width: 50%;
`

export const Button = styled.button`
  border-radius: 3px;
  margin-top: 1em;
  padding: 0.5em 1em;
  height: 2em;
  width: 50%;
  background-color: lightcoral;
  font-size: 1em;
  color: white;
`