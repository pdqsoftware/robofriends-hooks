import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((robot, index) => {
                    return (
                        <Card 
                            key = { robot.id }
                            id = { robot.id }
                            name = { robot.name }
                            email = { robot.email }
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList

// const CardList = (props) => {
//     const { robots } = props
//     const robotCard = robots.map((robot, index) => {
//         return (
//             <Card 
//                 key = { robot.id }
//                 id = { robot.id }
//                 name = { robot.name }
//                 email = { robot.email }
//             />
//         )
//     });

//     return (
//         <div>
//             { robotCard }
//         </div>
//     )
// }

// export default CardList