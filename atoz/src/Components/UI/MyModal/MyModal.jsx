import cl from './MyModal.module.css'
import React from 'react'

export const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [cl.myModal]
    if(visible) rootClasses.push(cl.active)

    return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={cl.close} onClick={() => setVisible(false)}></div>
            {children}
        </div>
    </div>
  )
}
