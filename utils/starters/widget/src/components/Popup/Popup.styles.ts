import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  position: absolute;
  bottom: 0;
  right: 20px;

  * {
    box-sizing: border-box
  }
`

export const Area = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  height: 250px;
  padding: 0 20px;
  width: 390px;
`