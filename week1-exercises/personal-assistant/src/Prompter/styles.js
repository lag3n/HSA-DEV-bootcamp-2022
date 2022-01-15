import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  background-color: lightcoral;
  font-family: 'Times New Roman';
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 500px;
  margin-top: 0%;
  margin-left: 25%;
  margin-right: 25%;
  transition: 1s ease;
`

export const Text = styled.h2`
  color: white;
  font-family: 'Times New Roman';
  font-size: 15px;
  text-align: center;
  letter-spacing: auto;
`

export const Text1 = styled.h2`
  color: white;
  text-align: center;
  font-family: 'Courier New';
  font-size: 13px;
  letter-spacing: auto;
  text-align: left;
`

export const Input = styled.input`
  max-width:200px;
  margin-left: 43%;
`

export const Input1 = styled.input`
  max-width:200px;
  margin-left:36%;
`

export const Button = styled.button`
  background: lightskyblue;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  max-width:75px;
  max-height: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: -110%;
`

export const Button1 = styled.button`
  background: lightskyblue;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  max-width:75px;
  max-height: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right:10%;
`