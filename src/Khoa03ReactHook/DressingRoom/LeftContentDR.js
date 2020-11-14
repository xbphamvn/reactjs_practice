import React, { useState } from 'react';
import { navPills, tabPanes } from '../../Data/DressingRoomData.json';
import TabPaneItemDR from './TabPaneItemDR';

export default function LeftContentDR(props) {

    let [pillStatus, setPillStatus] = useState({
        topclothes: 'active',
        botclothes: '',
        shoes: '',
        handbags: '',
        necklaces: '',
        hairstyle: '',
        background: '',
    });

    const handlePillStatus = (pillType) => {
        for (let key in pillStatus) {
            key === pillType ? pillStatus[key] = 'active' : pillStatus[key] = '';
        }
        setPillStatus({ ...pillStatus });
    }

    const renderNavPills = () => (
        navPills.map((pillItem, pillIndex) => ((
            <li className="nav-item" onClick={() => { handlePillStatus(pillItem.type) }} key={pillIndex}>
                <p className={`nav-link btn-default btn ${pillStatus[pillItem.type]}`}>{pillItem.showName}</p>
            </li>
        )))
    );

    const renderTabPanes = () => {
        for (let key in pillStatus) {
            if (pillStatus[key] === 'active') {
                return (
                    <div className="container">
                        <div className="row">
                            {tabPanes.filter(item => item.type === key).map((pane, index) => ((
                                <TabPaneItemDR paneItem={pane} key={index} />
                            )))}
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <>
            <ul className="nav nav-pills">
                {renderNavPills()}
            </ul>
            <div className="well">
                {renderTabPanes()}
            </div>
        </>
    )
}
