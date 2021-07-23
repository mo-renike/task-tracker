import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}


Header.defaultProps = {
    title : "Task Tracker",
    name : "Morenike",
    age : 27
}

Header.propTypes ={
    title : PropTypes.string
}


//CSS in JS
// const headingStyle = {
//     color: 'green', 
//     backgroundColor:'#00ff00'
// }
export default Header
