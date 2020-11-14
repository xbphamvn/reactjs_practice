import React from 'react'
import { useDispatch } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { tryOnDresses } from '../../redux/actions/DressingRoomActions';

export default function TabPaneItemDR(props) {

    let { paneItem } = props;
    const dispatch = useDispatch();

    const paneAnim = useSpring({
        from: { transform: 'scale(0)', opacity: 0 },
        transform: 'scale(1)',
        opacity: 1,
        config: {duration: 500},
        reset: true
    })

    return (
        <animated.div className="col-md-3" style={paneAnim}>
            <div className="card text-center">
                <img className="card-img-top" src={paneItem.imgSrc_jpg} alt={paneItem.name} />
                <h4><b>{paneItem.name}</b></h4>
                <button style={{ outline: 'none', boxShadow: 'none' }} className="btn-sm btn-outline-dark mx-auto col-8" onClick={() => { dispatch(tryOnDresses(paneItem)) }}>Thử đồ</button>
            </div>
        </animated.div>
    )
}
