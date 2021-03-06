import React, { useState } from 'react'
import { SideSheet, Paragraph, Button, MenuIcon, Pane, Heading, DotIcon, DiagnosisIcon, LockIcon, SymbolCrossIcon, ShapesIcon } from 'evergreen-ui'
import Box from 'ui-box/dist/src/box'
import { Link } from 'react-router-dom'
import { isUserAuthenticated } from '../helpers/auth'

const SideMenuNav = () => {
    const handleLogout = () => {
        window.localStorage.removeItem('safety-token')
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <Pane className='navbar-container'>
            <SideSheet isShown={isOpen} onCloseComplete={() => setIsOpen(false)} width={250} >
                <Box className='side-sheet'>
                    {!isUserAuthenticated() &&
                        <Paragraph fontFamily='DM Serif Display'><DotIcon size={15} /> <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></Paragraph>
                    }
                    <Paragraph fontFamily='DM Serif Display'><DiagnosisIcon size={15} marginRight={5} /><Link to="/symptomchecker" onClick={() => setIsOpen(false)}>Symptom Checker</Link></Paragraph>
                    <Paragraph fontFamily='DM Serif Display'><DotIcon size={15} marginRight={5} /><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></Paragraph>
                    <Paragraph fontFamily='DM Serif Display'><DotIcon size={15} marginRight={5} /><Link to="/links" onClick={() => setIsOpen(false)}>Links & Helplines</Link></Paragraph>
                    <Paragraph fontFamily='DM Serif Display'><DotIcon size={15} marginRight={5} /><Link to="/substances" onClick={() => setIsOpen(false)}>Substances</Link></Paragraph>
                    {isUserAuthenticated() &&
                        <>
                            <Paragraph fontFamily='DM Serif Display'><SymbolCrossIcon size={15} marginRight={5} /><Link to="/report" onClick={() => setIsOpen(false)}>Add spiking</Link></Paragraph>
                            <Paragraph fontFamily='DM Serif Display'><DotIcon size={15} marginRight={5} /><Link to="/reportsdashboard" onClick={() => setIsOpen(false)}>Report Dasboard</Link></Paragraph>
                        </>
                    }
                    {isUserAuthenticated()
                        &&
                        <Paragraph fontFamily='DM Serif Display'><LockIcon size={15} marginRight={5} /><Link to="/" onClick={() => {
                            setIsOpen(false)
                            handleLogout()
                        }}>Logout</Link></Paragraph>
                    }
                </Box>
            </SideSheet>
            <Heading fontFamily='DM Serif Display'><Link to='/'>SafetyApp</Link></Heading>
            <Button onClick={() => setIsOpen(true)}><MenuIcon /></Button>
        </Pane>
    )

}

export default SideMenuNav