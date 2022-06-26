import React,{useState,useId} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTask } from "./Actions/taskActions";
import { REMOVE_Task } from "./Actions/taskActions";
import { EDIT_Task } from "./Actions/taskActions";
import { changeTask } from "./Actions/taskActions";
import{Modal,Form,Button} from 'react-bootstrap'

const Task = () => {
    const Task = useSelector(state => state.taskReducer)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [input, setInput] = useState(
        {
        newtext:"",
        text:"",
        complete:false
    }    )

    const dispatch = useDispatch()
    const  handleChange = (e) => {
         setInput({ [e.target.name]: e.target.value });
       };
       return (
        <div>
            <div className="taskapp">
              <h1>Tasks to do.</h1>
              <div className="section">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter new task"
                  onChange={handleChange}
                  name="text"
                />
                  
                <Button variant="success" type="button" className="add" onClick={()=>{dispatch(addTask(input))}}>+</Button>{' '}
                <div>
                {Task.map(el=>
                el.id!=="1"&&el.text!==""?
                    <div>
                        {el.complete===true?<p style={{  textDecoration: "line-through"}}>{el.text}</p>:<p>{el.text}</p>}
                        <Button variant="danger" onClick={()=>{dispatch(REMOVE_Task(el.id))}}>Delete</Button>{' '}

                    <Button variant="secondary" onClick={()=>{dispatch(changeTask(el.id))}}>complete</Button>{' '}
                    <Button variant="info" onClick={()=>{
                        dispatch(EDIT_Task(el.id));
                        handleShow();
                        }
                        }>Update</Button>{' '}
              
                    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="email"
                    name="newtext"
                    placeholder="the task"
                    autoFocus
                    onChange={handleChange}
                   
                  />
                </Form.Group>
               
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary"  onClick={()=>dispatch(EDIT_Task(el.id,input.newtext))}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
                   </div>:null
                    )}
              
                </div>
                
              </div>
            </div>
            
          </div>
      )
    }
    
    export default Task