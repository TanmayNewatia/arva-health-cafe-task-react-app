import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiBowlLine } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";

const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li><IoHomeOutline /></li>
                <li><FaRegHeart /></li>
                <li><RiBowlLine /></li>
                <li><IoPersonSharp /></li>
            </ul>
        </aside>
    )
}

export default Sidebar