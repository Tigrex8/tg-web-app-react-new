import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} =useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закртыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;