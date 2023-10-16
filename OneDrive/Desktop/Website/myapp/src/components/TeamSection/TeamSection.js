
import React from 'react'
import './TeamSection.css'

export function TeamSection(){


const details=[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvmFh3UxOkWLzHVS8_c4MDbDNsZhPvvxcXg&usqp=CAU",
        name:"Suyash Kumar",
        occupation:"Co-founder @optum"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWIFnw1sQMcKO5BI7jmA4OPUZgpWtM3PC0MEyl_tGPp5jckEEhcTOcGIRrxm-VD9slq8&usqp=CAU",
        name:"Rahul Garg ",
        occupation:"Data Scientist @ Microsoft"   
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZm-mkTYMGdXtQhF-gh3XTLjCmr3TdCFqCw&usqp=CAU",
        name:"Rajnesh Kumar",
        occupation:"Applied Scientist @ Amazon"   
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHksLYKdd696lVE2GXY5P4AUdWPlFCuiyD1g&usqp=CAU",
        name:"Mayank Srivastava",
        occupation:"CTO @ Languify"   
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh__Lc9DnmvhyRDs6RTaSuYc4s5NeMKnCFcQ&usqp=CAU",
        name:"Rajat Gupta",
        occupation:"Co-founder @optum"   
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lB0zHrt60hoQLrfN_6yRD38TDrxrhgsw1Q&usqp=CAU",
        name:"Parsey Dichi",
        occupation:"Co-founder @Dubdub.ai"   
    }, 
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbgz2Uh6-KCgnX_mKMXzTl0DhZHZkdOjvI6D5QRFtpp-d4yufOciriOfWB5U15nvndow&usqp=CAU",
        name:"Kithore Kumar",
        occupation:"SDE @Amazon"   
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bCLQlYo6c48Wxt28KArrOHCptfGGqBb9Xg&usqp=CAU",
        name:"Rajat Gupta",
        occupation:"Co-founder @optum"   
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWIFnw1sQMcKO5BI7jmA4OPUZgpWtM3PC0MEyl_tGPp5jckEEhcTOcGIRrxm-VD9slq8&usqp=CAU",
        name:"Rahul Garg ",
        occupation:"Data Scientist @ Microsoft"   
    }
]

    return(
        <>
        <h3 style={{display:'flex',  justifyContent:'center', marginTop:'2rem'}}><strong>Meet Our Team</strong></h3>
        <div className='Team_parent'>
           {details.map(ele=>(
            <div className='Team_card'>
            <img src={ele.img}/>
                <h4>{ele.name}</h4>
                <p>{ele.occupation}</p>
            </div>
           ))}

           {/* <div className={styles.parent}>
                {Array.from(Array(10)).map(ele=>(
                    <div className={styles.card}></div>
                ))}
           </div> */}
        </div>
        </>
    )
}