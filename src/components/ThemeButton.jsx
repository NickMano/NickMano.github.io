import React from 'react'
import { useTheme } from '../hooks/useTheme'
import modeImage from '../assets/themeMode.svg'
import '../styles/components/ThemeButton.scss'

export default function ThemeButton() {
    const { changeMode } = useTheme()

    return(
        <input 
            type="image"
            className='theme-button'
            src={modeImage}
            onClick={ changeMode }
        />
    )
}