import React, { useState } from 'react';
import './index.styles.scss';
import Menu from '../components/Menu/Menu';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import AppBar from '../components/AppBar/AppBar';

const Index = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [background, setBackground] = useState(`linear-gradient(45deg, #BF0ECB 30%, #1E77D6 95%)`);
    const [content, setContent] = useState('About');
    
    const gradientColor = (color) => (color == '#3080A8' ? '#9917AD' : '#1E77D6');

    const renderContent = () => {
        switch(content) {
            case 'About':
            return <About/>;
            case 'Education':
            return <Education/>;
            case 'Experience':
            return <Experience/>;
            case 'Skills':
            return <Skills/>;
            case 'Contact':
            return <Contact/>;
            default:
            return <About/>;
        } 
    }

    const updatePage = (color, content) => {
        setBackground(`linear-gradient(45deg, ${color} 30%, ${gradientColor(color)} 95%)`);
        setContent(content);
    }

    const minorScreens = window.matchMedia("(max-width: 720px)").matches;
    const screenDependantStyles = minorScreens ? 
        { 
            contentContainer:  window.matchMedia("(max-width: 410px)").matches ? { marginLeft: '-85vw' } : { marginLeft: '-95vw' }
        } : {
            contentContainer: menuOpen ? { marginLeft: '4vw' } : { marginLeft: '-10vw' }
        } 

    return (
        <div style={{ display: 'flex', background: background, maxWidth: '100vw', minHeight: '100vh'}}>
            {!minorScreens && <Menu open={value => setMenuOpen(value)} update={(color, content) => updatePage(color, content)} />}
            {minorScreens && <AppBar update={(color, content) => updatePage(color, content)}/>}
            <div className={"index-content-container"} style={screenDependantStyles.contentContainer}>
                {renderContent()}
            </div>
        </div>
      );
}

export default Index;