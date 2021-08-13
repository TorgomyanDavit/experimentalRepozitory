import { useState } from "react"
import "./style.css"

function DragDrop() {
    const [cardList,setCardList] = useState([
        {id:1,order:1,text:"kartochka1"},
        {id:2,order:2,text:"kartochka2"},
        {id:3,order:3,text:"kartochka3"},
        {id:4,order:4,text:"kartochka4"}
    ])
    const [currentCard,setCurrentCard] = useState(null)
    function onDrop(e,card) {
        e.preventDefault()
        console.log(cardList)
        setCardList(cardList.map((val) => {
            if(val.id === card.id) {return currentCard }
            if(val.id === currentCard.id) {return card}
            return val
        }))
    }
    return (
        <div className="Main-Card">
            {cardList.map((card,i) => {
                return (
                    <div 
                    onDragStart={(e) => setCurrentCard(card)} 
                    onDrop={(e) => onDrop(e,card)} 
                    onDragEnd={(e) => {}}
                    onDragOver={(e) => {e.preventDefault()}} 
                    onDragLeave={(e) => {}} 
                    key={Math.random()}
                    draggable={"true"} 
                    className="card"
                    >
                    {card.text}
                    </div>
                )
            })}
        </div>
    )
}

export default DragDrop