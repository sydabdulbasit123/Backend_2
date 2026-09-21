import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();

    const buttonhandler = () => {
        navigate('/create-post')
    }
  return (
    <button id="new-post-button" onClick={buttonhandler}>
      New Post
    </button>
  )
}

export default Button