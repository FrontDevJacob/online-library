import styled from 'styled-components/native'

import { moderateScale } from 'styles'

import { Text } from './Text'

export const Header = styled(Text)`
   text-align: center;
   color: ${({ black }) => (black ? 'black' : 'white')};
   font-size: ${moderateScale(17)}px;
   margin-bottom: ${moderateScale(30)}px;
`
