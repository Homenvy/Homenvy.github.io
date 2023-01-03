import React, { Component } from "react";
import CurrentEvents from "../CurrentEvents.json";

class ChangeLog extends Component {
    state = {
        dateSel: new Date()
    };

    getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    //traverse date over an amount of days
    dateTraverse = (passDays) => {
        /*TODO: Figure out how to display only known entries
                Idea: have it subtract the known dates for each entry and determine the jump
                        from one date to the next. Example: 12/31/2022 - 12/10/2022 = 21 day 
                        time jump
        */
        let upDate = new Date().toLocaleDateString();
        let day = this.state.dateSel.getDate();
        let month = this.state.dateSel.getMonth();
        let year = this.state.dateSel.getFullYear();
        let daysInMonth = this.getDaysInMonth(month+1, year);
        
        day += passDays;
        if (day < 1) {
            if (month <= 0) {
                month = 11;
                year--;
            } else {
                month--;
            }
            day = this.getDaysInMonth(month+1, year);  
        } else if (day > daysInMonth) {
            day = 1;
            if (month+1 > 11) {
                month = 0;
                year++;
            } else {
                month++;
            }
            upDate = (month+1) + "/" + day + "/" + year;
        }
        upDate = (month+1) + "/" + day + "/" + year;
        this.setState(state => ({
            dateSel: new Date(upDate)
        }));
    };

    //calculate how many days to jump from the current date to another entry
    calcDateJump = (press) => {
        const curDate = this.state.dateSel;
        let closestDate = new Date(null);
        let daysToJump = 0;
        for (const item of CurrentEvents.currentEvents) {
            if (item.isEnabled === "1") {
                const itemDate = new Date(item.date);
                if (press > 0) {
                    if (itemDate > curDate) {
                        if (!closestDate || (itemDate < closestDate))
                            console.log(closestDate);
                            closestDate = itemDate;
                            console.log(closestDate); //here it returns 1969 date, it loses its sense of date somewhere               
                        //daysToJump = closestDate - curDate; 
                    }
                } else if (press < 0) {
                    if (itemDate < curDate) {
                        if (!closestDate || (itemDate > closestDate))
                            closestDate = itemDate;
                        //daysToJump = curDate - closestDate; 
                    }
                } else
                    if (!closestDate)
                        closestDate = curDate; //figure out cases outside dates on json. 
                    console.log("ERROR: Press should never be 0");
            }
        }
        //below converts dates into miliseconds since Unix epoch and subtracts them then divides them by 1 days worth of miliseconds.
        daysToJump = Math.floor((Date.parse(closestDate) - Date.parse(curDate))/86400000);
        console.log(daysToJump + ", " + closestDate.toLocaleDateString());
        // if (press > 0)
        //     daysToJump = -daysToJump;
        console.log("Days to skip: " + daysToJump);
        return daysToJump;
    }

    componentWillUnmount() {
        console.log("ChangeLog - Unmount");
    }

    render() {
        console.log("ChangeLog - Rendered");

        return ( 
            <table className={"changeLog"}> 
                <thead>
                    <tr>
                        <th>
                            <div onClick={() => this.dateTraverse(this.calcDateJump(1))}>+</div>
                        </th>
                        <th>
                            <div onClick={() => this.dateTraverse(this.calcDateJump(-1))}>-</div>
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
