import React from 'react'
import Card from '../../../../common/components/Card/Card'

const Content = ({category}) => {

    return (
        <>
            {category.content.map((item, index) => {
                if (index % 4 === 0 || index === 0) {
                    return <Card key={item.id} info={item}
                        imageAnimationDelay='delay02'
                        headerAnimationDelay='delay04'
                        addressAnimationDelay='delay06'/>
                } else if (index % 4 === 1 || index === 1) {
                    return <Card key={item.id} info={item}
                    imageAnimationDelay='delay0'
                    headerAnimationDelay='delay0'
                    addressAnimationDelay='delay0'
                    />
                } else if (index % 4 === 2 || index === 2) {
                    return <Card key={item.id} info={item}
                    imageAnimationDelay='delay02'
                    headerAnimationDelay='delay02'
                    addressAnimationDelay='delay02'/>
                } else if (index % 4 === 3 || index === 3) {
                    return <Card key={item.id} info={item}
                    imageAnimationDelay='delay04'
                    headerAnimationDelay='delay04'
                    addressAnimationDelay='delay04'/>
                }
            })}
        </>
    )
}

export default Content
