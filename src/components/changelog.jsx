//import { array, object } from "prop-types";
import React, { Component } from "react";
import CurrentEvents from "../CurrentEvents.json";

class ChangeLog extends Component {

    state = {
        dateSel : new Date(),
        dataList : [],
        listIndex : 0
    };

    //fill the list with information from an api
    componentDidMount = () => {//just got the sorting to work, now to display it properly.
        var newData = this.state.dataList;
        let i = 0

        CurrentEvents.currentEvents.forEach(item => {
            newData[i++] = item;
        });

        newData = this.sortList(newData);
        newData = this.enabledFilter(newData);

        const curDate = newData[0].date;

        this.setState(state => ({
            dataList : newData,
            dateSel : new Date(curDate)
        }));
    }

    //using mergesort to sort the list
    sortList = (myList) => {
        //Base case: if the list has 1 or less elements, its sorted.
        if (myList.length <= 1) {
            return myList;
        }

        //split the list into halves
        const middle = Math.floor(myList.length / 2);
        var left = myList.slice(0, middle);
        var right = myList.slice(middle);

        //sort the list recursively
        left = this.sortList(left);
        right = this.sortList(right);

        //merge the sorted halves back into one
        var result = [];
        let leftIndex = 0, rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (new Date(left[leftIndex].date) > new Date(right[rightIndex].date)) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        result = result.concat(left.slice(leftIndex));
        result = result.concat(right.slice(rightIndex));

        return result;
    }

    //filter out entries not enabled
    enabledFilter = (myList) => {
        for(let i = 0; i < myList.length; i++) {
            var item = myList[i];
            if (item.isEnabled === "0") {
                myList.splice(i, 1);
            }
        }
        return myList;
    }

    //determines next available listed date and sets up the parameters for how the changelog displays information
    nextClosestDate = (press) => {
        
        const curDate = this.state.dateSel;
        const tempList = this.state.dataList;
        let curIndex = this.state.listIndex;

        //index should reflect the pressed button
        (press > 0) ? --curIndex : ++curIndex;
        //TODO: Below logic has the changelog acting weird
        //check if index is out of bounds
        if (curIndex <= 0)
            curIndex = tempList.length-1;
        else if (curIndex >= tempList.length)
            curIndex = 0;

        //cycle past entries with the same date
        while (curDate.toLocaleDateString() === tempList[curIndex].date && curIndex > 0 && curIndex < tempList.length) {
            (press > 0) ? --curIndex : ++curIndex;
        }

        //compares dates before updating state for next iteration
        if (curDate.toLocaleDateString() !== tempList[curIndex].date && curIndex < tempList.length) {
            this.setState(state => ({
                listIndex : curIndex,
                dateSel: new Date(tempList[curIndex].date),
            }));
        }
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
                            <div onClick={() => this.nextClosestDate(1)}>+</div>
                        </th>
                        <th>
                            <div onClick={() => this.nextClosestDate(-1)}>-</div>
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
                    {this.state.dataList.map((item, i) => ( 
                        (item.date === this.state.dateSel.toLocaleDateString()) 
                            ? <tr key={i}>
                                <td colSpan={2}>{item.name}</td>
                                <td colSpan={2}>{item.desc}</td>
                            </tr> 
                            : <tr key={i}></tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default ChangeLog;

     //calculate how many days to jump from the current date to another entry
     //FUNCTION DEPRECATED: however I would like to keep this function safe for now
    // calcDateJump = (press) => {
    //     const curDate = this.state.dateSel;
    //     let closestDate = new Date(null);
    //     let daysToJump = 0;
    //     for (const item of CurrentEvents.currentEvents) {
    //         if (item.isEnabled === "1") {
    //             const itemDate = new Date(item.date);
    //             if (press > 0) {
    //                 if (itemDate > curDate) {
    //                     if (!closestDate || (itemDate < closestDate))
    //                         console.log(closestDate);
    //                         closestDate = itemDate;
    //                         console.log(closestDate); //TODO: here it returns 1969 date, it loses its sense of date somewhere               
    //                     //daysToJump = closestDate - curDate; 
    //                 }
    //             } else if (press < 0) {
    //                 if (itemDate < curDate) {
    //                     if (!closestDate || (itemDate > closestDate))
    //                         closestDate = itemDate;
    //                     //daysToJump = curDate - closestDate; 
    //                 }
    //             } else
    //                 if (!closestDate)
    //                     closestDate = curDate; //TODO: figure out cases outside dates on json. 
    //                 console.log("ERROR: Press should never be 0");
    //         }
    //     }
    //     //below converts dates into miliseconds since Unix epoch and subtracts them then divides them by 1 days worth of miliseconds.
    //     daysToJump = Math.floor((Date.parse(closestDate) - Date.parse(curDate))/86400000);
    //     console.log(daysToJump + ", " + closestDate.toLocaleDateString());
    //     // if (press > 0)
    //     //     daysToJump = -daysToJump;
    //     console.log("Days to skip: " + daysToJump);
    //     return daysToJump;
    // }

    // FUNCTION DEPRECATED: used with other two commented functions. This just returns amount of days in a given month/year.
    // getDaysInMonth = (month, year) => {
    //     return new Date(year, month, 0).getDate();
    // };

    //traverse date over an amount of days
    // FUNCTION DEPRECATED: more efficient function for intended use available, however want to keep code for potential later use.
    // dateTraverse = (passDays) => {

    //     let upDate = new Date().toLocaleDateString();
    //     let day = this.state.dateSel.getDate();
    //     let month = this.state.dateSel.getMonth();
    //     let year = this.state.dateSel.getFullYear();
    //     let daysInMonth = this.getDaysInMonth(month+1, year);
        
    //     day += passDays;
    //     if (day < 1) {
    //         if (month <= 0) {
    //             month = 11;
    //             year--;
    //         } else {
    //             month--;
    //         }
    //         day = this.getDaysInMonth(month+1, year);  
    //     } else if (day > daysInMonth) {
    //         day = 1;
    //         if (month+1 > 11) {
    //             month = 0;
    //             year++;
    //         } else {
    //             month++;
    //         }
    //         upDate = (month+1) + "/" + day + "/" + year;
    //     }
    //     upDate = (month+1) + "/" + day + "/" + year;
    //     this.setState(state => ({
    //         dateSel: new Date(upDate)
    //     }));
    // };
