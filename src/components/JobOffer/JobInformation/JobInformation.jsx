import React,{useState,useEffect} from 'react'
import "./JobInformation.css"
import { useParams ,useNavigate} from 'react-router-dom'
import { supabase } from '../../../supabase/client'

export default function JobInformation() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [company,setCompany] = useState("")
    const [location,setLocation] = useState("")
    const [salary,setSalary] = useState("")
    const [contract,setContract] = useState("")
    const [items,setItems] = useState("")
    const [responsabilities,setResponsabilities] = useState("")
    const [conditions,setConditions] = useState("")
    const [requirements,setRequirements] = useState("")
    const [start,setStart] = useState("")
    const [end,setEnd] = useState("")
    const [img,setImg] = useState("")
  

    useEffect(()=>{
        const fetchJobs = async () => {
            // const [jobs, setjobs] = useState(null);

            const {data,error} =await supabase
            .from("jobOffer")
            .select()
            .eq("id",id)
            .single()
            console.log(data)

            if (error) {
                useNavigate
                navigate('/', { replace: true })
              }
            //   uguale a fetch job
            if (data) {
                setTitle(data.title)
                // setMethod(data.method)
                // setRating(data.rating)
                console.log(title)
              }
            }
        
            fetchJobs()
          }, [id, navigate])



  return (
    <div>JobInformation-{id},{title}</div>
  )
}
