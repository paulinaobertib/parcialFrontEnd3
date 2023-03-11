import React from 'react'
import { ContainerUser, TitleUser, Information, UserInfo } from '../styles/StyledComponent'
import '../styles/styles.css';

const User = ({ name, entrada, principal, postre }) => {
  return (
    <ContainerUser>
      <TitleUser>¡Hola <span style={{textShadow: "5px 4px 3px whitesmoke"}}>foodlover!</span> 🙌</TitleUser>
      <p style={{fontSize: "20px"}}>A continuacion, la información brindada:</p>
      <ContainerUser>
        <Information>Nombre: <UserInfo>{name}</UserInfo></Information>
        <Information>Entrada: <UserInfo>{entrada}</UserInfo></Information>
        <Information>Plato principal: <UserInfo>{principal}</UserInfo></Information>
        <Information>Postre: <UserInfo>{postre}</UserInfo></Information>
      </ContainerUser>
    </ContainerUser>
  )
}

export default User