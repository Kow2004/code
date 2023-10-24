import '../Styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
const Sidebar=({links,close})=>{
    return(
        <>
        <div className='Sidebar' onClick={close}>
        {
        links.map(link=>(
            <a href="#!"key={link.name} className="sidebarlinks">
                <FontAwesomeIcon icon={link.icon}/>
                {link.name}
            </a>
        ))
        }
        </div>
        </>
    );
}

export default Sidebar;
