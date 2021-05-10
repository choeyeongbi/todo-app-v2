import { Link } from 'react-router-dom';
import '../static/style.css'
const Header = () => {
  return (
      <>
    <div className="header_link">
      <h1>HEADER PAGE</h1>
    
       
          <Link to='/'>HOME</Link>&nbsp;
         | <Link to='/tasklist'>Task List</Link>
        
      
    </div>
    </>
  );
};

export default Header;
