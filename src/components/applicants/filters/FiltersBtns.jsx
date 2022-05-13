import React from 'react'

export default function FiltersBtns({checkbox}) {
    console.log(checkbox); 
    return (
        <>
            {checkbox.filters.map(filter => {
                return (
                    <>
                        <input name='languajes' value={filter} type='checkbox' id={filter} />
                        <label htmlFor={filter}>{ filter }</label>
                    </>
                )
            })}
        </>
    )
}
/* 
*         <div onClick={filter}>
*            <button ref={filterBtn} className='filter-btn'>Languajes</button>
*            <div ref={menu} className='filter-checkboxes no-display'>
*                <FiltersBtns/>
*            </div>
*        </div> 
*/

/*
<label className='label-filter' htmlFor="js">JavaScript</label>
<input className='input-filter' id='js' type="checkbox" name="languages" value="JavaScript" />
<label className='label-filter' htmlFor="react">React</label>
<input className='input-filter' id='react' type="checkbox" name="languages" value="React" />
<label className='label-filter' htmlFor="redux">Redux</label>
<input className='input-filter' id='redux' type="checkbox" name="languages" value="Redux" />
<label className='label-filter' htmlFor="nodejs">NodeJs</label>
<input className='input-filter' id='nodejs' type="checkbox" name="languages" value="NodeJs" />
*/