import React from 'react'
import Body from './Body/Body'

export default function MainContainer(props) {
    return (
        <React.Fragment>
            <Body
                carouselImg={props.carouselImg}
                titleTrending={props.titleTrending}
                dataTrending={props.dataTrending}
                titleMoreNike={props.titleMoreNike}
                dataMoreNike={props.dataMoreNike}
                merchMenu={props.merchMenu}
            />
        </React.Fragment>
    )
}
