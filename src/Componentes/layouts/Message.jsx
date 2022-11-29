import React, { useEffect, useState } from "react";

const Message = ({ msg, type }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000);

        return () => clearTimeout(timer)
    }, [msg])


    return (
        <>
            {visible && (<p className={type}>{msg}</p>)}
        </>
    )
}

export default Message;