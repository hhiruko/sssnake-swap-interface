import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, CardBody, Text } from '@pancakeswap-libs/uikit'
import { Link } from 'react-router-dom'
import CardNav from 'components/CardNav'
import Question from 'components/QuestionHelper'
import FullPositionCard from 'components/PositionCard'
import { StyledInternalLink } from 'components/Shared'
import { LightCard } from 'components/Card'
import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'

import useI18n from 'hooks/useI18n'
import PageHeader from 'components/PageHeader'
import AppBody from '../AppBody'

export default function Validate() {
  const theme = useContext(ThemeContext)
  const TranslateString = useI18n()

  return (
    <>
      <CardNav activeIndex={2} />
      <AppBody>
        <PageHeader
          title={TranslateString(262, 'Validate')}
          description={TranslateString(1168, 'Verify SSSnakeSwap is trusted')}
          tutorial='If this is your first time on the website, you must absolutely verify the website as instructed below. This is done to mitigate a Website Clonning Scam.'
        >
          <Button id="validate-button">
          <a target="_blank" rel="noreferrer" href="https://testnets.opensea.io/assets/mumbai/0x2953399124f0cbb46d2cbacd8a89cf0599974963/13504122865213740749333073099426001280111692342208430853728121701930274652161">{TranslateString(168, 'Validate Certificate')}</a>
          </Button>
        </PageHeader>
        <AutoColumn gap="lg" justify="center">
          <CardBody>
            <AutoColumn gap="12px" style={{ width: '100%' }}>
              <RowBetween padding="0 8px">
                <Text color={theme.colors.text}>{TranslateString(107, '1. Certificate')}</Text>
              </RowBetween>
              <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(106, "Click on 'owned by' link, and keep the tab open. Return to the Validation Tab.")}
              </Text>

              <RowBetween padding="0 8px">
                <Text color={theme.colors.text}>{TranslateString(107, '2. Source Code')}</Text>
              </RowBetween>
              <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(106, "Open any search engine and type 'sssnake swap source code'. Find the official source code, and look for the Certificate Owner Address. Compare with the Certificate owner in the step one.")}
              </Text>

              <RowBetween padding="0 8px">
                <Text color={theme.colors.text}>{TranslateString(107, '3. Website')}</Text>
              </RowBetween>
              <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(106, "Return to the Certificate and click on 'Reveal unlockable content'. Compare the link over there with the link of your SSSnakeSwap website.")}
              </Text>

              <RowBetween padding="0 8px">
                <Text color={theme.colors.text}>{TranslateString(107, '4. Results')}</Text>
              </RowBetween>
              <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(106, "If the addresses and links do not differ, your SSSnakeSwap webpage is valid.")}
              </Text>
            </AutoColumn>
          </CardBody>
        </AutoColumn>
      </AppBody>
    </>
  )
}
