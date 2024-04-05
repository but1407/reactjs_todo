import { useRef } from "react";
import { useStore,actions } from "./store";
// const order = [100, 200, 300];
// function App() {
//   const [job, setJob] = useState('');
//   const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) );
//   const handleJobs = () => { 
//     setJobs(prev => {
//       let newJobs = '';
//       if (job !== '') {
        
//         newJobs = [...prev,job];
//       } else {
        
//         newJobs = [...prev ];
//       }

//       const jsonJobs = JSON.stringify(newJobs);
//       //luu vao local storage
//       localStorage.setItem('jobs', jsonJobs)
//       return newJobs;
//     });
//     setJob('');
//   }
//   console.log(job,jobs)
//   return (
//     <div  style={{ padding: 32 }}>
//       <input
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleJobs}>Add</button>
//       <ul>
//         {jobs.map((job, index) => 
//           <li key={index}>{job}</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// function Content() {
//   const tabs = ['posts', 'comments', 'albums'];
//   const [type, setType] = useState('posts');
//   const [posts, setPost] = useState([]);
//   const [showGoToTop,setGoToTop] = useState(false)
//   useEffect(() => { 
//     fetch('http://jsonplaceholder.typicode.com/'+type)
//       .then(res => res.json())
//       .then(post => {
//         setPost(post);
//       })
//   }, [type]);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       // if (window.scrollY >= 200) {
//       //   setGoToTop(true);
//       // } else {
//       //   setGoToTop(false);
        
//       // }
//       setGoToTop(window.scrollY >= 200)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   },[])

//   return (
//     <div>
//       {tabs.map(tab => (
//           <button
//             key={tab}
//           style={type === tab ? {
//                 color: '#fff',
//                 backgroundColor: '#333'
//             } : {}}
//             onClick ={()=>setType(tab)}
          
//           >
//         {tab}
//           </button>
//         ))}
      
    
//       <ul>
//         {posts.map(post => (
//           <li key = {post.id}>{post.title || post.name }</li>
        
//         ))}
//       </ul>
//       {
//         showGoToTop && (
//           <button
//             style={{ 
//               position: 'fixed',
//               right: 20,
//               left: 20,
//               bottom: 20,
//             }}
//           >Go to top</button>
//         )
//       }
//     </div>
//   )
// }
// function Content() {
//   const [countdown, setCoundown] = useState(180);
//   useEffect(() => {
//     console.log('setCoundown')

//     const timerId = setInterval(() => {
//       setCoundown(preState => preState - 1) 
//       console.log('setCoundown')
//     }, 1000)
//     return ()=>clearInterval(timerId)
//   },[])
//   return (
//     <div>
//       <h1>{countdown}</h1>
//     </div>
//   )
// }



// function Content() {
//   const [avatar, setAvatar] = useState();



//   useEffect(() => {
//     return ()=> avatar && URL.revokeObjectURL(avatar.preview)
//     },[avatar]);
//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);
//     setAvatar(file);
//   }

//   return (
//     <div>
//       <input
//         type = 'file'
//         onChange={handlePreviewAvatar}
//       />
//       {avatar && (
//         <img src={avatar.preview} width='80%'/>
//       )}
//     </div>
//   )

// }

// function Content() {
//   const lessons = [
//     {
//       id: 1,
//       name: "React",
      
//     },{
//       id: 2,
//       name: "ReactJS",
      
//     },{
//       id: 3,
//       name: "Vue",
      
//     }
//   ]
//   const [lessonId, setLessonId] = useState(1);
//   useEffect(() => {
//     console.log("sdsd");
//     const handleComment = ({ detail }) => {
//       console.log(detail);
//     }
//     window.addEventListener('lesson-' + lessonId, handleComment);
//     return () => window.removeEventListener('lesson-' + lessonId, handleComment);
//   },[lessonId])

//   return (
//     <div>
//       <ul>
//         {lessons.map(lesson =>( 
//           <li key={lesson.id}
//             style={{ 
//               color: lessonId === lesson.id ? 'red':'#333'
//             }}
//             onClick={() => setLessonId(lesson.id)} >
//               {lesson.name}
            
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
//init state
// const initState = 0;
// //action
// const UP_ACTION='up';
// const DOWN_ACTION='down';

// //reducer
// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state+1;
//     case DOWN_ACTION:
//       return state - 1;
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer,initState);
//   // const timeId = useRef(count);
//   // const precount= useRef();
  
//   // useEffect(() => {
//   //   precount.current = count
//   // }, [count])
  
//   // const handleStart = () => {
//   //   timeId.current = setInterval(() => {
//   //     setCount(prev => prev - 1);
      
//   //   }, 1000);
//   // }

  

//   // const handleStop = () => {
//   //   clearInterval(timeId.current);

//   // }

//   // console.log(precount,count)


//   return (
//     <div style={{
//       padding:20
//     }}>
//       <h1>{count}</h1>
      
//       <button
//         onClick={() => dispatch(DOWN_ACTION)}
//       >-</button>
      
//       <button
//         onClick={() => dispatch(UP_ACTION)}
//       >+</button>

//     </div>
//   );

// }

// function App()
// {
//   const [count , set]
// }
// const initState = {
//   job: '',
//   jobs:[]
// }

// const SET_JOB ='set_job'
// const ADD_JOB ='add_job'
// const DELETE_JOB = 'delete_job'

// const setJob = payload => {
//   return {
//     type: SET_JOB,
//     payload,
//   }
// }
// const addJob = payload => {
//   return {
//     type: ADD_JOB,
//     payload,
//   }
// }
// const reducer = (state, action) => {
//   let newState;
//   switch (action.type) {
//     case SET_JOB:
//       newState = {
//         ...state,
//         job: action.payload
//       }
//       break
//     case ADD_JOB:
//       newState = {
//         ...state,
//         job: [...state.jobs,action.payload]
//       }
//       console.log(newState)

//     break
//     // case DELETE_JOB:
//     //   newState = {
//     //     ...state,
//     //     job: action.payload
//     //   }
//       // break;
      
//         ;
//     default:
//       throw new Error(`Invalid action ${action.type}`)
//   }
//   return newState
// }
// function App() {
//   const [state,dispatch] = useReducer(reducer,initState)
//   const { job,jobs } =state
//   const handleSubmit = () => {
//     dispatch(addJob(job))
//   }
//   return (
//     <div style={{ padding: '0 20px' }}>
//       <h3>Todo</h3>
//       <input
//         value={job }
//         placeholder='Enter Todo...'
//         onChange={e => {
//           dispatch(setJob(e.target.value));
//         }}  
//       />
//       <button
//         onClick={handleSubmit}
//       >Add</button>
//       <ul>
//         {jobs.map((job,index)=>(
//           <li key={index}>{job} &times;</li>
//         )

//         )}
        
//       </ul>
//     </div>
//   )
// }

function App() {
  const [state, dispatch] = useStore()
  const inputRef =useRef()
  const { todos, todoInput } = state;
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>
        Hello World
      </h1>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo,index) => (
        <li key={index}>{todo}
        <span onClick={() => dispatch(actions.deleteTodoInput(index))}>
              {" "}
              &times;
            </span>
        </li>
      ))}
    </div>
  )
}


export default App;
