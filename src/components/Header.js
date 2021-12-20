import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,onAdd , showAdd})=>{
    return (
        <header className='header'>
            <h1>hello {title}</h1>
            <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
        </header>
    )
}

// Header.defaultProps = {
//     title : "Task Tracker1"
// }


    // css in js
// const headingStyle = {
//     color : 'purple',
//     backgroundColor: "green",
// }


Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header;
