import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { reDoAll } from '../../redux/actions/DressingRoomActions';

export default function RightContentDR(props) {
    let { hairstyle, necklaces, topclothes, botclothes, handbags, shoes, background } = useSelector(state => state.DressingRoomReducer.choosenList);
    const dispatch = useDispatch();

    const [redoBtn, setRedoBtn] = useState(true);
    const { redoScale } = useSpring({
        from: {
            redoScale: 0
        },
        redoScale: redoBtn ? 1 : 0,
        config: { duration: 1000 }
    });

    const hairStyleAnim = useSpring({
        from: {
            transform: 'translateY(-5%) scale(0.2)'
        },
        background: `url(${hairstyle})`,
        transform: 'translateX(0%) scale(0.15)',
        config: { duration: 500 },
        reset: true
    })

    const necklacesAnim = useSpring({
        from: {
            transform: 'translateY(10%) scale(1)'
        },
        background: `url(${necklaces})`,
        transform: 'translateX(0%) scale(0.5)',
        config: { duration: 500 },
        reset: true
    })

    const topClothAnim = useSpring({
        from: {
            transform: 'translateX(-150%) scale(0) rotate(90deg)',
            opacity: 0.5
        },
        background: `url(${topclothes})`,
        transform: 'translateX(0%) scale(0.5) rotate(0)',
        opacity: 1,
        config: { duration: 1000 },
        reset: true
    });

    const botClothAnim = useSpring({
        from: {
            transform: 'translateX(-150%) scale(0) rotate(-90deg)',
            opacity: 0.5
        },
        background: `url(${botclothes})`,
        opacity: 1,
        transform: 'translateX(0%) scale(0.5) rotate(0)',
        config: { duration: 1000 },
        reset: true
    })

    const handbagsAnim = useSpring({
        from: {
            transform: 'scale(0.45)',
            opacity: 0.5
        },
        background: `url(${handbags})`,
        transform: 'scale(0.5)',
        opacity: 1,
        config: { duration: 1000 },
        reset: true
    })

    const shoesAnim = useSpring({
        from: {
            transform: 'scale(0.6)'
        },
        background: `url(${shoes})`,
        transform: 'scale(0.5)',
        config: { duration: 500 },
        reset: true
    })

    const backgroundAnim = useSpring({
        from: {
            transform: 'scale(0.47)',
            opacity: 0.5
        },
        backgroundImage: `url(${background})`,
        transform: 'scale(0.5)',
        opacity: 1,
        config: { duration: 1000 },
        reset: true
    })

    return (
        <div className="contain">
            <animated.button
                style={{
                    transform: redoScale.interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    }).interpolate(value => `scale(${value})`),
                    boxShadow: 'none'
                }}
                className="btn btn-danger btn-sm ml-4 mt-2"
                onClick={() => {
                    setRedoBtn(!redoBtn);
                    dispatch(reDoAll());
                }}>Chọn lại <i className="fa fa-redo-alt"></i></animated.button>
            <div className="body" />
            <div className="model" />
            <animated.div style={hairStyleAnim} className="hairstyle" />
            <animated.div style={necklacesAnim} className="necklace" />
            <animated.div style={topClothAnim} className="bikinitop" />
            <animated.div style={botClothAnim} className="bikinibottom" />
            <animated.div style={handbagsAnim} className="handbag" />
            <animated.div style={shoesAnim} className="feet" />
            <animated.div style={backgroundAnim} className="background" />
        </div >
    )
}
