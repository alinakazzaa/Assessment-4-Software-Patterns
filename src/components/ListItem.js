import React from 'react'
import deleteImg from '../resources/images/delete.png'
import rightImg from '../resources/images/arrow-right.png'


export const ListItem = ({ item, goToItem, removeItem, isAdmin }) => {

    return <div className="itemContainer">
        <div className="header">
            {isAdmin && <button onClick={() => removeItem(item)} className="btn"><img className="iconImg" src={deleteImg} /></button>}
        </div>
        <div className="itemBody">
            <div className="infoBox">
                <p className="itemTitle">{item.title}</p>
                <p className="subTitle"> by {item.manufacturer}</p>
            </div>
            <div className="imageBox">
                <img className="imageMedium" src={item.image} />
            </div>
        </div>
        <div className="itemBottom">
            <p className="subTitle">{item.category}</p>
            <p className="title">$ {item.price}</p>
        </div>
        <div className="footer">
            <button onClick={() => goToItem(item)} className="btn"><img className="iconImg" src={rightImg} /></button>
        </div>
    </div>
}