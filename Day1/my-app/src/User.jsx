


const User = (props) => {

 
      return (
  props.isLogin ? <h2 className="one">you are Loggedin &nbsp;{props.username}</h2> : <h2 className="two"> Good job</h2>
  )
}

export default User;
