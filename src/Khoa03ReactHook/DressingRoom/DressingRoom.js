import React from 'react';
import '../../assets/css/style.css';
import HeaderDR from './HeaderDR';
import LeftContentDR from './LeftContentDR';
import RightContentDR from './RightContentDR';

export default function DressingRoom(props) {

    return (
        <div className="container-fluid">
            <div className="row">
                <HeaderDR />
            </div>
            <div className="row">
                <div className="col-md-8">
                    <LeftContentDR />
                </div>
                <div className="col-md-4">
                    <RightContentDR />
                </div>
            </div>
        </div>
    )
}
