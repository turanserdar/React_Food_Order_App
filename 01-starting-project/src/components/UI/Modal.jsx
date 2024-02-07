import { useEffect, useRef } from 'react';



export default function Modal({children, open, className = ''}) {

    const dialog= useRef();

    useEffect(() => {

        const modal=dialog.current;

        if(open){

           modal.showModal();
        }

        return () =>modal.close();

    }, [open]);


    return (<dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>, document.getElementById('modal'));
}