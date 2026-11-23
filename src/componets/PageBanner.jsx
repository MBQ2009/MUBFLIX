import React from 'react'
import { Container } from 'react-bootstrap'

const PageBanna = ({title,subtitle,backgroundImage}) => {
  return (
    <section className='page-banner' style={{backgroundImage:`linear-gradient(to left, #8a2bff3e,black), url(${backgroundImage})`}}>

      <Container>
        <div>
          <p>MUBFLIX Cinemas</p> 
          <h1>{title}</h1>
          <h5>{subtitle}</h5>
          <aside>
            Home / {title}
          </aside>
        </div>
      </Container>
      
    </section>
  )
}

export default PageBanna
