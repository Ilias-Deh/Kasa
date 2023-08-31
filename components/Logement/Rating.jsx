import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Rating(props) {
    const range = [1, 2, 3, 4, 5]
    return (
        range.map((rangeElem) =>
            props.children >= rangeElem ? (<img src={starActive} alt='étoile active'></img>) : (<img src={starInactive} alt='étoile inactive'></img>) )
    )}
export default Rating;