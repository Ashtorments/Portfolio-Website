import React from 'react'

const education = () => {
  return (
    <section className="education container section" id="education">
    <h2 className="section_title">Education and Experience</h2>
    <div className="education_container grid">
        <div className="timeline grid">
            {Data.map((val, id)=>{
                if (val, category === "education"){
                    return(
                        <Card/>
                    )
                }
            })}
        </div>

        
    </div>
    </section>
  )
}

export default education