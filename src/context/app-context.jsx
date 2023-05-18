import { createContext, useState } from "react";

export const AppContext = createContext({
    // expenses: [],
    // addNewExpense: (data) => { },
    // removeExpense: (id) => { },
    // addExpense: (data) => { },
});

// expenses =>  to use it in useState.
// addNewExpense =>  to add a expense
// removeExpense =>  to delete a expense
// addExpense => to display all cards(data) from firebase.

export const AppContextProvider = (props) => {
    // let [expenses_2, setExpenses_2] = useState([]);

    /* 
    * ******************************************
    * Methods
    * ******************************************
    */
    //add
    // let addNewExpense_2 = (newExpenses) => {
    //     setExpenses_2((prevState) => {
    //         return [newExpenses, ...prevState];
    //     });
    // };

    //delete
    // let removeExpense_2 = (id) => {
    //     let data = expenses_2.filter((element) => element.id != id);
    //     setExpenses_2(data);
    // };

    // let addExpense_2 = (array) => {
    //     setExpenses_2(array);
    // };
    /* 
    * ******************************************
    * EndMethods
    * ******************************************
    */    return (
        <AppContext.Provider value={{
            // expenses: expenses_2,
            // addNewExpense: addNewExpense_2,
            // removeExpense: removeExpense_2,
            // addExpense: addExpense_2,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}