import { v4 as uuidv4 } from 'uuid'
import { Card } from './Card'


export const List = ({ array , removeObject }) => {
    return array.map((transaction, index) => {
        return (
            <Card transaction={transaction} index={index} removeObject={removeObject}/>
        )
    })
}
