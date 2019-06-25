import * as React from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';

import style, {Item, MusicButton} from './headerStyles';

export interface propsI {
    source: number,
    level: number,
    className: string
}

const Header = ({source, level, className}: propsI) => {
    return (
        <header className={className}>
            <Item>Source:{source}</Item>
            <Item>Level:{level}</Item>
            <MusicButton><ReactSVG src="./svg/music.svg"/></MusicButton>
        </header>
    )
}

interface mapStateToPropsI {
    source: number,
    level: number
}

const mapStateToProps = ({source, level} : mapStateToPropsI) => ({
    source,
    level
})

export default connect(mapStateToProps)(style(Header));