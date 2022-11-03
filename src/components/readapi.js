
import React from "react";
import './read.css';
class Read extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://restframeworkchoki.herokuapp.com/curd/createmale/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    <h1>id: { item.id }</h1>, 
                    profile_picture: <img src= { item.profile } height={300} width={200}></img>, 
                    dob: { item.DOB } 
                    Name: { item.Name } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default Read;