import styles from './Heading.module.css'
const Heading = ({ keyWord, handleChange }) => {
    return (
        <div className='col col-12'>
            <input className={["search-control", styles.search].join(' ')} type='text' value={keyWord} onChange={handleChange} placeholder="search movies" />
         {/* <input className={styles.search} type='text' value={keyPerson} onChange={handlePersonChange} placeholder="search person"/>  */}
        </div>
    )
}




export default Heading;