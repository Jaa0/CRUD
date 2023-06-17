import React, { useRef, useState } from 'react'
import './crud.css'

function Crud() {
    const list = [
        {
            id: 1,
            judul: "lalalala",
            deskripsi: "testtest"
        },
        {
            id: 2,
            judul: "yeyeey",
            deskripsi: "tes"
        }
    ]
    const [lists, setList] = useState(list)
    
    return(
        <div className='content'>
            <div>
            <Judul/>
            <div>
            <Add setList = {setList}/>
            <table>
                {
                    lists.map((current) => (
                        
                        <tr>
                            <td>{current.judul}</td>
                            <td>{current.deskripsi}</td>
                            <td>
                                <button className='update' >Update</button>
                                <button className='delete' >Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </div>
            </div>
        </div>
    )
}
function Judul(){
    return(
    <div>
        <h2 className='judul'>CRUD Challenge lalala</h2>
    </div>
    )
}
function Add({setList}){
    const judulRef = useRef()
    const deskRef = useRef()
    function Submit(event){
        event.preventDefault();
        const judul =event.target.elements.judul.value;
        const deskripsi = event.target.elements.deskripsi.value;
        const newlist = {
            id: 3,
            judul,
            deskripsi
        }
        setList((prevList) => {
            return prevList.concat(newlist)
        })
        judulRef.current.value = ""
        deskRef.current.value = ""
    }
    return(
        <form className='form' onSubmit={Submit}>
            <input type='text' name='judul' placeholder='enter judul' ref={judulRef}></input>
            <input type='text' name='deskripsi' placeholder='enter deskripsi' ref={deskRef}></input>
            <button type='submit'>Create</button>
        </form>
    )
    }
export default Crud;    