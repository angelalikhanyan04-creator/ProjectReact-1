import axios from 'axios';
import React, { Component } from 'react';

class Api3 extends Component {

constructor(props) {
    super(props)
    this.state={
        value:"",
        info:[]
    }
}

handleSubmit=async(ev)=>{
    ev.preventDefault()
    const {value} = this.state
    const {data} = await axios.get(`https://api.unsplash.com/search/photos?query=${value}&client_id=dpmmBCZxM_UnFVV9QjN9-bfCAN3rSBXSAiZvkeyJt44`)
    console.log(data)
    this.setState({
          info:data.results
     })
}


    render() {
        const {info,value} = this.state
        return (
            <div className='box'>
                <form onSubmit={this.handleSubmit}>
                    <input value={value} onChange={(ev)=>this.setState({value:ev.target.value})} className='box1'/>
                </form>
                <div  className='box2'>
                    {info.map((item)=>(
                    <div key={item.id}>
                        <img src={item.urls.small} className='pic'/>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Api3;