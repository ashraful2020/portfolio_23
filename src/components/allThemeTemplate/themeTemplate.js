import React from 'react';
import { BsFillSunFill, BsMoonStars, BsXLg } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import './themeTemplate.scss';
import { useApplicationContext } from '../../hooks/contextAPI';

const ThemeTemplate = () => {
    const { openTem,
        closeTem,
        handleTemp,
        handleTheme,
        isTemplateOpen,
        colorTheme,
        changeTem,
    } = useApplicationContext()
    console.log(isTemplateOpen)
    return (
        <>
            <div className="theme-icon-wrapper" onClick={openTem}>
                <FiSettings className='theme-icon switch__color' />
            </div>
            <div className={`${isTemplateOpen ? 'theme-wrapper show-template' : 'theme-wrapper'}`}>
                <div className="theme-header">
                    <span>Theme Template</span>
                    <BsXLg className='close-template switch__color' onClick={closeTem} />
                </div>
                <div className="mode">
                    <div
                        onClick={() => handleTheme('light-mode')}
                        className={`${colorTheme === 'light-mode' ? 'active-mode' : ''}`}>
                        <BsFillSunFill className='icon switch__color' />
                    </div>
                    <div
                        onClick={() => handleTheme('dark-mode')}
                        className={`${colorTheme === 'dark-mode' ? 'active-mode' : ''}`}>
                        <BsMoonStars className='icon switch__color' />
                    </div>
                </div>
            
                {/* Template color wrapper  */}
                <div className="template-wrapper">
                    <div onClick={() => handleTemp('template-1')} className={`template ${changeTem === 'template-1' ? 'switch__border-color' : ''}`}>
                        <div className="template-1"></div>
                    </div>
                    <div onClick={() => handleTemp('template-2')} className={`template ${changeTem === 'template-2' ? 'switch__border-color' : ''}`}>
                        <div className="template-2"></div>
                    </div>
                    <div onClick={() => handleTemp('template-3')} className={`template ${changeTem === 'template-3' ? 'switch__border-color' : ''}`}>
                        <div className="template-3"></div>
                    </div>
                    <div onClick={() => handleTemp('template-4')} className={`template ${changeTem === 'template-4' ? 'switch__border-color' : ''}`}>
                        <div className="template-4"></div>
                    </div>
                    <div onClick={() => handleTemp('template-5')} className={`template ${changeTem === 'template-5' ? 'switch__border-color' : ''}`}>
                        <div className="template-5"></div>
                    </div>
                    <div onClick={() => handleTemp('template-6')} className={`template ${changeTem === 'template-6' ? 'switch__border-color' : ''}`}>
                        <div className="template-6"></div>
                    </div>
                    <div onClick={() => handleTemp('template-7')} className={`template ${changeTem === 'template-7' ? 'switch__border-color' : ''}`}>
                        <div className="template-7"></div>
                    </div>
                    <div onClick={() => handleTemp('template-8')} className={`template ${changeTem === 'template-8' ? 'switch__border-color' : ''}`}>
                        <div className="template-8"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThemeTemplate;