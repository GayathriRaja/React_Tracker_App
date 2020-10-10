import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Line} from 'react-chartjs-2'


const Dashboard=()=>{

    const [selectedDate,setSelectedDate]=useState('');
    const [countHigh,setCountHigh]=useState(3);
    const [countDatewise,setCountDatewise]=useState(3);

    const [getDetails,setGetDetails]=useState([]);
    const [viewAllHighPriority,setViewAllHighPriority]=useState(true);
    const [viewAllLatesUpdate,setViewAllLatesUpdate]=useState(true);

var value1=countHigh;
var value2=countDatewise;

    //Dummy Data


    // var dummyData=[{id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'HighPriority'},
    //     {id:1000156,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'HighPriority'},
    //     {id:1000157,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'LowPriority'},
    //     {id:1000158,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'HighPriority'},
    //     {id:1000159,date:"10/05/2020",title:"Lorem ipsum dolor sit",description:"Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit",assigne:"Sijo",status:'LowPriority'}

    //     ]

    fetch('http://localhost:8000/api/v1/issues/').then(result=>result.json()).then(result=>{
        setGetDetails(result)
    })





    const [graphData,setGraphData]=useState({
        labels:[1,2,3,4,5],
        datasets:[{
            label:"New Added Issues",
            backgroundColor:" #5c85d6",
            pointRadius:0,
            // steppedLine:false,
            borderWidth:0,

            data:[20,5,15,5,10]                //blue color
        },{
            label:"Showstoppers",
            backgroundColor:" #d98cd9",
            pointRadius:0,
            borderWidth:0,

            // steppedLine:false,
            data:[5,10,7,17,4]               //Violet color
        }]
    })



const onClickHandlerCountHigh=()=>{
    setViewAllHighPriority(false);
        setCountHigh(10);
        
    }

    const onClickHandlerCountDatewise=()=>{
        setViewAllLatesUpdate(false);

        setCountDatewise(10);
        
    }



const  onClickHandlerSeeLessHigh=()=>{
    setViewAllHighPriority(true);
        setCountHigh(3)
}

const  onClickHandlerSeeLessDatewise=()=>{
    setViewAllLatesUpdate(true);
        setCountDatewise(3)
    // }
}


    return (
        <div id="dashboard">
                    <h3>Dashboard</h3>
                    <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat="MM/yyyy" showFullMonthYearPicker />
                    
                    <div id="graph_dashboard"  >

                        <Line  options={{responsive:true,scales:{
                                xAxes:[
                                    {
                                        gridLines:{
                                            drawOnChartArea:false
                                        }
                                    }
                                ],
                                yAxes:[
                                    {
                                        gridLines:{
                                            drawOnChartArea:false
                                        }
                                    }
                                ],
                            
                                }}} data={graphData}   />
                    </div>


                    <div id="highPriority_dashboard">
                        
                        <h4 id="heading_highpriority">High Priority</h4>
                        {

                            getDetails.map(data=>{
                                 

                                if(data.priority=="HIGH" && value1>=0){
                                    value1--;
                                    return (
                                            <div id="highpriority_details">
                                                <h5>{data.title}</h5> 
                                                <label>{data.created_at}</label>
                                                <p>{data.description}</p>    
                                            </div>
                                        )
                                    }
                                })
                        }
                        { viewAllHighPriority ?
                            <button  onClick={onClickHandlerCountHigh}  id="view_all_btn">View All</button>
                            :   <button  onClick={onClickHandlerSeeLessHigh} id="view_all_btn">See Less</button>
                            
                        }


                    </div>


                    
                    <div id="recently_updated_issues">
                        
                        <h4 id="heading_recently_updated_issues">Recently Updated Issue</h4>
                        {
                            getDetails.reverse().map(data=>{

                                if(data.id  && value2>=0){
                                    value2--;
                                    return (
                                            <div id="highpriority_details">
                                                <h5>{data.title}</h5> 
                                                <label>{data.created_at}</label>
                                                <p>{data.description}</p> 
                                                  
                                            </div>
                                        )
                                    }
                                })
                        }

                        { viewAllLatesUpdate ?
                            <button  onClick={onClickHandlerCountDatewise}  id="view_all_btn">View All</button>
                            : <button  onClick={onClickHandlerSeeLessDatewise} id="view_all_btn">See Less</button>
                            
                        }


                    </div>
      </div>
    )
}
                            
export default Dashboard
