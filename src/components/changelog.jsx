import React, { Component } from "react";
import CurrentEvents from "../CurrentEvents.json";

class ChangeLog extends Component {
    state = {
        dateSel: new Date()
    };

    getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    daySelection = (passDays) => {
        /*TODO: Handle new months and new years in incrementing / decrementing
        */
        let upDate = new Date().toLocaleDateString();
        let day = this.state.dateSel.getDate();
        let daysInMonth = this.getDaysInMonth(this.state.dateSel.getMonth()+1, this.state.dateSel.getFullYear());
        console.log(daysInMonth);
        day += passDays;
        if (day < 1) {
            day = this.getDaysInMonth(this.state.dateSel.getMonth()-1, this.state.dateSel.getFullYear());
            upDate = this.state.dateSel.getMonth() + "/" + day + "/" + this.state.dateSel.getFullYear();
            
        } else if (day > 31) {
            day = 1;
            upDate = (this.state.dateSel.getMonth()+2) + "/" + day + "/" +this.state.dateSel.getFullYear();
        } else {
            upDate = (this.state.dateSel.getMonth()+1) + "/" + day + "/" +this.state.dateSel.getFullYear();
        }
        console.log(upDate);
        this.setState(state => ({
            dateSel: new Date(upDate)
        }));
    };

    componentWillUnmount() {
        console.log("ChangeLog - Unmount");
    }

    render() {
        console.log("ChangeLog - Rendered");

        //console.log(this.state.dateSel.toLocaleDateString());

        return ( 
            <table className={"changeLog"}> 
                <thead>
                    <tr>
                        <th>
                            <div onClick={() => this.daySelection(1)}>+</div>
                        </th>
                        <th>
                            <div onClick={() => this.daySelection(-1)}>-</div>
                        </th>
                        <th colSpan={2}>Changelog</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>{this.state.dateSel.toLocaleDateString()}</td>
                        <td colSpan={2}>Description</td>
                    </tr>
                    {CurrentEvents.currentEvents.map((item, i) => (
                        (item.isEnabled === "1")
                        ? 
                            (item.date === this.state.dateSel.toLocaleDateString())
                            ?
                            <tr key={item.name + item.date}>
                                <td colSpan={2}>{item.name}</td>
                                <td colSpan={2}>{item.desc}</td>
                            </tr>
                            :
                            <tr key={i}>
                                <td colSpan={4}> </td>
                            </tr> 
                        : 
                            <tr key={i}></tr>
                    ))}
                </tbody>
            </table>
        );
  }
}

export default ChangeLog;
