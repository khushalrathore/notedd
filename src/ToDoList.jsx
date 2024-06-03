import React, { useState } from "react"
import Plane from './assets/plane.png'
import Star from './assets/star.png'
import Bell from './assets/bell.png'
import Delete from './assets/delete.png'
import Logo from './assets/logo.png'

const pfpURL = 'https://source.boringavatars.com/beam/250/?colors=264653,f4a261,e76f51'

const styles = {
  page: {
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0.809rem',

  },
  bellButton: {
    background: `url(${Bell})`,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundSize: 'contain',
    width: '20px',
    height: '20px',
  },
  bellButtonDiv: {
    background: `transparent`,
    border: 'none', borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundSize: 'contain',
    width: '45px',
    height: '45px',
    boxShadow: 'inset 0 10px 50px rgba(0,0,0,0.06102)',

  },
  pfpIcon: {
    background: `url(${pfpURL})no-repeat center center`,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundSize: 'contain',
    width: '45px',
    height: '45px',
  },
  logo: {
    background: `transparent`,
    border: 'none',
    borderRadius: '100dvw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundSize: 'contain',
    width: '88.5px',
    height: '45px', filter: 'saturate(0) contrast(1.2)',
    boxShadow: 'inset 0 10px 50px rgba(0,0,0,0.06102)',

  },
  h1: {
    background: 'white',
    padding: '0.5rem 0.809rem',
    color: 'black',
    border: '0px solid white',
    margin: 0,


  },
  taskAdder: {

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0rem 0.809rem',
    gap: '0.809rem',



  },
  inputTask: {
    margin: 0, flex: '1',
    background: 'transparent',
    border: 'none',
    paddingInlineStart: '0.25rem',
    borderRadius: '100dvw', outline: 'none'
  },
  inputTaskStarCheck: {
    margin: 0,
    flex: '1',
    background: 'transparent',
    border: '0.5px solid rgba(0,0,0,0.2)',
    padding: '0.75rem 1rem',
    borderRadius: '100dvw',
    boxShadow: 'inset 0 10px 50px rgba(0,0,0,0.06102)',
    outline: 'none',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addButton: {
    background: 'radial-gradient(orangered,orange)',
    border: 'black',
    color: 'rgb(52,120,198)',
    fontSize: '1.2rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '50px',
    minHeight: '50px',
    cursor: 'pointer',
  },
  starButton: {
    background: `url(${Star})`,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundSize: 'contain',
    width: '20px',
    height: '20px',
  },
  deleteButton: {
    background: `url(${Delete})no-repeat center center`,
    width: '20px',
    height: '20px',
    backgroundSize: 'contain',
    cursor: 'pointer'
  }
  ,
  listItem: {
    background: 'white',
    color: 'black',
    padding: '0.5rem 0.809rem',
    margin: 0,
    border: '1px solid gainsboro',
    fontSize: '1.1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '100dvw',


  }, listItemDiv: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ul: {
    padding: '0.809rem',
    margin: 0,
    margin: '0.809rem',
    background: 'whitesmoke',
    borderRadius: '10px', display: 'flex',
    flexDirection: 'column', gap: '0.5rem',

  },



}

const ToDoList = () => {

  const user = prompt('Pick a Username 😄');
  const [tasks, setTasks] = useState(["Go To Gym", "DSA Roadmap"]);
  const handleAddTasks = () => {
    const newTask = document.getElementById('inputTask').value
    document.getElementById('inputTask').value = '';
    if (newTask) {
      setTasks(t => [...t, newTask])
    }
  }
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') handleAddTasks();
  }
  const handleRemoveTasks = (index) => {
    setTasks(t => t.filter((_, i) => i !== index))
  }
  const handleCheckedTasks = () => {

  }

  return (
    <>
      <div style={styles.page}>
        <div style={styles.topBar}>
          <div style={styles.logo}><img src={Logo} className="planeIcon" width={'59.25px'} /></div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <div style={styles.bellButtonDiv}><div style={styles.bellButton}></div></div>
            <div style={styles.pfpIcon}></div>
          </div>
        </div>
        <h1 style={styles.h1}>Have a Good Day, <br></br>{user} 👋</h1>
        <div style={styles.taskAdder}>
          <div style={styles.inputTaskStarCheck}>
            <input style={styles.inputTask} type='text' placeholder=" I want to..." id='inputTask' onKeyUp={handleKeyUp} name="inputTask"></input>
            <button style={styles.starButton} className="starButton"></button>
          </div>
          <button style={styles.addButton} onClick={(e) => handleAddTasks(e)}><img src={Plane} className="planeIcon" width={'24px'} /></button>
        </div>
        <ol style={styles.ul}>
          {
            tasks.map((task, index) =>
              <li key={index} style={styles.listItem}>
                <div style={styles.listItemDiv}>
                  {<input type='checkbox' style={{ accentColor: 'orangered' }} value='checked' onClick={() => handleCheckedTasks(index)} name='checkBox' />}
                  {task}
                </div>

                <div onClick={() => handleRemoveTasks(index)} style={styles.deleteButton}>
                </div>
              </li>)
          }
        </ol>
      </div >
    </>
  )
}
export default ToDoList