import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pane, Paragraph, Heading, Popover, Badge, Text, Link } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
import { symptomsArr } from '../helpers/constants'

const SubstancePage = () => {

  const [substances, setSubstances] = useState({})
  const [hasError, setHasError] = useState({ error: false, message: '' })


  const getData = async () => {
    try {
      const { data } = await axios.get('api/substances/all/')
      setSubstances(data)
    } catch (error) {
      console.log(error)
      setHasError({ error: true, message: error.message })
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <Pane className='substance-container'>
      <Heading fontFamily='DM Serif Display'>Substances</Heading>
      <Text>These are the most common spiking substances.</Text>
      <Box className='information-container'>
        {substances.length ?
          substances.map((item, index) => {
            return (
              <>
                <Popover
                  content={
                    <Pane margin={10} width={300} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                      <Heading fontFamily='DM Serif Display'>{item.name}</Heading>
                      <Text>Class: {item.drug_class}</Text>
                      <Text>Duration: {item.duration}</Text>
                      <Box>
                        <Text>Symptoms:</Text>
                        {item.symptoms.map((symptom, index) => {
                          return <Badge key={index + 20}>{symptomsArr[symptom - 1]}</Badge>
                        })}
                      </Box>
                      <Link href={item.link}>talktofrank.com - {item.name}</Link>
                    </Pane>
                  }
                >
                  <Box className='substance-button'><Text fontFamily='DM Serif Display'>{item.name}</Text></Box>
                </Popover>
              </>
            )
          })
          :
          <Paragraph>Not working and this is the error: {hasError.message}</Paragraph>
        }
      </Box>
    </Pane>
  )
}

export default SubstancePage